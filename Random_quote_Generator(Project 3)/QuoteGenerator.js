const express = require("express");
const app = express();

const Quotes = [
    {
        id: 1,
        category: "Discipline",
        quote: "Success starts with self-discipline."
    },
    {
        id: 2,
        category: "Motivation",
        quote: "Small progress is still progress."
    },
    {
        id: 3,
        category: "Dreams",
        quote: "Dream big, start small, act now."
    },
    {
        id: 4,
        category: "Consistency",
        quote: "Consistency beats motivation."
    },
    {
        id: 5,
        category: "Courage",
        quote: "Do it scared, but do it anyway."
    },
    {
        id: 6,
        category: "Future",
        quote: "Your future depends on today."
    },
    {
        id: 7,
        category: "Growth",
        quote: "Focus on progress, not perfection."
    },
    {
        id: 8,
        category: "Hard Work",
        quote: "Hard work changes everything."
    },
    {
        id: 9,
        category: "Patience",
        quote: "Stay patient and trust the process."
    },
    {
        id: 10,
        category: "Discipline",
        quote: "Discipline is stronger than motivation."
    },
    {
        id: 11,
        category: "Learning",
        quote: "Learn something new every day."
    },
    {
        id: 12,
        category: "Success",
        quote: "Great things take time."
    },
    {
        id: 13,
        category: "Motivation",
        quote: "Keep going, you're getting there."
    },
    {
        id: 14,
        category: "Success",
        quote: "Winners never stop improving."
    },
    {
        id: 15,
        category: "Confidence",
        quote: "Confidence comes from practice."
    },
    {
        id: 16,
        category: "Strength",
        quote: "Turn pain into power."
    },
    {
        id: 17,
        category: "Mindset",
        quote: "Be stronger than your excuses."
    },
    {
        id: 18,
        category: "Motivation",
        quote: "One day or day one — you decide."
    },
    {
        id: 19,
        category: "Strength",
        quote: "Push yourself beyond limits."
    },
    {
        id: 20,
        category: "Success",
        quote: "Success is built daily."
    }
];

app.get("/health", (req, res) => {
    res.status(200).json({ message: "API IS FINE" })
})

app.get("/quote/:id", (req, res) => {
    try {
        const id = Number(req.params.id);
        const quoteByID = Quotes.find(q => q.id === id)
        res.status(200).json(`Message:${quoteByID.quote}&& Category:${quoteByID.category} && ID:${quoteByID.id}`)
    } catch (error) {
        res.status(404).json({ Message: "Page Not Found" })
    }
})

app.get("/quote/cat/:category", (req, res) => {
    try {
        const category = req.params.category;
        const quoteByCategory = Quotes.filter(q => q.category === category)
            if (quoteByCategory.length === 0) {

            return res.status(404).json({
                message: "Category NOT FOUND"
            });
        }else{
             res.status(200).json(quoteByCategory)
        }
       
    } catch (error) {
        res.status(404).json({ Message: "Page Not Found" })
    }
})

app.get("/randomQuotes", (req, res) => {
    try {
        const randomQuote =
            Quotes[Math.floor(Math.random() * Quotes.length)];
        res.status(200).json(`Message:${randomQuote.quote} && Category:${randomQuote.category} && ID:${randomQuote.id}`)
    } catch (error) {
        res.status(404).json({ Message: "Page Not Found" })
    }
})
app.listen("3000");