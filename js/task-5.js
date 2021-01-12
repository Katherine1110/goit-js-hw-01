// Задание 5
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. 
// Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. 
// Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, 
// то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

const CHINA = 'Китай';
const CHILE = 'Чили';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';

let countryName = prompt('Введите название страны');

let price;
let message;

if (countryName === null){
    alert('Отменено пользователем');
} else {
    switch(countryName.toLowerCase()) {
        case CHINA.toLowerCase():
            price = 100;
            countryName = CHINA;
            break;
    
        case CHILE.toLowerCase():
            price = 250;
            countryName = CHILE;
            break;
    
        case AUSTRALIA.toLowerCase():
            price = 170;
            countryName = AUSTRALIA;
            break;
    
        case INDIA.toLowerCase():
            price = 80;
            countryName = INDIA;
            break;
    
        case JAMAICA.toLowerCase():
            price = 120;
            countryName = JAMAICA;
            break;
    
        default:
            price = 0;
    };

    if(price){
        message = `Доставка в ${countryName} будет стоить ${price} кредитов`;
    } else {
        message = ('В вашей стране доставка не доступна');
    };
    
    alert(message);    
};