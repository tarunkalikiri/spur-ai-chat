import { Router } from "express";
import { v4 as uuid } from "uuid";
import { generateReply } from "./llm";
import { getDB } from "./db";

const router = Router();

router.post("/chat/message", async (req, res) => {
  try {
    const { message, sessionId } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ error: "Message cannot be empty" });
    }

    const db = getDB();
    const conversationId = sessionId || uuid();

    await db.run(
      "INSERT OR IGNORE INTO conversations (id) VALUES (?)",
      conversationId
    );

    await db.run(
      "INSERT INTO messages (id, conversation_id, sender, text) VALUES (?, ?, ?, ?)",
      uuid(),
      conversationId,
      "user",
      message
    );

    const rows = await db.all<{ text: string }[]>(
      "SELECT text FROM messages WHERE conversation_id = ? ORDER BY created_at DESC LIMIT 5",
      conversationId
    );

    const history = rows.map(r => r.text).reverse();

    const reply = await generateReply(history, message);

    await db.run(
      "INSERT INTO messages (id, conversation_id, sender, text) VALUES (?, ?, ?, ?)",
      uuid(),
      conversationId,
      "ai",
      reply
    );

    res.json({ reply, sessionId: conversationId });
  } catch (err) {
    console.error(err);
    res.json({
      reply: "Sorry, I'm having trouble right now. Please try again."
    });
  }
});

export default router;
