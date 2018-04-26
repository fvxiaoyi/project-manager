'use strict';

const Service = require('egg').Service,
  assert = require('assert');

class ProjectService extends Service {
  async query(ownerId, archive) {
    return await this.ctx.model.Project.find({ ownerId, archive })
      .sort({ createTime: -1 })
      .exec();
  }

  async get(_id) {
    assert(_id, '必须传入id');
    let find = await this.ctx.model.Project.findOne({ _id }).exec();
    assert(find, '找不到该项目');
    find = find.toObject();
    const tasks = await this.ctx.service.taskService.query(find._id);
    find.tasks = tasks;
    return find;
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

  async archive(_id) {
    assert(_id, 'id 不能为空');
    await this.ctx.model.Task.findOneAndUpdate({ _id }, {
      archive: 1
    });
    return { _id };
  }

  async unArchive(_id) {
    assert(_id, 'id 不能为空');
    await this.ctx.model.Task.findOneAndUpdate({ _id }, {
      archive: 0
    });
    return { _id };
  }

}

module.exports = ProjectService;
