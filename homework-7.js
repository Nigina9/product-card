import {
    commentSocialMedia
} from "./comments.js";
// Уровень 1
// Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];
const filteredNumbers = numbers.filter(num => num > 4);
console.log(filteredNumbers);
// Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.), проверить, есть ли в массиве какая-то определенная сущность.
const furnitureInMyRoom = ['кровать', 'комод', 'письменный стол', 'стул', 'полка'];
if (furnitureInMyRoom.includes('диван')) {
    console.log("Ура, в комнате есть диван")
} else {
    console.log("Откуда взялся диван? Если ты его не купила, его тут нет")
}
// Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать") . Два вышеуказанных массива с помощью этой функции перевернуть.
const reverseArray = arr => {
    return arr.reverse();
}
reverseArray(numbers);
reverseArray(furnitureInMyRoom);

// Уровень 2

// 7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"
const commentsFilter = commentSocialMedia.filter(item => item.email.endsWith('.com'));

// 8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1
const usersWithPostId = commentSocialMedia.map(user => {
    if (user.id <= 5) {
        return {
            ...user,
            postId: 2
        }
    } else {
        return {
            ...user,
            postId: 1
        }
    }
})

// 9. Перебрать массив, что бы объекты состояли только из айди и имени
const commentsWithIdName = commentSocialMedia.map(user => {
    return {
        id: user.id,
        name: user.name
    }
})
// 10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.
const commentsWithIdNameIsInvalid = commentSocialMedia.map(user => {
     if (user.body.length > 180) {
    return {
        ...user,
        isInvalid: true
    }
} else {
    return {
        ...user,
        isInvalid: false
    }
}
})


// Уровень 3
// 11. Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map
const emailArray = commentSocialMedia.reduce((acc, user) => {
     acc.push(user.email);
     return acc
}, []);

// метода map
const emailUsers = commentSocialMedia.map(email => email.email);
console.log(emailUsers);

// 12. Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.
const emaiList = emailUsers.join();
console.log(emaiList)