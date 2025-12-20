//3

const profil = {
    name: "Мухаммад",
    surname: "Хабибуллин",
    age: 17,
    country: "Россия",
    city: "Ульяновск",
    favoriteMovia: "Гарри Поттер",
    sport: "Football"
}

console.log(profil)


//4

const car = {
    make: "Hyundai",
    model: "Sonata",
    yearOfManufacture: "2023",
    color: "белый",
    typeOfBox: "автомат",
}

car.owner = profil

console.log(car)


//5

function checkProperties(obj) {
    if (!obj.hasOwnProperty('максимальная скорость')){
        obj ['максимальная скорость'] = 220;
        console.log('добавлено');
    } else {
        console.log('уже есть');
    }
}

checkProperties(car)


//6

function showValue(obj, propertyName) {
    const name = obj[propertyName];
    console.log(name);
    
}

showValue(profil, "name")


//7

const products = ["apple", "origin"];


//8

const books = [
    {
        name: "Мастер и Маргарита",
        author: "Михаил Булгаков",
        year: "1966",
        coverColor: "Черная",
        genre: "роман"
    },

    {
        name: "Война и мир",
        author: "Лев Толстой",
        year: "1869",
        coverColor: "Темно-зеленая",
        genre: "эпопея"
    },

    {
        name: "Преступление и наказание",
        author: "Федор Достоевский",
        year: "1866",
        coverColor: "Темно-красная",
        genre: "психологическая драма"
    },

    {
        name: "Великий Гэтсби",
        author: "Фрэнсис Скотт Фицджеральд",
        year: "1925",
        coverColor: "Золотая",
        genre: "роман"
    },

    {
        name: "Убить пересмешника",
        author: "Харпер Ли",
        year: "1960",
        coverColor: "Коричневая",
        genre: "роман воспитания"
    }
]

const res = books.push(    
    {
        name: "Идиот",
        author: "Федор Достоевский",
        year: "1868",
        coverColor: "Синия",
        genre: "роман воспитания"
    }
)

console.log(res)
console.log(books)



//9

const harryPotter = [
    {
        name: "Гарри Поттер и Философский камень",
        author: "Джоан Роулинг",
        year: "1997", 
        coverColor: "Оранжевая",
        genre: "Фантастика"
    },

    {
        name: "Гарри Поттер и Тайная комната",
        author: "Джоан Роулинг",
        year: "1998", 
        coverColor: "Красная",
        genre: "Фантастика"
    },

    {
        name: "Гарри Поттер и узник Азкабана",
        author: "Джоан Роулинг",
        year: "1999", 
        coverColor: "Синия",
        genre: "Фантастика"
    },

    {
        name: "Гарри Поттер и Кубок огня",
        author: "Джоан Роулинг",
        year: "2000", 
        coverColor: "Зеленая",
        genre: "Фантастика"
    },

    {
        name: "Гарри Поттер и Орден Феникса",
        author: "Джоан Роулинг",
        year: "2003", 
        coverColor: "Черная",
        genre: "Фантастика"
    },

    {
        name: "Гарри Поттер и Принц-полукровка",
        author: "Джоан Роулинг",
        year: "2005", 
        coverColor: "Голубая",
        genre: "Фантастика"
    },

    {
        name: "Гарри Поттер и Дары Смерти",
        author: "Джоан Роулинг",
        year: "2007", 
        coverColor: "Розовая",
        genre: "Фантастика"
    },

       {
        name: "Гарри Поттер и Проклятое дитя",                           
        author: "Джоан Роулинг",
        year: "2016", 
        coverColor: "Желтая",
        genre: "Фантастика"
    }
]

console.log(harryPotter)


const combinedCatalog = [...books, ...harryPotter];

console.log(combinedCatalog)


function markRareBooks (bookArray) {
    const updatedCatalog = bookArray.map((book) => {
        return { ...book, isRare: book.year > 2000}
    })
    return updatedCatalog
}

const finalCatalogWithRatity = markRareBooks(combinedCatalog)

console.log(finalCatalogWithRatity)