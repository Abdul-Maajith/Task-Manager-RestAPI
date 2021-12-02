const errorHandlerMiddleware = (err, req, res, next) => {
    return res.status(500).json({msg: "SOmething went Wrong, try again later"})
}

module.exports = errorHandlerMiddleware;