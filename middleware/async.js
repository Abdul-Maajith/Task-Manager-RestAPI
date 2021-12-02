// As we are using Async/Await, we need to use try/catch block.
// so, in order to avoid, we use async - middleware

const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

module.exports = asyncWrapper;
