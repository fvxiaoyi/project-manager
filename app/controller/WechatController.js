'use strict';

const Controller = require('egg').Controller,
  assert = require('assert');

class WechatController extends Controller {
  async jscode2session() {
    const code = this.ctx.query.code;
    const result = await this.ctx.curl(`https://api.weixin.qq.com/sns/jscode2session?appid=${this.config.weapp.APPID}&secret=${this.config.weapp.SECRET}&js_code=${code}&grant_type=authorization_code`, {
      // 自动解析 JSON response
      dataType: 'json',
      // 3 秒超时
      timeout: 3000,
    });
    assert(result.status === 200, '请求失败');
    this.ctx.body = result.data;
  }
}

module.exports = WechatController;
