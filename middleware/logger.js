const logger = (req, res, next) => {
    req.hello = 'hello world';
    console.log('Middleware ran');
    next();
}

module.exports = logger;