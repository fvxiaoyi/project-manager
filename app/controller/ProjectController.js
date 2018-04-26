'use strict';

const Controller = require('egg').Controller;

class ProjectController extends Controller {
  async query() {
    const params = this.ctx.request.body;
    const result = {};
    let data = [];
    data = await this.ctx.service.projectService.query(params.ownerId, params.archive);
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

  async unArchive() {
    this.ctx.body = await this.ctx.service.projectService.unArchive(this.ctx.params.id);
  }

  async archive() {
    this.ctx.body = await this.ctx.service.projectService.archive(this.ctx.params.id);
  }

  async addTask() {
    const params = this.ctx.request.body;
    this.ctx.body = await this.ctx.service.taskService.create(params);
  }

  async completeTask() {
    this.ctx.body = await this.ctx.service.taskService.complete(this.ctx.params.id);
  }

  async unCompleteTask() {
    this.ctx.body = await this.ctx.service.taskService.unCompleteTask(this.ctx.params.id);
  }

  async deleteTask() {
    this.ctx.body = await this.ctx.service.taskService.delete(this.ctx.params.id);
  }
}

module.exports = ProjectController;
