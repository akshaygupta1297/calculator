let screen = document.getElementById('input');
let buttons = document.querySelectorAll('button');
let screenText = '';
// console.log(buttons);
buttons.forEach(elm => {
	elm.addEventListener('click', (e) => {
		let buttonText = e.target.innerText;
		console.log(buttonText);
		if (buttonText == 'clr') {
			screenText = '';
			screen.value = screenText;
		}
		else if (buttonText == '=') {
			let result = eval(screenText);
			screenText = result;
			screen.value = screenText;
			console.log(result)
		}
		else {
			screenText += buttonText;
			screen.value = screenText;
			console.log(screenText)
		}
	})
})
