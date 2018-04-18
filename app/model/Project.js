'use strict';

module.exports = app => {
  const mongoose = app.mongoose,
    Schema = mongoose.Schema;

  const ProjectSchema = new Schema({
    name: String,
    ownerId: String,
    createTime: { type: Date, default: Date.now },
  });

  return mongoose.model('Project', ProjectSchema, 'projects');
};
