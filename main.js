let ctx;
let t = 0;

function load() {
	const canvas = document.getElementById('canvas');
	canvas.width = window.innerWidth - 40;
	canvas.height = window.innerHeight - 40;

	ctx = canvas.getContext('2D');

	draw();
}

function draw() {
	ctx.beginPath();
	ctx.moveTo(50, 50);
	ctx.lineTo(400, 400);
	ctx.lineWidth = 5;
	ctx.strokeStyle = '#FF0000';
	ctx.stroke();
}
