let ctx;
let t = 0;

function load() {
	const canvas = document.getElementById('canvas');
	canvas.width = window.innerWidth - 40;
	canvas.height = window.innerHeight - 40;

	ctx = canvas.getContext('2d');

	draw();
}

function x(t) {
	return 200 * Math.cos(t / 8);
}

function y(t) {
	// return 200 * Math.sin(t / 8);
	return 200 * (t / 800);
}

function draw() {
	ctx.beginPath();
	ctx.moveTo(x(t) + canvas.width / 2, y(t) + canvas.height / 2);
	t++;
	ctx.lineTo(x(t) + canvas.width / 2, y(t) + canvas.height / 2);
	ctx.lineWidth = 2;
	ctx.strokeStyle = '#f00';
	ctx.stroke();

	requestAnimationFrame(draw);
}
