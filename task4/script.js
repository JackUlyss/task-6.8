const userTextField = document.querySelector('a');

userTextField.addEventListener('click', 
  (event) => {
    event.preventDefault();
		const userText = prompt('Введите текст');
		userTextField.textContent = userText;
})
