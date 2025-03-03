// function — ключове слово
// sayHello — ім'я функції
// list, item — параметри або аргументи функції, значення яких будуть передаватися під час виклику функції. (аргументи - це вхідні дані, які ми можемо передати в функцію)

//Спочатку оголошуємо функцію і визначаємо її параметри.
// Потім викликаємо цю функцію з конкретними значеннями параметрів.

// function sayHello() { //не має аргументів
//     let helloMessage = "Hello, user!"
// console.log(helloMessage);
// }
//
// sayHello ();


// function sayHello(name) { // name - це назва аргументу (даних, які функція має отримати), ця назва використувується лише функцією й доступна лише в ній.
//     let helloMessage = `Hello, ${name}!`;
//     console.log(helloMessage);
// }
//
// sayHello ("Anna");
// //console.log("Anna"); log - така ж сама функція як і sayHello, вона отримує якийсь аргумент ("Anna"), тобто "Anna" - це аргумент функції log
//
// sayHello ("Alex");
//
// //Також можно передавати змінну
// let name = "Alice";
// sayHello (name);

//Adding two numbers
// function add(firstNumber = 0, secondNumber = 0) { //Для униклення NaN, можно додавати дефолтне значення (значення за замовчуванням)
//     console.log(firstNumber, secondNumber); // Які аргументи отримала функція (5 і undefined)
//     console.log(firstNumber + secondNumber);
// }
//
// add(5, 9);
// add(67, -7)
// add(5) //NaN
// add()


// function add(a, b) {
//    return (a + b) / 7 % 2;
// }
//
// let result = add(4, 10);
// console.log(result);

// Будь-яка функція без return повертає undefined

//-----------------------------------------------------------


//Масиви (списки) - це послідовні набори даних у який кожен елемент має свій порядковий номер.
//Індекс – це порядковий номер елемента, за яким можна отримати доступ до нього.
// length - це довжина масиву, яка показує реальну кількість елементів в масиві.


// let usersArray = ["Ihor", "Alice", "Bob"];
// console.log(usersArray);
//
// //Зміна елемента в масиві
// usersArray[2] = "Bob Dylan";
// console.log(usersArray);
//
// //Дізнатись довжину масиву
// console.log(usersArray.length);
//
// for(let i =0; i < usersArray.length; i++) {
//     console.log(usersArray[i]);
// }


// let salaryArray = [100, 150, 50, 250];
// console.log(salaryArray);
//
// for (let i = 0; i < salaryArray.length; i++) {
//     // if(salaryArray[i] > 200) {
//     //     salaryArray[i] += 10;
//     // } else {
//     //     salaryArray[i] += 20;
//     // }
//
//     salaryArray[i] > 200 ? salaryArray[i] += 10 : salaryArray[i] += 20; //скоротили через тернарний оператор
// }
// console.log(salaryArray);


//-----------------------------------------------------------

//Дефолтні функції в масивах
//
// let salaryArray = [100, 150, 50, 250];
// console.log(salaryArray);
//
// //Функція push  (додавання значення в кінець масиву)
// salaryArray.push(333);
// console.log(salaryArray);
//
//
// //Функція pop  (видалення значення з кінця масиву)
// salaryArray.pop();
// // console.log(salaryArray.pop()); //видаляє та виводить видалине значення
// console.log(salaryArray);
//
//
// //Функція unshift  (додавання значення на початку масиву)
// salaryArray.unshift(10);
// console.log(salaryArray);
//
//
// //Функція shift  (видалення значення на початку масиву)
// salaryArray.shift();
// console.log(salaryArray);
//
//
// //Функція indexOf  (шукає перший індекс елемента в масиві. Якщо вказаного елемента немає, indexOf повертає -1)
// console.log(salaryArray.indexOf(50)); //2
//
// //Перевірка пов'язана з цим
// // if (salaryArray.indexOf(50) === -1) {
// // } else
//
//
// //Функція includes  (шукає елемент в масиві та повертає булеве значення)
// console.log(salaryArray.includes(50)); //true
// console.log(salaryArray.includes(777)); //false


//Функція splice
// let numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers);

//видалення елементів
// numbers.splice(1, 2); //індекс з якого починати видаляти, кількість елементів які хочу видалити
// numbers.splice(2,1); // delete 3
// console.log(numbers);


////видалення елементів + додавання елементів на місце видалених
// numbers.splice(4, 1, 4);
// console.log(numbers); // [ 1, 2, 3, 4, 4, 6 ]

// numbers.splice(2, 1, 4, 0, 4, 200); // можна вставляти безкінечну кількість чисел
// console.log(numbers);


//додавання елементів
// numbers.splice(4, 0, 4.5); //число вставляється на місце вказаного індексу
// console.log(numbers);


//Функція slice  (отримання підмасиву шляхом вирізання елементів з іншого масиву (без зміни початкового масиву)
// let newArr = numbers.slice(1,3); // [ 2, 3 ]  з 1 до 3(не включно)
// console.log(newArr);


//Функція join  (додає всі елементи в масиві в рядок)
// console.log(numbers.join()); //1,2,3,4,5,6 - join сконкатенувала елементи через кому
// console.log(numbers.join("")); //123456
// console.log(numbers.join(" ")); //1 2 3 4 5 6
// console.log(numbers.join(", ")); //1, 2, 3, 4, 5, 6

// по суті join робить:
// let str = "";
// str += numbers[i] + " ";

// let fruits = ["Apple", "orange", "pear"];
// console.log(fruits.join(", "));


//-----------------------------------------------------------

//String (рядок - зберігаються як масив даних, але рядок - це незмінний тип даних)

// let str = "Come with me"
// console.log(str);
// console.log(str[0]); //C
// console.log(str[3]); //e

// str[0] = "A" // не працює
//
// for(let i = 0; i < str.length; i++){
//     console.log(str[i]);
// }



//Функції рядка

// console.log(str.length); //12
//
// console.log(str.toUpperCase()); //COME WITH ME
//
// console.log(str.toLowerCase()); //come with me
//
// console.log(str.indexOf('e')); //3
//
// console.log(str.includes("t")); //true
// console.log(str.includes("T")); //false
// console.log(str.includes("ome")); //true
//
// console.log(str.slice(0, 4)); //Come
//
// //split - це функція зворотня до join
// console.log(str.split()) //'Come with me'
// console.log(str.split("")) // ['C', 'o', 'm', 'e', ' ', 'w', 'i', 't', 'h', ' ', 'm', 'e']
// console.log(str.split(" ")); // [ 'Come', 'with', 'me' ]
//
// //split і slice видають нам нові данні на основі рядка, які ми можемо перетворити в масив (будуть доступні всі функції)
// let arrFromStr = str.split(" ");
// console.log(arrFromStr);


// Функції, за допомогою яких я можу отримати новий рядок на основі мого рядку з заміненими значеннями
// console.log (str.replace("with", "to")); //Come to me
//
//
// let str2 = "Come with me and with my soul"
// console.log(str2);
// console.log (str2.replace("with", "to")); //Come to me and with my soul
// console.log (str2.replaceAll("with", "to")); //Come to me and to my soul


//-----------------------------------------------------------

//Practice

// //Task 1: Фільтрація чисел у масиві
// function filterNumbers(arr) {
//     let newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof(arr[i]) === "number") {
//             newArray.push(arr[i]);
//         }
//     }
//     return newArray;
// }
// let mixedArray = [1, 'apple', 3, 'banana', 7, true];
//
// console.log(filterNumbers(mixedArray)); //[ 1, 3, 7 ]
//
//
//
// //Task 2: Перевернути масив
// function reverseArray(arr) {
//     let numsRevers = [];
//     for (let i = arr.length - 1; i > -1; i--) {
//         numsRevers.push(arr[i]);
//     }
//     console.log(numsRevers); //[ 5, 4, 3, 2, 1 ]
// }
//
// let nums = [1, 2, 3, 4, 5];
// reverseArray(nums);
//
//
// //Можна набагато скоротити за допомогою вбудованого метода reverse()
// // let nums2 = [1, 2, 3, 4, 5];
// // console.log(nums2.reverse()); //[ 5, 4, 3, 2, 1 ]
//
//
//
// //Task 3: Пошук індексу елемента
// function findElementIndex(arr, element) {
//     const index = arr.indexOf(element);
//     return index !== -1 ? index : "Element not found";
// }
//
// let fruits = ["apple", "banana", "orange"];
// console.log(findElementIndex(fruits, "banana")); //1
// console.log(findElementIndex(fruits, "grape")); // Element not found


//Task 4: Видалення елемента з масиву
// function removeElement(arr, item) {
//     const index = arr.indexOf(item);
//
//     if (index !== -1) {
//         arr.splice(index, 1)
//         return arr;
//     } else {
//         return `Element ${item} not found in the array.`;
//     }
//
// }
//
// let numbers = [10, 20, 30, 40, 50];
// removeElement(numbers, 30);
// console.log(numbers);
