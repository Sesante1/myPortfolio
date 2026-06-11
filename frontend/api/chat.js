export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid messages" });
  }

  const SYSTEM_PROMPT = `You are a helpful assistant embedded in Jomel Sesante's personal portfolio website.
Answer questions about Jomel in a friendly, concise, and professional tone.
Keep answers short — 2 to 4 sentences max. Never make up information.
Always refer to Jomel in third person.

ABOUT:
Jomel Sesante is an aspiring frontend and full-stack developer based in Cebu, Philippines.
He is open to freelance work, collaborations, and new opportunities.

SKILLS:
Frontend: HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React, React Native
Backend: Node.js, Express
Tools: Git, VS Code, Postman, MySQL, Firebase

PROJECTS:
1. Veehive — React Native car rental app with Stripe, Agora video calling, Firebase, and real-time chat.
2. Sales Online — ASP.NET e-commerce site for Ethan's Appliance Center with VB.NET and SQL Server.
3. Portfolio — This site, built with React and Tailwind CSS v4.

CONTACT:
GitHub: https://github.com/Sesante1
LinkedIn: (your LinkedIn URL)
Gmail: (your Gmail)

Only answer questions relevant to Jomel's portfolio.`;

  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.VITE_APP_GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          max_tokens: 1000,
          messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        }),
      },
    );

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content;

    if (!reply) {
      return res.status(500).json({ error: "No reply from Groq" });
    }

    res.json({ reply });
  } catch (error) {
    console.error("Groq error:", error);
    res.status(500).json({ error: "Failed to reach Groq API" });
  }
}
