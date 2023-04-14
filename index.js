const express = require('express');
const exphbs = require('express-handlebars');
const conn = require('./db/conn');

const app = express();

// Models
const Product = require('./models/Product');

// Controllers
const ProductController = require('./controllers/ProductController');

//Routes
const productsRoutes = require('./routes/productsRoutes');

app.engine('hbs', exphbs.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

app.use(express.static(('public')));

app.use('/products', productsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    ;
    console.log(`Listening on port ${PORT}!`)
});