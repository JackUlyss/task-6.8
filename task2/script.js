 const consoleLog = document.querySelector('#consoleLog');
 const alertEl = document.querySelector('#alert');
 const promptEl = document.querySelector('#prompt');

 consoleLog.addEventListener('click', () => {
	alert('Служит для вывода информации в консоль')
 })

 alertEl.addEventListener('click', () => {
	alert('Показывает диалоговое окно с сообщением и кнопкой OK')
 })

 promptEl.addEventListener('click', () => {
	alert('Отображает диалоговое окно с запросом на ввод текста')
 })