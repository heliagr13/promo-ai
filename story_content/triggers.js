function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5abgRMbWE7q":
        Script1();
        break;
      case "6F3TBgIwaEn":
        Script2();
        break;
      case "6owIJUaTAc0":
        Script3();
        break;
      case "5wNCbqU3ieV":
        Script4();
        break;
      case "6AKPxwojE28":
        Script5();
        break;
      case "6E7OMYEN4R4":
        Script6();
        break;
      case "5g0E6H8yZz2":
        Script7();
        break;
      case "6TS3ofQc0UG":
        Script8();
        break;
      case "6ZLUgi2MpAV":
        Script9();
        break;
      case "6NFaN9eh8TW":
        Script10();
        break;
      case "5yj6xhelTF8":
        Script11();
        break;
      case "6Cfg5NfpbP1":
        Script12();
        break;
      case "6EmuirelPHP":
        Script13();
        break;
      case "5YtPlRLEX3h":
        Script14();
        break;
      case "5VG0TlcC5F7":
        Script15();
        break;
      case "6WcoLdr0jLN":
        Script16();
        break;
      case "5sGDOO7LgpR":
        Script17();
        break;
      case "5zq7LVkW3bD":
        Script18();
        break;
      case "6dxHBITmSEM":
        Script19();
        break;
      case "5v5FoXqHWjS":
        Script20();
        break;
      case "5p2BWwqAlKA":
        Script21();
        break;
      case "5w37MILqvnY":
        Script22();
        break;
      case "62M2pPS5VBx":
        Script23();
        break;
      case "5y7gQTasdDs":
        Script24();
        break;
      case "6QpgKiH8oAo":
        Script25();
        break;
      case "5s0N1pmyjKz":
        Script26();
        break;
      case "6RrpnAICFk4":
        Script27();
        break;
      case "6Fomym3OK5p":
        Script28();
        break;
      case "6YOSD4WTkeA":
        Script29();
        break;
      case "6TmfQ2ddRVW":
        Script30();
        break;
      case "5yqiFgdtBAk":
        Script31();
        break;
      case "6VLvCQ8G9cE":
        Script32();
        break;
      case "6OKT5p7jnlc":
        Script33();
        break;
      case "62PYTuSzmTN":
        Script34();
        break;
      case "6lP4hGHOvHT":
        Script35();
        break;
      case "6AgYIUxPMnO":
        Script36();
        break;
      case "6cTe07p8D9i":
        Script37();
        break;
      case "6LVsTxkA1NU":
        Script38();
        break;
      case "5YhDkD2mab6":
        Script39();
        break;
      case "5XhOIhk9ovp":
        Script40();
        break;
      case "6fxOsH3Mdvb":
        Script41();
        break;
      case "6ri52xIS7cR":
        Script42();
        break;
      case "5y7d01kOzzw":
        Script43();
        break;
      case "6pSjwpGxDQ0":
        Script44();
        break;
      case "6ain8pZoSjH":
        Script45();
        break;
      case "6oYoEjH4asJ":
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
