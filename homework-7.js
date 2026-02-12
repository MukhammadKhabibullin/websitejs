import { user } from "./comments.js";

//2 Создал массив чисел и отфильтровал его

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = ((num) => {
    return num.filter(num => num >= 5);
})(numbers);

console.log(filteredNumbers);


//3 Создал массив строк и проверил есть ли в массиве какая-то определенная сущность.

const furnitureItems = ['Шкаф', 'Стул', 'Стол', 'Кровать', 'Диван'];

const itemsStartingWithC = furnitureItems.filter(name => name.startsWith("С"));

console.log(furnitureItems);
console.log(itemsStartingWithC);


//4 Наисал функцию которая принимает массив и изменяет его

const setNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reversedNumbers = setNumbers.toReversed();

console.log(setNumbers);
console.log(reversedNumbers);


//7 Вывел в консоль массив

const filterCommentsByEmail = user.filter(user => user.email.includes('.com'));
console.log(filterCommentsByEmail);


//8 Перебрал массив

const mapUsersToPostIds = user.map((comment) => {
    return ({...comment, mapUsersToPostIds: comment.id <= 5 ? 2 : 1});
});

console.log(mapUsersToPostIds);


//9 Перебрал массив что бы объекты состояли только из айди и имени

const extractIdAndName = user.map(item => ({
    id: item.id,
    name: item.name
}));

console.log(extractIdAndName);


//10 Перебрал массив и добавил объектам свойство 

const validMarkedUsers = user.map(item => ({
  ...item,
  isInvalid: item.body.length > 180
}));

console.log(validMarkedUsers);


//11 Вывел массив

const extractEmailsWithReduce = user.reduce((acc, user) => {
    acc.push(user.name);
    return acc;
}, []);

console.log(extractEmailsWithReduce);


const extractEmailsWithMap = user.map(user => user.extractEmailsWithReduce);

console.log(extractEmailsWithMap);


//12 Переьрал массив

let arrayToString = extractEmailsWithReduce.toString();
console.log(arrayToString);


let arrayJoin = extractEmailsWithReduce.join();
console.log(arrayJoin);