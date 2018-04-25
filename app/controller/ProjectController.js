'use strict';

const Controller = require('egg').Controller;

class ProjectController extends Controller {
  async query() {
    const params = this.ctx.request.body;
    let result = {}, data = [];
    data = await this.ctx.service.projectService.query(params.ownerId);
    result.data = data;
    result.total = data.length;
    this.ctx.body = result;
  }

  async get() {
    let result = await this.ctx.service.projectService.get(this.ctx.params.id);
    this.ctx.body = result;
  }

  async create() {
  	const params = this.ctx.request.body;
  	this.ctx.body = await this.ctx.service.projectService.create(params.name, params.ownerId);
  }
}

module.exports = ProjectController;
