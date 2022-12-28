module.exports.divination = divination;

function divination(context) {
  let dNum = getRandom(12);
  //   context.sendText(dNum);
  switch (dNum) {
    case 1:
      context.replyText("大吉！真正的大吉！恭喜你！✧*｡٩(ˊᗜˋ*)و✧*｡");
      break;
    case 2:
      context.replyText("中吉。還不錯吧。(ゝ∀･)");
      break;
    case 3:
      context.replyText("小吉。很普通的小吉，世界和平(ﾉ>ω<)ﾉ");
      break;
    case 4:
      context.replyText("吉大吉……差一點點！只是吉而已呦。(*´∀`)~");
      break;
    case 5:
      context.replyText("半吉。祝福你！(*ˇωˇ*人)");
      break;
    case 6:
      context.replyText("末吉。不錯呢！(,,・ω・,,)");
      break;
    case 7:
      context.replyText("末小吉。勉勉強強啦！(*´∀`)");
      break;
    case 8:
      context.replyText("凶。還不算太糟！(ﾟωﾟ )");
      break;
    case 9:
      context.replyText("小凶。運氣不是很好呢，怎麼辦？Σ(ﾟдﾟ)");
      break;
    case 10:
      context.replyText("半凶。有點糟糕。(つд⊂)");
      break;
    case 11:
      context.replyText("末凶。這真的有點糟糕！(☉д⊙)");
      break;
    case 12:
      context.replyText("大凶……⁉️沒問題嗎？(((ﾟДﾟ;)))");
      break;
  }
}
function getRandom(x) {
  return Math.floor(Math.random() * x) + 1;
}
