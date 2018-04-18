'use strict';

/*
	priority: [0: '普通', 1: '紧急', 2: '非常紧急'],
	remindType: [0：'一次', 1：每日', 2：'每周', 3：'每月'],
  status : 0未完成，1已完成
*/

module.exports = app => {
  const mongoose = app.mongoose,
    Schema = mongoose.Schema;

  const TaskSchema = new Schema({
    name: String,
    project: {
      type: Schema.Types.ObjectId,
      ref: 'Project',
    },
    priority: { type: Number, default: 0, min: 0, max: 2 },
    remindType: { type: Number, default: 0, min: 0, max: 3 },
    remindDate: String,
    remindTime: String,
    dueDate: String,
    dueTime: String,
    remark: String,
    status: { type: Number, default: 0, min: 0, max: 1 },
    createTime: { type: Date, default: Date.now },
  });

  return mongoose.model('Task', TaskSchema, 'tasks');
};
