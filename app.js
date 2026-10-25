const express = require('express');
const path = require('path');
require('dotenv').config();
require('./app_api/models/db');
const indexRouter = require('./app_server/routes/index');
const apiRoutes = require('./app_api/routes/index');
const loginRouter = require('./app_server/routes/login/login');
const registerRouter = require('./app_server/routes/register/register');
const app = express();

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/stylesheets', express.static(path.join(__dirname, 'stylesheets')));
app.use('/stylesheets', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/javascripts', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/', indexRouter);
app.use('/api', apiRoutes);
app.use('/', loginRouter);
app.use('/', registerRouter);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  const status = err.status || 500;

  if (status >= 500) {
    console.error(err);
  }

  const message = status < 500 ? err.message : 'Something went wrong';

  if (req.originalUrl.startsWith('/api')) {
    return res.status(status).json({ status, message });
  }

  res.status(status).render('error', {
    title: 'Error',
    status,
    message
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`ApexFlow running on http://localhost:${port}`));
