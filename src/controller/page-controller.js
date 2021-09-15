const getPageData = (req, res, next) => {
  console.log(req.body);
  res.send({
    success: true,
    data: [],
    error: null,
  });
};
module.exports = getPageData;
