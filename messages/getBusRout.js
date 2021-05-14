const request = require('request');
const cheerio = require('cheerio');

/**
 * routeid > 巴士號碼
 * gb > 往返路線
 */
// 公車路線 URL
const url = 'https://ebus.gov.taipei/EBus/VsSimpleMap?routeid=0100030700&amp;gb=0';

// 爬公車路線
const getBusRoute = () => new Promise((resolve, reject) => {

    request({
        url,
        method: 'GET',
    },
    (error, response, body) => {

        if (error) {

            console.log('error:', error);
            reject(error);

        }

        const $ = cheerio.load(body);
        const busStops = [];
        $('#plMapStops [data-stop]').each((idx, elem) => {

            busStops.push({
                stopName: $(elem).data('stop'),
                isRailway: $(elem).find('.stopIconTRW').length,
                isMRT: $(elem).find('.stopIconMRT').length,
                hasYouBike: $(elem).find('.stopIconYouBike').length,
            });

        });

        // console.log('busStops:', busStops);
        resolve(busStops);

    });

});

getBusRoute();

//
module.exports = (bot) => {

    console.log('getBusRout bot:', bot);

};

/**
 * [cheerio 爬資料]
 *      https://larrylu.blog/nodejs-request-cheerio-weather-414e33f45c7d
 *      https://peihsinsu.gitbooks.io/node-js-500-samples/content/mdfiles/cheerio.html
 *      https://github.com/hf928/line-bot/blob/master/messages/Reply_JPYExchangeRate.js
 */
