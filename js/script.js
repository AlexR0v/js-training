const element = document.querySelector('#container');
const element2 = document.querySelector('.hello');
const button = document.querySelector('.btn');
const phone = document.querySelector('#phone');
//создает новый элемент
button.addEventListener('click' , () => {
	const newElement = document.createElement('p');
	element2.appendChild(newElement);
	newElement.textContent = 'На работе хорошо  ';
	element.style.backgroundColor = '#2aff33';
});

//Проверка телефона
phone.addEventListener('keydown' , (evt) => {
	let isDigit = false;
	if(evt.key >= 0 || evt.key <= 9
		|| evt.key == 'Backspace' || evt.key == '+'
		|| evt.key == 'ArrowLeft' || evt.key == 'ArrowRight'){
		isDigit = true;
	}
	if(!isDigit){
		evt.preventDefault();
	}
});

//обработчик формы
const myForm = document.querySelector('#myForm');
const sendButton = document.querySelector('#sendButton');

sendButton.addEventListener('click' , (evt) => {
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
//обработчик input
const myButton = document.querySelector('#myButton');
const nameInput = document.querySelector('#nameInput');
const list = document.querySelector('#list');

myButton.addEventListener('click' , () => {
	setTimeout(() => {
		const newItem = document.createElement('li');
		const deleteButton = document.createElement('button');
		newItem.classList.add('item');
		newItem.textContent = nameInput.value;
		deleteButton.textContent = 'Удалить';

		deleteButton.addEventListener('click' , () => {
			setTimeout(() => {
				list.removeChild(newItem);
			} , 500)
		});

		newItem.appendChild(deleteButton);
		list.appendChild(newItem);

		nameInput.value = '';
	} , 1000);

});

const url1 = 'https://vbryanske.com/media/imgs2018/Kosmos.jpg';
const url2 = 'https://wallscloud.net/uploads/cache/2845750753/outer-space-planets-1jRV-1024x576-MM-90.jpg';
const url3 = 'https://avatars.mds.yandex.net/get-pdb/2821981/b77e2e70-74b3-4b1e-84bf-28e3090f56e4/s1200?webp=false';

const img = new Image();
img.width = 500;
img.src = url1;

const img2 = new Image();
img2.width = 500;
img2.src = url2;

const img3 = new Image();
img3.width = 500;
img3.src = url3;

document.body.append(img);
document.body.append(img2);
document.body.append(img3);