import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import OpenAI from "openai";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

const openai = new OpenAI({
    apiKey: "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"
});

app.post("/legal-advice", async (req, res) => {
    const userQuestion = req.body.question;

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are a legal assistant" },
                { role: "user", content: userQuestion }
            ]
        });

        res.json({ answer: response.choices[0].message.content });

    } catch (error) {
        console.error(error);
        res.status(500).json({ answer: "AI error" });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
