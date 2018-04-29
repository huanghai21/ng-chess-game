import { Component, OnInit } from '@angular/core';

const SIZE = 3;
const CHESS_STATUS = {
	E: 0,
	X: 1,
	O: -1
};

@Component({
	selector: 'app-chess-game',
	templateUrl: './chess-game.component.html',
	styleUrls: ['./chess-game.component.css']
})
export class ChessGameComponent implements OnInit {
	public input = '';
	public result = [];
	public playerValue = 0;
	constructor() { }

	ngOnInit() {
		this.result = this.calculateWinStep('x', [['o', 'e', 'e'], ['o', 'x', 'o'], ['x', 'x', 'e']]);	
	}

	public calculateWinStep(player: string, chessArray: any) {
		this.input = `${player}, [[${chessArray[0]}], [${chessArray[1]}], [${chessArray[2]}]]`;
		this.playerValue = CHESS_STATUS[player.toUpperCase()];
		const statusArray = this.convert2Status(chessArray);
		const points = this.convert2Points(statusArray);
		return points.filter(point => this.isWinPoint(statusArray, point));
	}

	private convert2Status(chessArray: any) {
		const reducer = (previous, current) => previous.concat(current);
		return chessArray.reduce(reducer).map(item => CHESS_STATUS[item.toUpperCase()]);
	}
	private convert2Points(status: Array<number>) {
		return status.map((value, index) => {
			if (value === CHESS_STATUS.E) {
				return new Point(Math.floor(index / 3), index % 3);
			}
		}).filter(item => !!item);
	}

	private isWinPoint(status: Array<number>, point: Point) {
		return this.isMatch(status, point.getHLine()) ||
			this.isMatch(status, point.getVLine()) ||
			this.isMatch(status, point.getBLine()) ||
			this.isMatch(status, point.getSLine());
	}

	private isMatch(status: Array<number>, indexLine: Array<number>) {
		const reducer = (previous, current) => previous + current;
		const filter = (value, index) => indexLine.indexOf(index) > -1;
		return status.filter(filter).reduce(reducer) === this.playerValue * (SIZE - 1);
	}

}

export class Point {
	private x = 0;
	private y = 0;
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	public getHLine() { //horizontal line
		let line = [];
		for (let i = 0; i < SIZE; i++) {
			line.push((this.x * SIZE) + i);
		}
		return line;
	}
	public getVLine() { // vertical line
		let line = [];
		for (let i = 0; i < SIZE; i++) {
			line.push((i * SIZE) + this.y);
		}
		return line;
	}
	public getBLine() { // backslash line
		let line = [];
		for (let i = 0; i < SIZE; i++) {
			line.push((i * SIZE) + i);
		}
		return line;
	}
	public getSLine() { // slash line
		let line = [];
		for (let i = 0; i < SIZE; i++) {
			line.push(((i + 1) * SIZE) - 1 - i);
		}
		return line;
	}

	public toString() {
		return `[${this.x},${this.y}]`;
	}
}
