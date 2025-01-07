const horaMiddleware = (req, res, next) => {
    const now = new Date();
    const hours = now.getHours();
    req.horaExacta = hours;
    next();
}

module.exports = horaMiddleware;