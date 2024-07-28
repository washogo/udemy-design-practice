import express from 'express';
import morgan from 'morgan';
import 'express-async-errors';

const PORT = 3000;

const app = express();

app.use(morgan('dev'));
app.use(express.static('static', { extensions: ['html'] }));

app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Hello Express',
  });
});

app.get('/api/error', async () => {
  throw new Error('Error endpoint');
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

function errorHandler(err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) {
  console.error('Unexpected error occurred', err);
  res.status(500).send({
    message: 'Unexpected error occurred',
  });
}
