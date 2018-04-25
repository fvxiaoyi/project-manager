'use strict';

const Controller = require('egg').Controller;

class ProjectController extends Controller {
  async query() {
    const params = this.ctx.request.body;
    const result = {};
    let data = [];
    data = await this.ctx.service.projectService.query(params.ownerId);
    result.data = data;
    result.total = data.length;
    this.ctx.body = result;
  }

  async get() {
    const result = await this.ctx.service.projectService.get(this.ctx.params.id);
    this.ctx.body = result;
  }

  async create() {
    const params = this.ctx.request.body;
    this.ctx.body = await this.ctx.service.projectService.create(params.name, params.ownerId);
  }

  async addTask() {
    const params = this.ctx.request.body;
    this.ctx.body = await this.ctx.service.projectService.create(params);
  }
}

module.exports = ProjectController;
