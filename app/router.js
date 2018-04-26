'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app,
    responseBody = app.middlewares.responseBody;
  router.get('/', controller.home.index);
  router.get('/weapp/jscode2session', responseBody, controller.wechatController.jscode2session);
  router.post('/project/create', responseBody, controller.projectController.create);
  router.post('/project/get/:id', responseBody, controller.projectController.get);
  router.post('/project/unArchive/:id', responseBody, controller.projectController.unArchive);
	router.post('/project/archive/:id', responseBody, controller.projectController.archive);
  router.post('/project/query', responseBody, controller.projectController.query);
  router.post('/project/addTask', responseBody, controller.projectController.addTask);
  router.post('/project/completeTask/:id', responseBody, controller.projectController.completeTask);
  router.post('/project/unCompleteTask/:id', responseBody, controller.projectController.unCompleteTask);
  router.post('/project/deleteTask/:id', responseBody, controller.projectController.deleteTask);
};
