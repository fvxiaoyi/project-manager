'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1524022355893_648';

  // add your config here
  config.middleware = [];

  config.weapp = {
    APPID: 'wx4bb18bae392d2474',
    SECRET: 'c7af085ca42c15f950528ab3e78ae843',
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.cors = {
    allowMethods: 'GET,PUT,POST,PATCH,DELETE,HEAD,OPTIONS',
    credentials: true,
  };


  exports.mongoose = {
    url: 'mongodb://@localhost:27017/PROJECT',
  };
  return config;
};
