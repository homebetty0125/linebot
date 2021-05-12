const express = require('express');
const router = express.Router();
const linebot = require('linebot');

console.log('webhook.js is working');

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

const linebotParser = bot.parser();
router.post('/', linebotParser);

module.exports = router;
