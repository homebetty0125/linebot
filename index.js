const linebot = require('linebot');
const express = require('express');

// Line Channel 資訊
const bot = linebot({
    channelId: 1552161500,
    channelSecret: '5f4e117a76c9d6515203a4d837168885',
    channelAccessToken: 'IukFQyWUmQz4ZKE9ij48Q6bzhDYIQbfPzZ0ZBU6Tmr8XK+4eRC6CN6YatVmDJSJ+dT696SH7LwI7V+oDPQFvUUzR+3MoAHdq53WSsZZameVwM/TcSnxLIyhyBxDDgT50zvHswT83QV1xLWClRqXHcAdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function (event) {

    const replyMesg = `Hi~ 你剛才說的是:${event.message.text}`;

    console.log('replyMesg:', replyMesg)

    // event.message.text是使用者傳給bot的訊息
    event.reply(replyMesg)
        .then(function (data) {

            // 當訊息成功回傳後的處理
            console.log('data:', data);

        })
        .catch(function (error) {

            // 當訊息回傳失敗後的處理
            console.log('error:', error);

        });

});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

const server = app.listen(process.env.port || 8080, function () {

    const port = server.address().port;
    console.log('now running on port:', port);

});

// bot.listen('/linewebhook', 3000);

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
