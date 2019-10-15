import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';

import routes from './routes/api';

const app = express();

app.use(bodyParser.json());
app.use(helmet());

app.listen(3000, () => {
  /* eslint-disable no-console */
  console.log('Server running on port 3000');
});

app.use('/api', routes);
