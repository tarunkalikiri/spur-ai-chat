# AI Support Chat – Spur Take-Home Assignment

A lightweight customer support chat system built for the **Spur – Founding Full-Stack Engineer** take-home assignment.

This project simulates a live chat widget where user messages are sent to a backend, persisted with session context, and answered by an AI layer (mocked for reliability).

---

## Features

- Live chat UI (HTML-based widget)
- Backend API using Node.js + TypeScript
- Session-based conversations
- Message persistence with SQLite
- AI response layer (mocked, LLM-ready)
- Graceful error handling and input validation
- No authentication required

---

## Tech Stack

### Backend
- Node.js
- TypeScript
- Express
- SQLite
- ts-node-dev

### Frontend
- Plain HTML + JavaScript (no build tools)

### AI Layer
- Rule-based mock AI
- Easily replaceable with OpenAI / Claude

---

## Project Structure

spur-ai-chat/
├─ backend/
│ ├─ src/
│ │ ├─ app.ts
│ │ ├─ routes.ts
│ │ ├─ db.ts
│ │ └─ llm.ts
│ └─ package.json
│
├─ frontend/
│ └─ chat.html
│
└─ README.md

yaml
Copy code

---

## How to Run Locally

### 1. Start Backend

```bash
cd backend
npm install
npm run dev
Backend runs at:

arduino
Copy code
http://localhost:5000
2. Start Frontend
No install required.

Open frontend/chat.html in a browser

Ensure backend is running

Start chatting

AI / LLM Notes
Due to API quota limits, the AI layer is currently mocked using rule-based logic.

Supported interactions
Greetings (hi / hello)

Name introduction (“my name is …”)

Return policy

Shipping / delivery

Support hours

Example
“What is your return policy?”
→ 7-day returns on unused items

“Do you ship to USA?”
→ Worldwide shipping, 7–10 days

Why mock AI?
Avoids API quota and billing issues

Keeps system deterministic

Backend architecture allows easy swap to a real LLM with minimal changes

Architecture Overview
Routes layer: API handling and validation

DB layer: SQLite initialization and access

AI layer: Encapsulated response logic

Frontend: Lightweight REST-based chat widget

Designed to be easily extended for:

WhatsApp / Instagram / Live Chat

Real LLM providers

Streaming responses or caching

Robustness
Empty messages rejected

Backend never crashes on bad input

Friendly fallback responses

Session persistence using sessionId

Graceful handling of AI failures

If I Had More Time
Replace mock AI with real LLM + streaming

Load conversation history on refresh

Improve UI/UX (typing indicators, styling)

Deploy backend and frontend publicly

Add Redis for caching sessions

Submission Note
This project demonstrates:

End-to-end full-stack ownership

Clean API and system design

Production-minded error handling

AI-ready architecture

markdown
Copy code
