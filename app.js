const express = require('express');
const path = require('path');
require('dotenv').config();
require('./app_api/models/db');
const indexRouter = require('./app_server/routes/index');
const apiRoutes = require('./app_api/routes/index');
const loginRouter = require('./app_server/routes/login/login');
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

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`ApexFlow running on http://localhost:${port}`));
