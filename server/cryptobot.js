import express from 'express';
import Render from 'express-es6-template-engine';

import CONFIG from './config';

const app = express();

//rendering views
app.engine('html', Render);
app.set('views', './client');
app.set('view engine', 'html');

app.all('/*', (req, res, next) => {
  res.render('index', {});
});

app.listen(CONFIG.CONNECTION.PORT, function () {
  console.log(`Crypto bot started on port: ${CONFIG.CONNECTION.PORT}`);
});