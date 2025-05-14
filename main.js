                                                                                                                      /*
CLASS

◦ constructor functions   ❗️старіший спосіб❗️
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

Раніше для створення нових однотипних об'єктів (тобто об'єктів, які мають однакову структуру і методи) використовували
функції-конструктори та прототипи в JS. Вони дозволяють створювати об'єкти з однаковою структурою і методами.

function User(name, email) {
 this.name = name;
 this.email = email;
 this.greet = function () {
     console.log(`Hello, ${this.name}! Welcome to our website. We'll contact you at ${this.email}.`);
 }
}

const user1 = new User("John","john@gmail.com");
user1.greet(); //Hello, John! Welcome to our website. We'll contact you at john@gmail.com.


◦ classes   ❗️сучасний підхід❗️
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

У 2015 році в стандарт ECMAScript 6 (ES6) були додані класи.

Клас — це шаблон або конструктор в JS для створення об'єктів. Клас визначає структуру (властивості) і поведінку (методи)
об'єктів, що будуть створені з цього класу.


class Person {
 constructor(name, email) {
     this.name = name;
     this.email = email;
 }
 greet() { // метод
     console.log(`Hello, ${this.name}! Welcome to our website. We'll contact you at ${this.email}.`);
 }
}
// Створення об'єкту з класу
const anna = new Person("Anna", "anna@gmail.com");
anna.greet(); //виклик методу

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
Метод об'єкта (чи класу) — це функція, яка оголошена всередині об'єкта (чи класу) і належить цьому об'єкту. Вона
викликається через через object.methodName()

◦ constructor — це спеціальний метод, який використовується для ініціалізації об'єкта при його створенні.
◦ кожен клас може мати лише один конструктор
◦ this в конструкторі вказує на новостворений об'єкт, для якого ми задаємо значення


1. Всередині конструктора класу задаємо властивості, які матиме кожен екземпляр цього класу. Це відбувається через this,
 що дозволяє створювати властивості, прив’язані до конкретного об'єкта.

2. Під час створення нового об'єкта за допомогою ключового слова new та назви класу автоматично викликається
 метод-конструктор. У нього передаються значення параметрів, які потім присвоюються відповідним властивостям об’єкта.

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

 ❗Класи (як і функції-конструктори) в JS головним чином використовуються для реалізації Object-Oriented Programming ❗


               CLASS — ЦЕ СИНТАКСИЧНИЙ ЦУКОР ДЛЯ ФУНКЦІЙ-КОНСТРУКТОРІВ ТА ПРОТОТИПНОГО НАСЛІДУВАННЯ

 1. ФУНКЦІЯ-КОНСТРУКТОР І ПРОТОТИП

  function Animal(name) {
      this.name = name;
  }

  Animal.prototype.walk = function () {
      console.log(`${this.name} walks`)
  }

  const dog = new Animal("Daisy")
  dog.walk()  // Daisy walks

  console.log(typeof Animal)    // function
  console.log(typeof dog)       // object

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
  ◦ AnimalFn — це звичайна функція
  ◦ Якщо викликати її з new, створюється новий об’єкт, і this вказує на нього
  ◦ Усі методи, які ми хочемо ділити між екземплярами (а не дублювати в кожному), ми додаємо у AnimalFn.prototype

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

 2. КЛАС (ЯК СИНТАКСИЧНИЙ ЦУКОР НАД ЦИМ)

  class Animal {
      constructor(name) {
          this.name = name;
      }

      walk() {
          console.log(`${this.name} walks`)
      }
  }

  const cat = new Animal("Tom")
  cat.walk()  // Tom walks

  console.log(typeof Animal)    // function
  console.log(typeof cat)       // object


 ЩО ВІДБУВАЄТЬСЯ ПІД КАПОТОМ:

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
 1.  class Animal { ... }      створюється функція-конструктор з ім’ям Animal         function Animal() {}
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
 2.  constructor(name) {       додаються параметри й тіло функції-конструктора        function Animal(name) {
           this.name = name;                                                                  this.name = name;
       }	                                                                              }
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
 3.  method() { ... }	      додаються методи до Animal.prototype     Object.defineProperty(Animal.prototype, "walk", {

                                                                          value: function () {
                                                                             console.log("walks");
                                                                           },

                                                                          enumerable: false,
                                                                          writable: true,
                                                                          configurable: true
                                                                        });
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

 4. Перезаписується constructor в Animal.prototype:
                                                       Object.defineProperty(Animal.prototype, "constructor", {
                                                           value: Animal,
                                                           enumerable: false, // робимо constructor неперераховуваним
                                                           writable: true,
                                                           configurable: true
                                                       });
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
(3)
 У КЛАСАХ ВСІ МЕТОДИ Є НЕПЕРЕРАХОВУВАЛЬНІ (enumerable: false), не з’являються при переборі через for...in, Object.keys()

 Бо додаються до прототипу як властивості через Object.defineProperty, а не просто через Animal.prototype.method = fn


(4)
 Перезапис constructor НЕ ОБОВ’ЯЗКОВИЙ, але у класах це робиться автоматично на випадок, якщо прототип буде повністю
 перезаписано вручну.

 НАПРИКЛАД, якщо ми повністю замінимо прототип функції-конструктора Animal на новий об’єкт:

       Animal.prototype = {
         walk() {
           console.log(this.name + " walks");
         }
      };

 Якщо це станеться властивість constructor вже буде вказувати не на Animal, а на конструктор Object:

      console.log(Animal.prototype.constructor); // ƒ Object() { [native code] }

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
 ТОБТО ПЕРЕЗАПИС ВЛАСТИВОСТІ КОНСТРУКТОР У Animal.prototype — ЦЕ ПРОФІЛАКТИКА, щоб:

    ◦ властивість constructor правильно вказувала на конструктор Animal

    ◦ була прихована при переборі

    ◦ та щоб її можна було змінити або видалити при потребі (writable: true, configurable: true)

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

                               Object.defineProperty(obj, "propertyName", descriptor)


 Це метод, який дозволяє створити або перезаписати властивість об’єкта з точним налаштуванням її поведінки
 (через дескриптор)

 Аргументи які цей метод прикмає:
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
      ◦ obj — об’єкт, до якого ми додаємо властивість

      ◦ propertyName — назва властивості (рядок)

      ◦ descriptor — об’єкт з налаштуваннями:
                                               • value — значення властивості

                                               • writable
                                               • enumerable
                                               • configurable

                                               • get — функція-гетер
                                               • set — функція-сетер
  ПРИКЛАД:
‾‾‾‾‾‾‾‾‾‾‾‾

 Object.defineProperty(Animal.prototype, "walk", {

   value: function () {    // встановлюємо значення влистивості, в нашому випадку це функція
        console.log(`${this.name} walks`)
    }

   enumerable: false,     // визначаємо, чи буде властивість доступною при переборі об'єкта (false - не буде)

   writable: true,        // вказуємо, чи можна змінювати значення цієї властивості (true - можна)

   configurable: true     // визначаємо чи можна видалити властивість з об'єкта за допомогою delete
                          // та чи можна змінити її опис (наприклад, зробити writable: true → false) (true - можна)
 });


   ◦ Animal.prototype — об’єкт, до якого ми додаємо властивість

   ◦ "walk" — назва властивості (ми додаємо назву методу)

   ◦  value (начення властивості) — в нашому випадку, це функція  —  function () {}

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

 ПРАВИЛА ТА ОСОБЛИВОСТІ CLASS У JS:

     1. Клас можна викликати лише з new ( JS не дозволяє викликати класи як звичайну функцію)

     2. Методи класу не є перераховуваними
        Усі методи (і сам constructor) мають enumerable: false. Тому не з’являються у for...in або Object.keys()

     3. Класи завжди працюють у строгому режимі ('use strict')
        Навіть якщо ми не пишемо 'use strict', клас вже сам має strict mode

     4. Методи класу записуються в prototype (не в сам клас)

     5. Немає автоматичного підняття (hoisting) (тобто класи не можна використовувати до їх оголошення)

     6. Класи не є об’єктами — це функції

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
 Клас — це ніби контейнер (або шаблон), який МІСТИТЬ В СОБІ:

                (1)            (2)                        (3)            (4)            (5)
        ФУНКЦІЮ-КОНСТРУКТОР, МЕТОДИ, та опціонально: ГЕТЕРИ/СЕТЕРИ, ПРИВАТНІ ПОЛЯ, СТАТИЧНІ МЕТОДИ

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾


class Person {

    constructor(name = "Unknow", age = 0) { // Якщо не передати значення — name буде "Unknown", а age — 0
      this.name = name;
      this.age = age;
    }

    greet() {
       console.log(`My name is ${this.name}, I am ${this.age} years old.`);
    }

    haveBirthday() {
       this.age++;
       console.log("Today is my Birthday!")
    }
}

const person1 = new Person("Anna", 23);
const person2 = new Person();

person1.greet();        // My name is Anna, I am 23 years old.
person1.haveBirthday(); // Today is my Birthday!
person1.greet();        // My name is Anna, I am 24 years old.

console.log(person1.name); // Anna

person2.greet();        // My name is Unknown, I am 0 years old.

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

                                             СПАДКУВАННЯ В КЛАСАХ

TASK: Створення персонажів гри (але тепер через класи)

class Character {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }

    introduce () {
        console.log(`Hi! I'm ${this.name}. I have ${this.health} health points.`)
    }
}

class Wizard extends Character {
    constructor(name, health, mana) {
        super(name, health);
        this.mana = mana;
    }

    castSpell() {
        console.log(`${this.name} casts a fireball! (-10 mana)`)
        this.mana -= 10;
    }
}

const gandalf = new Wizard("Gandalf", 80, 100);

gandalf.introduce();       // Hi! I'm Gandalf. I have 80 health points.
gandalf.castSpell();       // Gandalf casts a fireball! (-10 mana)
console.log(gandalf.mana); // 90


‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
 ◦ extends — означає, що клас наслідує від іншого класу (дослівно: розширює інший клас). Тобто Wizard успадковує усі
   властивості й методи Character.

   class Wizard extends Character {...}         → → →            Wizard.prototype = Object.create(Character.prototype);
                                          насправді означає      Wizard.prototype.constructor = Wizard;

                                                                            + ще додається:

                                                                Object.setPrototypeOf(Wizard, Character);


 Object.setPrototypeOf(Wizard, Character) означає що конструктор Wizard успадковує статичні методи від конструктора
 Character.

 Статичні методи — це методи, які знаходяться безпосередньо в класі Character, а не в його prototype

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
 ◦ super — це виклик конструктора батьківського класу (Character) в контексті поточного об'єкта this (для того щоб
   ініціалізувати його поля).


   super(name, health);                   → → →                Character.call(this, name, health);
                                    насправді означає
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

 ЩО ВІДБУВАЄТЬСЯ ПРИ new Wizard(...)

      1. new Wizard(...)  —  творює порожній об’єкт {} і прив’язує до нього [[Prototype]] = Wizard.prototype

      2. запускається конструктор Wizard(...)

      3. super(...) викликає Character(...), тобто конструктор батьківського класу

      4. Character(...) додає до об'єкта поля this.name і this.health

      5. після заповнення полів конструктором Character(...), об'єкт автоматично повертається в Wizard(...)

      6. Wizard(...) додає до цього об’єкта властивість this.mana

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

                                          ГЕТЕРИ І СЕТЕРИ В КЛАСАХ

 Для додавання гетерів і сетерів у функції-конструкторі нам доводилося використовувати метод Object.defineProperty(...).

 У класах же гетери й сетери можна додавати напряму в тілі класу, без зайвого коду.

 class Character {
     constructor(name, health) {
         this.name = name;
         this._health = health;
     }

     get health() {
         return this._health;
     }
     set health(value) {
         if (value < 0) {
             console.log("Health cannot be negative!")
             return;
         }
         this._health = value;
     }
 }

 class Wizard extends Character {
     constructor(name, health, mana) {
         super(name, health);
         this.mana = mana;
     }
 }

 const gandalf = new Wizard("Gandalf", 80, 100);

 console.log(gandalf.health); // 80
 gandalf.health = -10;
 console.log(gandalf.health); // Health cannot be negative!

 gandalf.health -= 10;
 console.log(gandalf.health); // 70

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

 gandalf.health -= 10  —  працює через послідовний виклик гетера й сетера. Цей рядок насправді:

                                        (3)     (1)        (2)
                          gandalf.health = gandalf.health - 10;

   1. gandalf.health викликає гетер get health(), який повертає this._health, тобто 80

   2. 80 - 10 = 70

   3.gandalf.health = 70  —  тепер викликається сетер set health(value)

         ◦ виконується перевірка, чи value >= 0
         ◦ й якщо "так" то значення this._health перезаписується  —  this._health = 70

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

                                    В ООП ІСНУЮТЬ ТРИ ОСНОВНІ ТИПИ ПОЛІВ (ЗА ДОСТУПОМ)

 Усі ці типи полів (public, protected, private) — це реалізація принципу інкапсуляції в ООП. Тобто приховування
 внутрішніх деталей реалізації об’єкта та контроль доступу до його даних.


  1. Protected
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
 Захищені поля (але в JS вони псевдозахищені) — ці поля доступні лише в межах класу та його підкласів (нащадків).


 Логіка protected полів в JavaScript не реалізована на рівні мови, це означає, що мова не має вбудованого механізму або
 ключових слів для визначення полів об'єкта, які можуть бути доступні тільки всередині класу та його підкласів.

 В інших мовах програмування, таких як Java чи C#, є спеціальні модифікатори доступу (private, protected, public), які
 чітко визначають рівень доступу до поля.


 ОДНАК JS розробники мають стилістичну конвенцію для симуляції protected полів:

 1. Використання нижнього підкреслення перед іменем методу, властивості, або змінної (наприклад: _balance), щоб
    позначити, що це поле призначене для внутрішнього використання в класі або підкласах.

           ⚠️ "Ця змінна є внутрішньою або приватною, і її не можна чіпати ззовні напряму"

    Проте це лише стилістична конвенція, й доступ до цього поля все одно можна отримати ззовні, оскільки JS не має
    прямої підтримки для захищених полів.


 2. Використання гетерів і сетерів для доступу до "захищених" властивостей. Це дозволяє запобігти прямій взаємодії з
    властивістями і додавати додаткову валідацію та обмеження при спробі їх змінити.


 EXAMPLE:

 class BankAccount {
     constructor(owner, initialBalance) {
         this._balance = initialBalance;
         this.owner = owner;
     }
     get balance() {
         return this._balance;
     }
     set balance(value) {
         if (value < 0) {
             console.log("Balance cannot be negative!");
             return;
         }
         this._balance = value;
     }
 }

 const account = new BankAccount("Anna", 1000);

 console.log(account.balance);   // 1000

 account.balance = -500;        // Balance cannot be negative!
 console.log(account.balance);  // 1000

 account.balance -= 300;
 console.log(account.balance);  // 700

 account._balance = -100;
 console.log(account.balance);  // -100   —   ⚠️ доступ можливий напряму, поле не по-справжньому захищене



  2. Private
‾‾‾‾‾‾‾‾‾‾‾‾‾‾
 Приватні поля  —  ці поля доступні лише всередині самого класу

 На відміну від захищених полів, логіка приватних полів у JavaScript була дійсно реалізована (в ES2022).

 Це означає, що приватні поля дійсно ізольовані: вони недоступні ззовні та навіть у класах-нащадках. Спроба звернутися
 до них ззовні або в підкласі викличе помилку.


 EXAMPLE: створення приватних властивостей

 class BankAccount {
     #balance; // приватне поле (позначається через # перед назвою)

     constructor(owner, initialAmount) {
         if (initialAmount > 0) {
             this.#balance = initialAmount;
         }

         this.owner = owner;
     }

_______________ Щоб змінювати приватні поля з підкласу, треба створити set і get в батьківському класі _________________

     get balance() {
         return this.#balance;
     }

     set balance(value) {
         if (value < 0) {
             console.log("Balance cannot be negative!");
             return;
         }
          this.#balance = value;
     }
________________________________________________________________________________________________________________________


     deposit(amount) {
         if (amount > 0) {
             this.#balance += amount;
         }
     }
     withdraw(amount) {
         if (amount > 0 && this.#balance >= amount) {
             this.#balance -= amount;
         }
     }

     getBalance() {
         return this.#balance;
     }
 }

 const account = new BankAccount("Anna", 1000);

 console.log(account.getBalance());   // 1000

 account.deposit(150);
 console.log(account.getBalance());  // 1150

 //console.log(account.#balance);   // ❌SyntaxError
 //account.#balance = 300;          // ❌SyntaxError


 EXAMPLE: створення приватних методів

 class Character {
     #health;
     #level

     constructor(name, health, level = 1) { // додаємо значення за замовчуванням для level
         this.name = name;
         this.#health= health;
         this.#level = level;
     }

     get health() {
         return this.#health;
     }
     set health(value) {
         if (value < 0 && isNaN(value)) {
             console.log("Health cannot be negative!")
             return;
         }
         this.#health = value;
     }

     #calculateDamage(baseDamage) {
         return baseDamage * this.#level;
     }

     // Приватні методи в JS (і взагалі в ООП) використовуються для досягнення принципу інкапсуляції, щоб приховати
     // внутрішні деталі та логіку класу від зовнішнього світу

     takeDamage(damage) {
         this.#health -= this.#calculateDamage(damage);
         console.log(`${this.name} took ${damage} damage! Remaining HP - ${this.#health}`);
     }
 }

 class Wizard extends Character {
     constructor(name, health, mana, level = 3) { // передаємо level як параметр для Wizard
         super(name, health, level);
         this.mana = mana;
     }

     castSpell() {
         console.log(`${this.name} casts a fireball! (-10 mana)`)
         this.mana -= 10;

     // ❗Для того щоб викликати публічний метод батьківського класу в підкласі, використовується super.methodName() ❗
     }
 }

 const gandalf = new Wizard("Gandalf", 80, 100);

 gandalf.takeDamage(10); // Gandalf took 15 damage! Remaining HP - 65


  3. Public
‾‾‾‾‾‾‾‾‾‾‾‾‾‾
 Публичні поля  —  ці поля доступні з будь-якої частини програми, їх можна змінювати чи читати без будь-яких обмежень.

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

                                         СТАТИЧНІ МЕТОДИ (static methods)


 Статичні методи — це методи, які належать самому класу, а не його екземплярам (об'єктам). Їх не можна викликати через
 об'єкт, тільки через ім'я класу.

 Статичні методи оголошуються за допомогою ключового слова static.

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
 У JS багато вбудованих глобальних конструкторів мають статичні методи — тобто методи, які викликаються напряму через
 ім’я конструктора, а не через об'єкти

 КІЛЬКА ПОШИРЕНИХ ПРИКЛАДІВ

  1. Object
           ◦ Object.keys(obj),  Object.values(obj),  Object.entries(obj)

           ◦ Object.assign(target, ...sources)  —  копіює власні (не наслідувані) властивості з одного або більше
                                                   об’єктів в (інший або новий) об’єкт (перший аргумент).

            Застосувується для неглибокого копіювання об'єктів, або для об’єднання кількох об’єктів.

  2. Array
           ◦ Array.isArray(value)  —  перевіряє, чи передане значення є масивом
           ◦ Array.from(value)     —  створює масив із масивоподібного або ітерованого об'єкта

  3. Number
           ◦ Number.isNaN(value)   —  перевіряє, чи значення є NaN

    ❗НЕ ПЛУТАТИ цей статичний метод, який просто перевіряє, чи аргумент === NaN (без перетворення) з глобальною
      функцією isNaN(value), яка перетворює аргумент на число, а потім перевіряє, чи це NaN


  4. Math — це ціла бібліотека, яка є набором статичних методів, наприклад:

           ◦ Math.max(10, 5, 20);  // 20
           ◦ Math.round(3.7);      // 4
           ◦ Math.random();        // випадкове число від 0 до 1 (наприклад: 0.766998857081379)


      РЕАЛІЗАЦІЯ СТАТИЧНИХ МЕТОДІВ В ФУНКЦІЯХ-КОНСТРУКТОРАХ, ЯКІ НЕ МАЮТЬ СИНТАКСИСУ static, ЯК У КЛАСАХ

 JS функція — це об'єкт, тому ми можемо додавати методи прямо в неї, як в будь-який об'єкт. Такі методи не будуть
 належати екземплярам цього об'єкту й будуть викликатися напряму з самої функції-конструктора.


 РЕАЛІЗАЦІЯ:
‾‾‾‾‾‾‾‾‾‾‾‾‾

 function User(name) {  // Функція-конструктор
   this.name = name;
 }

 User.prototype.sayName = function () { // Звичайний метод — додається в прототип
   console.log(`My name is ${this.name}`);
 };

 User.isUser = function (obj) { // Статичний метод — додається прямо в сам конструктор
   return obj instanceof User; // instanceof перевіряє, чи є об'єкт переданий як аргумент, екземпляром конструктора User
 };


 const user1 = new User("John");

 user1.sayName(); // My name is John
 console.log(User.isUser(user1)); // перевіряємо, чи є об'єкт user1 екземпляром конструктора User  —  true

 //console.log(user1.isUser(user1)); // ❌ TypeError

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

EXAMPLE: static method

  class MathUtils { // математичні утиліти (допоміжна функція або метод, який виконує дію, яка часто повторюється в коді)
      static sum(a, b) {
          return a + b;
      }
  }

  console.log(MathUtils.sum(10, 5)); // 15



ANOTHER EXAMPLE: static method

class Character {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }

    introduce () {
        console.log(`Hi! I'm ${this.name}. I have ${this.health} HP.`)
    }

// створюємо новий об'єкт через new, викликаємо на ньому конструктор Character й передаємо два аргументи (name, health)

    static fromObject(obj) {  // створюємо метод, який буде перетворювати звичайний об’єкт у об'єкт класу Character
        return new Character(obj.name, obj.health);
    }
}

// Статичні методи класів успадковуються підкласами, якщо використовується ключове слово extends

class Wizard extends Character {

   constructor(name, health, mana) {
       super(name, health);
       this.mana = mana;
   }

   castSpell() {
       console.log(`${this.name} casts a fireball! (-10 mana)`)
       this.mana -= 10;
   }
}

const data = {
    name: "Gandalf",
    health: 100
};

// data — це сирі дані — звичайний об'єкт, який не є екземпляром класу Character, тому його прототип — Object.prototype,
// а не Character.prototype, а значить він не наслідує методів, таких як introduce()

// const character1 = Character.fromObject(data);
const character1 = Wizard.fromObject(data); // відбувається успадкуваня статичного методу fromObject(obj)

console.log(character1); //Character {name: 'Gandalf', health: 100}

character1.introduce(); // Hi! I'm Gandalf. I have 100 HP.
//data.introduce()        // ❌TypeError

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
Ми використовуємо статичний метод fromObject(), щоб перетворювати сирі об'єкти на повноцінні екземпляри класу, без
потреби вручну створювати об'єкт і передавати поля.

  ◦ Без fromObject() (ручна робота):

      const data = { name: "Gandalf", health: 100 };
      const character = new Character(data.name, data.health)  // потрібно вручну витягувати дані й створювати об’єкт

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

TASK: bank account

class BankAccount {
    #balance = 0;    //  приватне поле (тільки методи класу можуть читати/змінювати його)
    // _accountNumber;  //  умовно захищене поле (не приватне, але зазвичай не змінюється напряму)

    constructor(ownerName, initialAmount = 0) {
        this.ownerName = ownerName;
        this.#balance = initialAmount;

        this._accountNumber = BankAccount.#generateAccountNumber();

    }

    get balance() {
        return this.#balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposited amount is invalid!");
            return;
        }
        this.#balance += amount;
        this.#logTransaction(`Deposited $${amount}`);
    }

    withdraw(amount) {
        if (amount <= 0 || this.#balance < amount) {
            console.log("Withdrawal amount is invalid!");
            return;
        }
        this.#balance -= amount;
        this.#logTransaction(`Withdrew $${amount}`);
    }

    #logTransaction(message) {
        console.log(`[${this._accountNumber}] ${this.ownerName}: ${message}`);
        console.log("");
    }

    static #nextAccountNumber = 0;

    static #generateAccountNumber() { //це приватний статичний метод, доступний лише всередині класу, і не доступний підкласам або об'єктам.
        return this.#nextAccountNumber++; // це постфіксна інкрементація
    }

    printSummary() {
        console.log(`Account: [${this._accountNumber}] | ${this.ownerName} | Balance: $${this.#balance}`);
    }
}

class SavingsAccount extends BankAccount {

    constructor(ownerName, initialAmount = 0, interestRate = 0.05) {
        super(ownerName, initialAmount);
        this.interestRate = interestRate;
    }

   applyInterest()  {  // додавання відсоткової ставки на рахунок
       const interest = (this.balance * this.interestRate) / 100;
       console.log(`Applied $${interest} interest!`);
       this.deposit(interest);
   }

   printSummary() {  // ПЕРЕВИЗНАЧЕННЯ МЕТОДУ - реалізація поліморфізму
        super.printSummary();
        console.log(`Interest rate: ${this.interestRate}%`);

        console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
   }
}

class BusinessAccount extends BankAccount {
    constructor(ownerName, initialAmount = 0, companyName) {
        super(ownerName, initialAmount);
        this.companyName = companyName;
    }

    issueInvoice(amount) {    // виставлення рахунку (інвойсу)
        if (amount <= 0) {
            console.log("Invoice amount is invalid!");
            return;
        }
        this.deposit(amount); // додавання коштів на рахунок
        console.log(`Issued invoice for $${amount}.`);
    }

    printSummary() {
        super.printSummary();
        console.log(`Business Account: ${this.companyName}`);

        console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
    }
}

const savingAccount1 = new SavingsAccount("Saul Goodman", 1000, 3);
const businessAccount1 = new BusinessAccount("Chuck McGill", 10000, "Hamlin, Hamlin & McGill ");

savingAccount1.deposit(1000);        // [0] Saul Goodman: Deposited $1000

savingAccount1.applyInterest();      // Applied $60 interest!
                                     // [0] Saul Goodman: Deposited $60

savingAccount1.withdraw(500);        // [0] Saul Goodman: Withdrew $500

savingAccount1.printSummary();       // Account: [0] | Saul Goodman | Balance: $1560
                                     // Interest rate: 3%

businessAccount1.issueInvoice(5000); // [1] Chuck McGill: Deposited $5000

businessAccount1.withdraw(3000);     // Issued invoice for $5000.
                                     // [1] Chuck McGill: Withdrew $3000

businessAccount1.printSummary();     // Account: [1] | Chuck McGill | Balance: $12000
                                     // Business Account: Hamlin, Hamlin & McGill

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

                                                 ПЕРЕВИЗНАЧЕННЯ МЕТОДУ

 Перевизначення методів (method overriding) в підкласах — це одна з основних технік для досягнення ПОЛІМОРФІЗМУ.

 ПОЛІМОРФІЗМ дозволяє об'єктам з різними класами мати однакові методи, але реалізувати їх по-різному.

 Перевизначення методів дозволяє підкласу надавати свою власну реалізацію методу, який був визначений у батьківському
 класі.
 Коли підклас перевизначає метод, він може змінити або розширити поведінку, яку батьківський клас надає за замовчуванням


  printSummary() {
        super.printSummary();
        console.log(`Savings Account with ${this.interestRate} interest rate per year.`);
    }


 1. У підкласі SavingsAccount метод printSummary() перевизначає метод з таким самим ім'ям з батьківського класу
    BankAccount.

 2. За допомогою super.printSummary() підклас може викликати оригінальний метод з батьківського класу перед тим, як
    додати додаткову логіку, специфічну для цього підкласу, ТОБТО РОЗШИРИТИ ОРИГІНАЛЬНИЙ МЕТОД.

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
                                      ПОСТФІКСНА та ПРЕФІКСНА ІНКРЕМЕНТАЦІЇ

 ◦ Постфіксна інкрементація — це коли оператор ++ стоїть після змінної: (х++)

      1. спочатку повертається значення змінної до збільшення
      2. потім змінна збільшується на 1

 ◦ Префіксна інкрементація — це коли оператор ++ стоїть перед змінною: (++x)  →  змінна відразу збільшується на 1

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾*/
