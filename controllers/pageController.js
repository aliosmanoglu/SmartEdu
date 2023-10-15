exports.getIndexPage = (req,res) => {
    res.status(200).render('index',{
        pageName : "index"
    });
};
exports.getAboutPage = (req,res) => {
    res.status(200).render('about',{
        pageName : "about"
    });
};
exports.getPricingPage = (req,res) => {
    res.status(200).render('pricing',{
        pageName : "pricing"
    });
};
exports.getContactPage = (req,res) => {
    res.status(200).render('contact',{
        pageName : "contact"
    });
};
exports.getBlogPage = (req,res) => {
    res.status(200).render('blog',{
        pageName : "blog"
    });
};
exports.getTeachersPage = (req,res) => {
    res.status(200).render('teachers',{
        pageName : "teachers"
    });
};