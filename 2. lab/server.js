const express = require('express');
var path = require('path');
const session = require('express-session');
const app = express();

const homeRouter = require('./routes/home.routes');
const cartRouter = require('./routes/cart.routes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
    session({
        secret: "anything",
        resave: false,
        saveUninitialized: true,
    })
);


app.use('/', homeRouter);
app.use('/cart', cartRouter);

app.listen(3000);