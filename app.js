const express = require('express');
const path = require('path');
const indexRouter = require('./app_server/routes/index');

const app = express();

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/stylesheets', express.static(path.join(__dirname, 'stylesheets')));
app.use('/stylesheets', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/javascripts', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));

app.use('/', indexRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`ApexFlow running on http://localhost:${port}`));
