module.exports.pokemon = pokemon;

function pokemon(context) {
  console.log('訊息內容', context.message.text);
  context.replyText(
    `寶可夢有這些屬性: 一般 火 水 草 岩 地 鋼 超能力 幽靈 妖精 電`,
    {
      quickReply: {
        items: [
          // {
          //   type: 'action',
          //   action: {
          //     type: 'message',
          //     label: '貼圖',
          //     text: '貼圖',
          //   },
          // },
          // {
          //   type: 'action',
          //   action: {
          //     type: 'message',
          //     label: '地址',
          //     text: '地址',
          //   },
          // },
          {
            type: 'action',
            action: {
              type: 'message',
              label: '一般',
              text: '查屬性 一般',
            },
          },
          {
            type: 'action',
            action: {
              type: 'message',
              label: '火',
              text: '查屬性 火',
            },
          },
        ],
      },
    }
  );
}
