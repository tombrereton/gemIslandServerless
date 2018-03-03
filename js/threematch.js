// the game
var game = new Phaser.Game(WIDTH, HEIGHT, Phaser.AUTO, 'game');

game.state.add('load', loadState);
game.state.add('intro', introState);
game.state.add('play', playState);

game.state.start('load');

var nickName = localStorage['nickName'] || '';
var count = 3;
