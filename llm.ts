export async function generateReply(history: string[], userMessage: string) {
  const text = userMessage.toLowerCase();

  // Greeting
  if (text.includes("hi") || text.includes("hello") || text.includes("hey")) {
    return "Hi there! 👋 How can I help you today?";
  }

  // Name introduction
  if (text.includes("my name is")) {
    return "Nice to meet you! 😊 How can I assist you today?";
  }

  // FAQs
  if (text.includes("return")) {
    return "We offer 7-day returns on unused items. Please contact support to initiate a return.";
  }

  if (text.includes("ship") || text.includes("delivery")) {
    return "Yes, we ship worldwide. Delivery to the USA typically takes 7–10 business days.";
  }

  if (text.includes("support") || text.includes("hours")) {
    return "Our support team is available Monday to Friday, 9am–6pm IST.";
  }

  // Fallback
  return "Thanks for reaching out! A support agent will get back to you shortly.";
}
