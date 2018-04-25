'use strict';

const Service = require('egg').Service,
  assert = require('assert');

class TaskService extends Service {
  async query(projectId) {
    return await this.ctx.model.Task.find({ project: projectId })
      .sort({ priority: 1 })
      .exec();
  }

  async create(param) {
    console.log(project)
    assert(param.name, '名称不能为空');
    assert(param.project, '所属人不能为空');
    const task = new this.ctx.model.Task(param);
    await task.save(err => {
      if (err) {
        throw err;
      }
    });
    return { _id: task._id };
  }
}

module.exports = TaskService;
