'use strict';

const $gameContainer = document.querySelector('#game');

const game = {
	board: ['', '', '', '', '', '', '', '', ''],
	symbols: {
		opitions: ['X', 'O'],
		turn_index: 0,
		change: function() {
			this.turn_index = (this.turn_index === 0 ? 1 : 0);
		}
	},
	container_element: $gameContainer,
	gameover: false,

	init: function() {
		this.draw();
	},

	make_play: function(position) {
		if (this.gameover) {
			return;
		}

		if (this.board[position] === '') {
			this.board[position] = this.symbols.opitions[this.symbols.turn_index];
		}
	},

	draw: function() {
		console.log('Draw...');

		let content = '';

		this.board.forEach((item, i) => {
			console.log(item)
			content += `
				<div
					class="game__item"
					data-position="${i}"
					onclick="game.make_play(${i})"
				>
					${item + i}
				</div>
			`;
		});

		this.container_element.innerHTML = content;
	},

};

game.init();