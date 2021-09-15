const express = require("express");
const router = express.Router();

const homePageData = require("../controller/page-controller");

const homePageRoute = router.get("/", homePageData);

module.exports = {
  homePageRoute,
};
