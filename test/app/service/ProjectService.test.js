'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/service/ProjectService.test.js', () => {

  /* it('should create', async function() {
    const ctx = app.mockContext();
    const result = await ctx.service.projectService.create('赛车', 'xxx');
    console.log(result);
    return result;
  });

  it('should query', async function() {
    const ctx = app.mockContext();
    const result = await ctx.service.projectService.query('xxx');
    console.log(result);
    return result;
  });*/

  it('should get', async function() {
    const ctx = app.mockContext();
    const result = await ctx.service.projectService.get('5ad6f52d1955d81f946bdd11');
    console.log(result);
    return result;
  });

});
