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
//созадет элемент DOM
myButton.addEventListener('click' , () => {
	setTimeout(() => {
		const newItem = document.createElement('li');
		const deleteButton = document.createElement('button');
		newItem.classList.add('item');
		newItem.textContent = nameInput.value;
		deleteButton.textContent = 'Удалить';
			//удаляет эелемент по клику на кнопку
		deleteButton.addEventListener('click' , () => {
			setTimeout(() => {
				list.removeChild(newItem);
			} , 500)//удаление с задержкой
		});

		newItem.appendChild(deleteButton);
		list.appendChild(newItem);

		nameInput.value = '';
	} , 1000);//загрузка с задержкой

});

//вставка картинок через промисы
const url1 = 'https://img1.goodfon.ru/original/2560x1600/f/65/landscape-planets-colors-view.jpg';
const url2 = 'https://s1.1zoom.ru/big3/118/429618-Kycb.jpg';
const url3 = 'http://co8tula.ru/upload/iblock/55d/55d842d20c79d572ef6b1d1c1635d8e7.jpg';

function loadImg(url){
	return new Promise((resolve , reject) => {
		const img = new Image();
		img.width = 500;
		img.src = url;
		document.body.append(img);
		img.addEventListener('load' , () => {
			resolve();
		});
		img.addEventListener('error' , () => {
			reject();
		})
	})
}
//зарузка происходит по очередности
loadImg(url1)
	.then(() => {
		loadImg(url2)
	})
	.then(() => {
		loadImg(url3)
	})
	.catch(() => {//выводит ошибку в консоль, что загрузка картинок не удалась
		console.log('картинка не грузится')
	});
//загрузка списка по клику на кнопку
const urlTown = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';
const myBtn = document.querySelector('#myBtn');
const listTown = document.querySelector('#listTown');

//делегирование кликов на загруженный список
document.addEventListener('click', evt=>{
	if(evt.target.tagName === 'LI') {
		console.log(evt.target.textContent)
	}
});

//загружает список
myBtn.addEventListener('click' , async() => {
	const response = await fetch(urlTown);
	const cities = await response.json();
	const fragment = document.createDocumentFragment();

	for(const city of cities){
		const li = document.createElement('li');
		li.textContent = city.name;
		fragment.appendChild(li);
	}

	listTown.appendChild(fragment)
});

//Загрузка инофо из файла(имтация загрузки с сервера) без перезагрузки сраницы
const loadButton = document.querySelector('#loadButton');
const result = document.querySelector('#result');

loadButton.addEventListener('click', ()=>{
	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'content.txt');
	xhr.send();
	xhr.addEventListener('load', ()=>{
		if (xhr.status >= 404) { //если файла нет или возникла ошибка
			console.log('что то пошло не так')
		} else {
			result.innerHTML = xhr.responseText;
		}
	});
});