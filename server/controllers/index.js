const {
  login, signUp, authUser, logout,
} = require('./users');
const { getReviewes } = require('./review');
const { serverError, clientError } = require('./errors');
const { getTypeControllers, getBrands } = require('./cars');
const { isAuth, isAdmin } = require('./middleware');
const { postBrand, postType } = require('./admin');

module.exports = {
  login,
  serverError,
  clientError,
  getTypeControllers,
  getReviewes,
  isAuth,
  isAdmin,
  authUser,
  getBrands,
  postBrand,
  signUp,
  logout,
  postType,
};
