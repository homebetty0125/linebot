const linebot = require('linebot');
const express = require('express');
const app = express();

// Line Channel 資訊
const bot = linebot({
    channelId: 1552161500,
    channelSecret: '5f4e117a76c9d6515203a4d837168885',
    channelAccessToken: 'IukFQyWUmQz4ZKE9ij48Q6bzhDYIQbfPzZ0ZBU6Tmr8XK+4eRC6CN6YatVmDJSJ+dT696SH7LwI7V+oDPQFvUUzR+3MoAHdq53WSsZZameVwM/TcSnxLIyhyBxDDgT50zvHswT83QV1xLWClRqXHcAdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function (e) {

    const replyMesg = `Hi~ 你剛才說的是:${e.message.text}`;

    console.log('replyMesg:', replyMesg)

    // e.message.text是使用者傳給bot的訊息
    e.reply(replyMesg)
        .then(function (data) {

            // 當訊息成功回傳後的處理
            console.log('data:', data);

        })
        .catch(function (error) {

            // 當訊息回傳失敗後的處理
            console.log('error:', error);

        });

});

const linebotParser = bot.parser();
app.post('/linewebhook', linebotParser);

// Bot 所監聽的 webhook 路徑與 port
app.listen(3005);

/**
 * Reference
 * Heroku: https://developers.line.biz/zh-hant/docs/messaging-api/building-sample-bot-with-heroku/#deploy-the-echo-sample-bot
 * ngrok: https://medium.com/pyradise/%E4%BD%BF%E7%94%A8node-js%E5%BB%BA%E7%BD%AE%E4%BD%A0%E7%9A%84%E7%AC%AC%E4%B8%80%E5%80%8Bline-bot-590b7ba7a28a
 * https://ithelp.ithome.com.tw/articles/10216236
 */
