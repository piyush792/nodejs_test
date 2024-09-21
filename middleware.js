//create the middleware
const reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send("Please provide age here again yaar..")
    } else if (req.query.age <= 18) {
        res.send("You are not eligible to access this page!")
    } else {
        next();
    }
}
module.exports = reqFilter;
