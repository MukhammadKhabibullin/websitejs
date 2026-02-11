import { user } from "./comments.js";


//2 Создал массив чисел и отфильтровал его

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers.slice(4);

console.log(numbers);
console.log(result);


//3 Создал массив строк и проверил есть ли в массиве какая-то определенная сущность.

const flat = ['Шкаф', 'Стул', 'Стол', 'Кровать', 'Диван'];

const entityFlat = flat.filter(function (flat) {
    return flat.startsWith("С");
})

console.log(flat);
console.log(entityFlat);


//4 Наисал функцию которая принимает массив и изменяет его

const one = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const two = one.toReversed()

console.log(one);
console.log(two);


//7 Вывел в консоль массив

const filterCommentsByEmail = user.filter(user => user.email.includes('.com'))
console.log(filterCommentsByEmail);


//8 Перебрал массив

const PostId = user.map((comment) => {
    return ({...comment, postId: comment.id <= 5 ? 2 : 1});
});

console.log(PostId);


//9 Перебрал массив что бы объекты состояли только из айди и имени

const id = user.map(item => ({
    id: item.id,
    name: item.name
}));

console.log(id);


//10 Перебрал массив и добавил объектам свойство 

const lengthBody = user.map(item => ({
  ...item,
  isInvalid: item.body.length > 180
}));

console.log(lengthBody);


//11 Вывел массив

const withdrawEmail = user.reduce((acc, user) => {
    acc.push(user.name);
    return acc;
}, []);

console.log(withdrawEmail);


const withdrawEmails = user.map(user => user.withdrawEmail);

console.log(withdrawEmails);


//12 Переьрал массив

let bringString = withdrawEmail.toString();
console.log(bringString);


let bringStringJoin = withdrawEmail.join();
console.log(bringStringJoin);