import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({
        message: 'Hello form a container',
        service: 'hello-node',
        pod: process.NODE_ENV.POD_NAME || 'unknown',
        time: new Date().toISOString(),
    });
});

app.get('/readyz', (req, res) => {
    res.status(200).send('ready');
});
app.get('/healthz', (req, res) => {
    res.status(200).send('ok');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});