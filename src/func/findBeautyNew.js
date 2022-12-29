var cheerio = require('cheerio');
var request = require('request');

module.exports.findBeautyNew = find;

async function find(context) {
    let beautyArr = await getBeautyArr();
    if(!beautyArr || beautyArr.length===0)context.replyText("沒抽到妹子請重抽")
    let beautyPage = beautyArr[parseInt(getBeautyArr.length * Math.random())];
    let beautyImg = await getImages(beautyPage.link);
    var imgArr = beautyImg.split("/");
    var imagesBack = [
        {
            type: "image",
            originalContentUrl: "https://" + imgArr + ".jpg",
            previewImageUrl: "https://i.imgur.com/" + imgArr[1] + ".jpg",
        },
        {
            type: "text",
            text: beautyPage.title+" https://www.ptt.cc" + beautyPage.link,
        },
    ];
    context
        // .replyText("https://www.ptt.cc" + url);
        .reply(imagesBack)
}

//抽表特start
const getBeautyArr = () => {
    return new Promise((resolve, reject) => {
        let beautyArr = [];
        var url =
            'https://www.ptt.cc/bbs/Beauty/index' +
            parseInt(2002 +2000* Math.random()) +
            '.html';
        request.post(
            {
                url: url,
                headers: { Cookie: 'over18=1' },
            },
            function (error, response, body) {
                var $ = cheerio.load(body);
                $('.r-ent .title a').each(function (i, elem) {
                    beautyArr.push({
                        title: $('.r-ent .title a').eq(i).text(),
                        link: $('.r-ent .title a').eq(i).attr('href')
                    });
                });
                if (beautyArr.length > 0) resolve(beautyArr);
                else {
                    reject(false);}
            }
        );
    });
};

const getImages = (post) => {
    return new Promise((resolve, reject) => {
        request.post(
            {
                url: "https://www.ptt.cc" + post,
                headers: { Cookie: "over18=1" },
            },
            function (error, response, body) {
                if (body) {
                    var images = body.match(/imgur.com\/[0-9a-zA-Z]{7}/g);
                    var randomImgArr = images;
                    if (randomImgArr) {
                        var tmpRandomImg =
                            randomImgArr[parseInt(randomImgArr.length * Math.random())];

                        resolve(tmpRandomImg, post);
                    } else {
                        reject(false);
                    }
                } else {
                    reject(false);
                }
            }
        );

    })
}
//抽表特end
