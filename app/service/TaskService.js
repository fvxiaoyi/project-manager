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
    assert(param.name, '名称不能为空');
    assert(param.project, '所属人不能为空');
    assert(param.remindTime, '提醒时间不能为空');
    if(param.remindType === 1){
      assert(param.remindDate, '提醒日期不能为空');
      delete param.remindWeek
    } else if(param.remindType === 2){
      delete param.remindDate
      delete param.remindWeek
    } else {
      assert(param.remindWeek, '提醒日期不能为空');
      delete param.remindDate
    }
    const task = new this.ctx.model.Task(param);
    await task.save(err => {
      if (err) {
        throw err;
      }
    });
    return { _id: task._id };
  }

  async complete(_id) {
    assert(_id, 'id 不能为空');
    await this.ctx.model.Task.findOneAndUpdate({ _id }, {
      status: 1
    });
    return { _id };
  }

  async unCompleteTask(_id) {
    assert(_id, 'id 不能为空');
    await this.ctx.model.Task.findOneAndUpdate({ _id }, {
      status: 0
    });
    return { _id };
  }

  async delete(_id){
    assert(_id, 'id 不能为空');
    await this.ctx.model.Task.remove({ _id }, err => {
      if (err) {
        throw err;
      }
    });
  }
}

module.exports = TaskService;
