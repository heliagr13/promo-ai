function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6FkbxUqfjZI":
        Script1();
        break;
      case "6KxQXNxr7RU":
        Script2();
        break;
      case "6WeCvWvy4YI":
        Script3();
        break;
      case "6RNPEcUBoX5":
        Script4();
        break;
      case "6TapKwfml21":
        Script5();
        break;
      case "5tNoKbzl0Wa":
        Script6();
        break;
      case "6HnCKJDEbhB":
        Script7();
        break;
      case "5Zd11orYoAF":
        Script8();
        break;
      case "6en7iJXkRO8":
        Script9();
        break;
      case "6VpYRf1MT3f":
        Script10();
        break;
      case "60LrjUK3gjC":
        Script11();
        break;
      case "6gJ9S9ZjUC8":
        Script12();
        break;
      case "5YDyZq8zpxz":
        Script13();
        break;
      case "5zUu9Xv70f9":
        Script14();
        break;
      case "5sOnydwciWb":
        Script15();
        break;
      case "5ofAyGMuTJs":
        Script16();
        break;
      case "64RnUac7Sej":
        Script17();
        break;
      case "68yvTLIDDQK":
        Script18();
        break;
      case "6IvLpEagENZ":
        Script19();
        break;
      case "624BiU48Xc3":
        Script20();
        break;
      case "6PKXFqBPsgC":
        Script21();
        break;
      case "6dFt6gGYuCM":
        Script22();
        break;
      case "5cqFOGy17wn":
        Script23();
        break;
      case "6Y0SwP4OC38":
        Script24();
        break;
      case "6oqP0AwzfSL":
        Script25();
        break;
      case "5qOnZmA5PgV":
        Script26();
        break;
      case "6TmzO6AMk7O":
        Script27();
        break;
      case "5kSeufRj4Hi":
        Script28();
        break;
      case "6kj5LEPDBWl":
        Script29();
        break;
      case "6dllTwvsJ5i":
        Script30();
        break;
      case "65RKABqFuBU":
        Script31();
        break;
      case "6Kprjx0rqGq":
        Script32();
        break;
      case "65cLTh58Z7a":
        Script33();
        break;
      case "5olC5V4lhuy":
        Script34();
        break;
      case "6Lizxl6d3no":
        Script35();
        break;
      case "6rA9vB4W87d":
        Script36();
        break;
      case "5qe5cJe9DWa":
        Script37();
        break;
      case "63ZoDJBlzvu":
        Script38();
        break;
      case "5itJJ218gut":
        Script39();
        break;
      case "5hyVWCt3QVk":
        Script40();
        break;
      case "6DxekWqCYPj":
        Script41();
        break;
      case "5w7ebN0COm3":
        Script42();
        break;
      case "6pDozNtmWhx":
        Script43();
        break;
      case "6KdCSgXR66i":
        Script44();
        break;
      case "69tLNbl5bbm":
        Script45();
        break;
      case "6kQtFKgU9Lf":
        Script46();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  player.once(() => {
const target = object('5ocLbJW8RYs');
const duration = 2500;
const easing = 'ease-out';
const id = '626qXReKP5n';
const teeterAmount = 2;
const delay = 2000;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  const target = object('5ocLbJW8RYs');
const duration = 2500;
const easing = 'ease-out';
const id = '626qXReKP5n';
const teeterAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6FYuDhzlYcF');
const duration = 2500;
const easing = 'ease-out';
const id = '5Xc43tMdXW7';
const teeterAmount = 2;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  const target = object('6FYuDhzlYcF');
const duration = 2500;
const easing = 'ease-out';
const id = '5Xc43tMdXW7';
const teeterAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  player.once(() => {
const target = object('6c9Q3OAddoc');
const duration = 2500;
const easing = 'ease-out';
const id = '6qq0qXFtvyx';
const teeterAmount = 2;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  const target = object('6c9Q3OAddoc');
const duration = 2500;
const easing = 'ease-out';
const id = '6qq0qXFtvyx';
const teeterAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  player.once(() => {
const target = object('5ji0phC22Ku');
const duration = 2500;
const easing = 'ease-out';
const id = '5zt6zSCFnjr';
const teeterAmount = 2;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script8 = function()
{
  const target = object('5ji0phC22Ku');
const duration = 2500;
const easing = 'ease-out';
const id = '5zt6zSCFnjr';
const teeterAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  player.once(() => {
const target = object('63nVYO4gT2F');
const duration = 5000;
const easing = 'linear';
const id = '5Wsw5nPfDbZ';
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script10 = function()
{
  const target = object('63nVYO4gT2F');
const duration = 5000;
const easing = 'linear';
const id = '5Wsw5nPfDbZ';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  player.once(() => {
const target = object('5wVDpSkw7cp');
const duration = 5000;
const easing = 'linear';
const id = '5txuSpDKmvI';
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script12 = function()
{
  const target = object('5wVDpSkw7cp');
const duration = 5000;
const easing = 'linear';
const id = '5txuSpDKmvI';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  player.once(() => {
const target = object('5buBxSiCE3m');
const duration = 5000;
const easing = 'linear';
const id = '68APTJUG0uk';
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script14 = function()
{
  const target = object('5buBxSiCE3m');
const duration = 5000;
const easing = 'linear';
const id = '68APTJUG0uk';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  player.once(() => {
const target = object('6a71mCs2p9u');
const duration = 5000;
const easing = 'linear';
const id = '5pTyWyIDToJ';
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script16 = function()
{
  const target = object('6a71mCs2p9u');
const duration = 5000;
const easing = 'linear';
const id = '5pTyWyIDToJ';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script17 = function()
{
  player.once(() => {
const target = object('5nKwVqXtIWb');
const duration = 5000;
const easing = 'linear';
const id = '6U1Wqhkjx1R';
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script18 = function()
{
  const target = object('5nKwVqXtIWb');
const duration = 5000;
const easing = 'linear';
const id = '6U1Wqhkjx1R';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script19 = function()
{
  player.once(() => {
const target = object('61luQDw96NO');
const duration = 5000;
const easing = 'linear';
const id = '6G2RTwkP3nC';
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script20 = function()
{
  const target = object('61luQDw96NO');
const duration = 5000;
const easing = 'linear';
const id = '6G2RTwkP3nC';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script21 = function()
{
  player.once(() => {
const target = object('6W66SfkkNff');
const duration = 5000;
const easing = 'linear';
const id = '6VxOnkgsDGs';
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script22 = function()
{
  const target = object('6W66SfkkNff');
const duration = 5000;
const easing = 'linear';
const id = '6VxOnkgsDGs';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script23 = function()
{
  player.once(() => {
const target = object('6Fbq2VKSmpq');
const duration = 5000;
const easing = 'linear';
const id = '5v4XpJwWPBG';
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script24 = function()
{
  const target = object('6Fbq2VKSmpq');
const duration = 5000;
const easing = 'linear';
const id = '5v4XpJwWPBG';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script25 = function()
{
  player.once(() => {
const target = object('6L3veyrW3bT');
const duration = 5000;
const easing = 'linear';
const id = '6qdYrpRmCjE';
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script26 = function()
{
  const target = object('6L3veyrW3bT');
const duration = 5000;
const easing = 'linear';
const id = '6qdYrpRmCjE';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script27 = function()
{
  player.once(() => {
const target = object('6rQEyme67y3');
const duration = 5000;
const easing = 'linear';
const id = '5VeRBHU5Wql';
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script28 = function()
{
  const target = object('6rQEyme67y3');
const duration = 5000;
const easing = 'linear';
const id = '5VeRBHU5Wql';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script29 = function()
{
  player.once(() => {
const target = object('5qUNKRnZCka');
const duration = 5000;
const easing = 'linear';
const id = '6c1amO80TlX';
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script30 = function()
{
  const target = object('5qUNKRnZCka');
const duration = 5000;
const easing = 'linear';
const id = '6c1amO80TlX';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script31 = function()
{
  player.once(() => {
const target = object('6gSkGp3pqDQ');
const duration = 5000;
const easing = 'linear';
const id = '5q8AhP6miG1';
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script32 = function()
{
  const target = object('6gSkGp3pqDQ');
const duration = 5000;
const easing = 'linear';
const id = '5q8AhP6miG1';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script33 = function()
{
  player.once(() => {
const target = object('6SMAcC1zJJm');
const duration = 5000;
const easing = 'linear';
const id = '6P6TMligZ7w';
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script34 = function()
{
  const target = object('6SMAcC1zJJm');
const duration = 5000;
const easing = 'linear';
const id = '6P6TMligZ7w';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script35 = function()
{
  player.once(() => {
const target = object('5bBrCLuRVZI');
const duration = 5000;
const easing = 'linear';
const id = '6PAaX0eCIdq';
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script36 = function()
{
  const target = object('5bBrCLuRVZI');
const duration = 5000;
const easing = 'linear';
const id = '6PAaX0eCIdq';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script37 = function()
{
  player.once(() => {
const target = object('5ZmPApFAPHk');
const duration = 5000;
const easing = 'linear';
const id = '6PDi2EtAJAd';
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script38 = function()
{
  const target = object('5ZmPApFAPHk');
const duration = 5000;
const easing = 'linear';
const id = '6PDi2EtAJAd';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script39 = function()
{
  player.once(() => {
const target = object('6Hhcft1BrBX');
const duration = 5000;
const easing = 'linear';
const id = '5p5SLguqBea';
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script40 = function()
{
  const target = object('6Hhcft1BrBX');
const duration = 5000;
const easing = 'linear';
const id = '5p5SLguqBea';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script41 = function()
{
  player.once(() => {
const target = object('6PcJvLRw1lQ');
const duration = 5000;
const easing = 'linear';
const id = '6TgAdrdgi9u';
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script42 = function()
{
  const target = object('6PcJvLRw1lQ');
const duration = 5000;
const easing = 'linear';
const id = '6TgAdrdgi9u';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script43 = function()
{
  player.once(() => {
const target = object('6YMhZNxiJjP');
const duration = 5000;
const easing = 'linear';
const id = '65web7XvVjx';
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script44 = function()
{
  const target = object('6YMhZNxiJjP');
const duration = 5000;
const easing = 'linear';
const id = '65web7XvVjx';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script45 = function()
{
  player.once(() => {
const target = object('6amhA9gHkdw');
const duration = 5000;
const easing = 'linear';
const id = '6RcJLvRGnmI';
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script46 = function()
{
  const target = object('6amhA9gHkdw');
const duration = 5000;
const easing = 'linear';
const id = '6RcJLvRGnmI';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
