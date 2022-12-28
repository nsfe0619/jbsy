var divination = require("./func/divination");
var weather = require("./func/weather");

module.exports = async function App(context) {
  // await context.sendText('Welcome to Bottender');
  console.log('context.event', context.event);
  if (context.event) {
    // 判斷文字
    if (context.event.isText) {
      // 判斷 天氣
      if (context.event.message.text.split(' ').length > 1 && context.event.message.text.split(' ')[1] == '天氣') {
        let loc = context.event.message.text.split(' ')[0];
        weather.weather(context,loc);
      } else {
        // 完整比對關鍵字
        switch (context.event.message.text) {
          case '你會做什麼':  
          context.replyText(
            '我會做這些',
            {
              quickReply: {
                items: [
                  {
                    type: 'action',
                    action: {
                      type: 'message',
                      label: '貼圖',
                      text: '貼圖',
                    },
                  },
                  {
                    type: 'action',
                    action: {
                      type: 'message',
                      label: '地址',
                      text: '地址',
                    },
                  },
                  {
                    type: 'action',
                    action: {
                      type: 'message',
                      label: '運勢',
                      text: '運勢',
                    },
                  },
                ],
              },
            }
          );
          break;
        
          case '貼圖':
            context.replySticker({ packageId: '6325', stickerId: '10979905' });
            break;
          case '地址':
            context.replyLocation({
              title: 'my location',
              address: '〒150-0002 東京都渋谷区渋谷２丁目２１−１',
              latitude: 35.65910807942215,
              longitude: 139.70372892916203,
            });
            break;
          case '運勢':
            // 運勢模組
            divination.divination(context);
            break;
          default:
            context.replyText('我聽不懂你在講什麼');
        }
      }
    } else if (context.event) {
      context.replySticker({ packageId: '6325', stickerId: '10979905' });
    } else {
      context.replyText('我看不懂你在講什麼');
    }
  }
};
