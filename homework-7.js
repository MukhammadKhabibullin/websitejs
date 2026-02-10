import { user } from "./comments.js";


//2

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers.slice(4);

console.log(numbers)
console.log(result)


//3

const flat = ['Шкаф', 'Стул', 'Стол', 'Кровать', 'Диван']

const entityFlat = flat.filter(function (flat) {
    return flat.startsWith("С")
})

console.log(flat)
console.log(entityFlat)


//4

const one = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const two = one.toReversed()

console.log(one)
console.log(two)


//7

const filterCommentsByEmail = user.filter(user => user.email.includes('.com'))
console.log(filterCommentsByEmail);


//8

const PostId = user.map((comment) => {
    return ({...comment, postId: comment.id <= 5 ? 2 : 1});
});

console.log(PostId);


//9

const id = user.map(item => ({
    id: item.id,
    name: item.name
}));

console.log(id)


//10

const ihugyftd = user.map(item => ({
  ...item,
  isInvalid: item.body.length > 180
}));

console.log(ihugyftd)


//11

const email = user.reduce((acc, user) => {
    acc.push(user.name);
    return acc;
}, [])

console.log(email)


const emails = user.map(user => user.email);

console.log(emails)


//12

let string = email.toString();
console.log(string)


let stringOne = email.join();
console.log(stringOne)