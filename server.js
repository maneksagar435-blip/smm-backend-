import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.post("/order", (req, res) => {
    const { service, user } = req.body;
    if (!service || !user) {
        return res.json({ success: false, message: "Missing data" });
    }
    return res.json({ success: true, orderId: Math.floor(Math.random()*99999) });
});

app.listen(3000, () => console.log("SMM backend live"));
