const input = document.querySelector('input');
const paragraph = document.querySelector('#duplicateField');
const button = document.querySelector('button');

input.addEventListener('input', () => {
	paragraph.textContent = input.value;
})

button.addEventListener('click', 
	(event) => {
		event.preventDefault();
		console.log(input.value);
		paragraph.textContent = '';
		input.value = '';
})
