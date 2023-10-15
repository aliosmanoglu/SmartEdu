const express = require('express');
const pageController = require('./controllers/pageController');

const app = express();

//Template Engine
app.set('view engine','ejs');

//Middlewares
app.use(express.static('public'))

//Routes
app.get('/',pageController.getIndexPage);
app.get('/about',pageController.getAboutPage);
app.get('/blog',pageController.getBlogPage);
app.get('/contact',pageController.getContactPage);
app.get('/pricing',pageController.getPricingPage);
app.get('/teachers',pageController.getTeachersPage);





const port = 3000;



app.listen(port,() => {
    console.log("Sunucu Başlatıldı.");
})