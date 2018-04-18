'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/service/TaskService.test.js', () => {

  /* it('should create', async function() {
    const ctx = app.mockContext();
    const result = await ctx.service.taskService.create({
      name: 'task',
      project: '5ad6f52d1955d81f946bdd11',
      remindDate: '2018-04-18',
      remindTime: '18:00',
      dueDate: '2018-04-18',
      dueTime: '23:00',
      remark: 'aaaaaaaaa',
    });
    console.log(result);
    return result;
  });*/

  it('should query', async function() {
    const ctx = app.mockContext();
    const result = await ctx.service.taskService.query('5ad6f52d1955d81f946bdd11');
    console.log(result);
    return result;
  });


});
