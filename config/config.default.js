'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1524022355893_648';

  // add your config here
  config.middleware = [];

  config.mongoose = {
    url: 'mongodb://@localhost:27017/PROJECT',
  };

  return config;
};
