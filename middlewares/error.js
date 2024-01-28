const handleError = () => {
  return (err, req, res, next) => {
    if (res.headerSent) {
      return next(err);
    }
    res.status(err.code || 500);
    res.json({ message: err.message || "An unknown error occurred!" });
  };
};

module.exports = handleError;
