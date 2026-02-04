import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;
const HOST = '0.0.0.0';

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  next();
});

app.get('/', (req, res) => {
  res.json({
    message: 'API is running',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      api: '/api'
    }
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

app.listen(PORT, HOST, () => {
  console.log(`API server running at http://${HOST}:${PORT}`);
});
