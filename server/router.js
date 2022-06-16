const path = require('path');
const { mockserverController } = require('./controllers/mockserverController');
const { mockController } = require('./controllers/mockController');
const { staticController } = require('./controllers/staticController');

const router = async ({ reqUrl, reqMethod, queryParameters, payload }) => {
  if (reqUrl.includes('mockserver')) {
    return await mockserverController(reqUrl, payload);
  } else if (path.extname(reqUrl)) {
    return await staticController(reqUrl);
  } else {
    return await mockController(reqUrl, reqMethod, payload);
  }
};

module.exports = {
  router
};