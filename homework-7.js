import { commentsSocialMedia } from "./comments.js";
// Уровень 1
// Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(num => num > 4);
// Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.), проверить, есть ли в массиве какая-то определенная сущность.
const furnitureInMyRoom = ['кровать', 'комод', 'письменный стол', 'стул', 'полка'];
if (furnitureInMyRoom.includes('диван')) {
    console.log("Ура, в комнате есть диван")
} else {
    console.log("Откуда взялся диван? Если ты его не купила, его тут нет")
}
// Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать") . Два вышеуказанных массива с помощью этой функции перевернуть.
const getReverseArray = arr => {
    return arr.reverse();
}
getReverseArray(numbers);
getReverseArray(furnitureInMyRoom);

// Уровень 2

// 7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"
const commentsFilter = commentsSocialMedia.filter(comment => comment.email.endsWith('.com'));

// 8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1
const usersWithPostId = commentsSocialMedia.map(comment => ({
    ...comment,
    postId: comment.id <= 5 ? 2 : 1
}));

// 9. Перебрать массив, что бы объекты состояли только из айди и имени
const commentsWithIdName = commentsSocialMedia.map(({id, name}) => ({id, name}));

// 10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.
const commentsWithIdNameIsInvalid = commentsSocialMedia.map(comment => ({
    ...comment,
     isInvalid: comment.body.length > 180 
}));


// Уровень 3
// 11. Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map
const emailArray = commentsSocialMedia.reduce((acc, user) => {
    acc.push(user.email);
    return acc
}, []);

// метода map
const emailUsers = commentsSocialMedia.map(email => email.email);


// 12. Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.
const emaiList = emailUsers.join();