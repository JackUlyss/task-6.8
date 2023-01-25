const green = document.querySelector('#green');
const yellow = document.querySelector('#yellow');
const red = document.querySelector('#red');
let light = 'black';

function lightK () {
	if (light === 'black' || light === 'red') {
		green.style.background = ('green');
		yellow.style.background = ('black');
		red.style.background = ('black');
		light = 'green'
	}
	else if(light === 'green') {
		green.style.background = ('black');
		yellow.style.background = ('yellow');
		red.style.background = ('black');
		light = 'yellow'
	}
	else {
		green.style.background = ('black');
		yellow.style.background = ('black');
		red.style.background = ('red');
		light = 'red'
	}
}

document.addEventListener('click', (event) => {
	if (event.target.className === 'circle') {
		lightK()
	}
});

