import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const SYSTEM_PROMPT = `You are a helpful assistant embedded in Jomel Sesante's personal portfolio website.
Answer questions about Jomel in a friendly, concise, and professional tone.
Keep answers short — 2 to 4 sentences max. Never make up information.
Always refer to Jomel in third person (e.g. "Jomel is..." or "He has...").

ABOUT:
Jomel Sesante is an aspiring frontend and full-stack developer based in Cebu, Philippines.
He is passionate about building modern, responsive web and mobile applications with great user experience.
He is currently open to freelance work, collaborations, and new opportunities.

SKILLS:
Frontend: HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React, React Native
Backend: Node.js, Express
Mobile: React Native, Expo, NativeWind
Database: Firebase/Firestore, MySQL
Tools: Git, VS Code, Postman

PROJECTS:
1. Veehive — A Turo/Airbnb-style car rental mobile app built with React Native and Expo.
   Features: host and renter roles, real-time chat, Stripe payments, Agora video calling,
   map-based car search, booking system, cancellation/refund logic, check-in/check-out
   photo documentation, driver's license verification, admin dashboard.
   Tech: React Native, Expo, Firebase/Firestore, Stripe, Agora, NativeWind, Google Maps API.

2. Sales Online — An e-commerce web app for Ethan's Appliance Center.
   Features: product listings, image carousel, cart system, login/register with floating label animations, admin product management.
   Tech: ASP.NET Web Forms, VB.NET, SQL Server, Bootstrap.

3. Personal Portfolio — This website!
   Features: animated hero, canvas effects, custom cursor, project showcase,
   skills section, contact form with EmailJS, and this AI chatbot.
   Tech: React, Tailwind CSS v4, Vite, EmailJS, Node.js, Express.

CONTACT:
GitHub: https://github.com/Sesante1
LinkedIn: (update with your LinkedIn URL)
Gmail: (update with your Gmail)
Location: Cebu, Philippines

Only answer questions relevant to Jomel's portfolio. If someone asks something unrelated,
politely redirect them back to portfolio topics.`;

app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid messages" });
  }

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
    console.log("Groq response:", JSON.stringify(data, null, 2));

    const reply = data?.choices?.[0]?.message?.content;

    if (!reply) {
      return res.status(500).json({ error: "No reply from Claude" });
    }

    res.json({ reply });
  } catch (error) {
    console.error("Claude API error:", error);
    res.status(500).json({ error: "Failed to reach Claude API" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
