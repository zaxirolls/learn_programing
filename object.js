
var game = {
    startTime: null,
    currentTime:null,
    seconds: null,
    displayArea: document.getElementById('display-area')
};

function start() {
    game.startTime = Date.now();
    document.body.onkeydown = stop;
}

function stop() {
    game.currentTime = Date.now();
    game.seconds = (game.currentTime - game.startTime) / 1000;
    if (9.5 <= game.seconds && game.seconds <= 10.5) {
        game.displayArea.innerText = game.seconds + '秒でした。すごい！';
    } else {
        game.displayArea.innerText = game.seconds + '秒でした。残念。';
    }
}

if (confirm('OKを押して10秒だと思ったら何かキーを押してください')) {
    start();
}