const element = document.querySelector('#container');
const element2 = document.querySelector('.hello');
const button = document.querySelector('.btn');
const phone = document.querySelector('#phone');
//создает новый элемент
let start = function createElement(){
	const newElement = document.createElement('p');
	document.body.appendChild(newElement);
	newElement.textContent = 'На работе хорошо  ';
	element.style.backgroundColor = '#2aff33';
};
//Проверка телефона
let inputPhone = function(evt){
	let isDigit = false;
	if(evt.key >= 0 || evt.key <= 9
		|| evt.key == 'Backspace' || evt.key == '+'
		|| evt.key == 'ArrowLeft' || evt.key == 'ArrowRight'){
		isDigit = true;
	}
	if(!isDigit){
		evt.preventDefault();
	}
};

button.addEventListener('click' , start);
phone.addEventListener('keydown' , inputPhone);


//обработчик формы
const myForm = document.querySelector('#myForm');
const sendButton = document.querySelector('#sendButton');

sendButton.addEventListener('click', function(evt){
	evt.preventDefault();

	console.log(myForm.elements.lastName.value);
	console.log(myForm.elements.name.value);
	if(myForm.elements.gender.value == 'm'){
		console.log('мужчина')
	}else{
		console.log('женщина')
	}
	if(myForm.elements.auto.checked == true){
		console.log('Есть автомобиль')
	}
});



