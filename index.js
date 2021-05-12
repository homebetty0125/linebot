const linebot = require('linebot');
const express = require('express');
const webhookRouter = require('./routes/webhook');
const app = express();

app.use('/webhook', webhookRouter);


/**
 * Reference
 * [Heroku]
 *      https://www.oxxostudio.tw/articles/201701/line-bot.html
 *      https://developers.line.biz/zh-hant/docs/messaging-api/building-sample-bot-with-heroku/#deploy-the-echo-sample-bot
 * [Bottender]
 *      https://blog.yoctol.com/%E4%BB%A5-bottender-v1-%E6%92%B0%E5%AF%AB%E7%B0%A1%E5%96%AE%E7%9A%84%E5%8D%A1%E7%B1%B3%E7%8B%97-938243e2dc46
 * [ngrok]
 *      https://medium.com/pyradise/%E4%BD%BF%E7%94%A8node-js%E5%BB%BA%E7%BD%AE%E4%BD%A0%E7%9A%84%E7%AC%AC%E4%B8%80%E5%80%8Bline-bot-590b7ba7a28a
 *      https://ithelp.ithome.com.tw/articles/10216236
 */
