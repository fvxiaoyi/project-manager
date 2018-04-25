'use strict';

const Service = require('egg').Service,
  assert = require('assert');

class ProjectService extends Service {
  async query(ownerId) {
    return await this.ctx.model.Project.find({ ownerId })
      .sort({ createTime: -1 })
      .exec();
  }

  async get(_id) {
    assert(_id, '必须传入id');
    let find = await this.ctx.model.Project.findOne({ _id }).exec();
    console.log(find)
    if (find) {
      find = find.toObject();
      console.log(find)
      const tasks = await this.ctx.service.taskService.query(find._id);
      console.log(tasks)
      find.tasks = tasks;
      console.log(find)
      return find;
    }
    return null;
  }

  async create(name, ownerId) {
    assert(name, '名称不能为空');
    assert(ownerId, '所属人不能为空');
    const project = new this.ctx.model.Project({
      name,
      ownerId,
    });
    await project.save(err => {
      if (err) {
        throw err;
      }
    });
    return { _id: project._id };
  }
}

module.exports = ProjectService;
