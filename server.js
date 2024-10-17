const express = require('express');
const cors = require('cors');
const { log } = require('console');
const app = express();

app.use(cors());
app.use(express.json()); // JSONボディのパース

// 接続中のクライアントを保持するリスト
let clients = [];

// クライアントごとにメッセージを送信
const sendMessageToClients = (message) => {
    clients.forEach((client) => {
        client.res.write(`data: ${JSON.stringify(message)}\n\n`);
    });
};

// SSEエンドポイント
app.get('/sse-endpoint', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // 新しいクライアントを追加
    const clientId = Date.now();
    clients.push({ id: clientId, res });

    // クライアントが接続を切った場合にリストから削除
    req.on('close', () => {
        clients = clients.filter(client => client.id !== clientId);
    });
});

// 外部からのメッセージを受け取るエンドポイント
app.post('/send-message', (req, res) => {
    log('メッセージを受け取りました');
    const message = req.body;
    if (message && message.text) {
        // 全クライアントにメッセージを送信
        sendMessageToClients(message);
        res.status(200).json({ status: 'Message received' });
    } else {
        res.status(400).json({ error: 'Invalid message format' });
    }
});

app.listen(3000, () => {
    console.log('SSE server running on http://localhost:3000');
});
