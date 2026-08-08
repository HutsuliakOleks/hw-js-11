// Завдання 1
const bankAccount = {
  ownerName: "Oleksandr",
  accountNumber: prompt("Введіть номер готівки:"),
  balance: prompt("Введіть рахунок:"),
  deposit() {
    const moneyDeposit = this.balance + this.balance * 0.2;
    console.log("Депозит готівки:", moneyDeposit);
  },
  withdraw() {
    const moneyWithdraw = this.deposit.moneyDeposit - this.balance;
    console.log("Залишок готівки:", moneyWithdraw);
  },
};
bankAccount.deposit();
bankAccount.withdraw();
console.log(bankAccount);

// Завдання 2
let weather = {
  temperature: prompt("Введіть температуру:"),
  humidity: prompt("Введіть частоту"),
  windSpeed: prompt("Введіть швидкість повітря"),
  temperatureLow() {
    if (this.temperature < 0) {
      let isTemperatureLow = "Температура менше за 0 градусів Цельсія";
      console.log(isTemperatureLow);
    } else {
      let isTemperatureHigh = "Температура вища або рівна 0 градусів Цельсія";
      console.log(isTemperatureHigh);
    }
  },
};
weather.temperatureLow();
console.log(`Температура: ${weather.temperature} C`);
console.log(`Частота: ${weather.humidity}`);
console.log(`Швидкість повітря: ${weather.windSpeed} км/г`);

// Завдання 3
const user = {
  name: prompt("Введіть ім'я:"),
  email: prompt("Введіть пошту:"),
  password: prompt("Введіть пароль:"),
  login() {
    const nameLength = this.name.length;
    const emailCheck = this.email.includes("@");
    const emailPoint = this.email.includes(".");
    const passwordLength = this.password.length;
    if (nameLength > 4 && emailCheck && emailPoint && passwordLength) {
      console.log("Цей логін готовий");
    } else {
      console.log("Логін не готовий");
    }
  },
};
user.login();
console.log(`Ім'я: ${user.name}`);
console.log(`Пошта: ${user.email}`);
console.log(`Пароль: ${user.password}`);
// Завдання 4
const movie = {
  title: prompt("Введіть Кіно"),
  director: prompt("Введть Сценарій:"),
  year: prompt("Введіть рік:"),
  rating: prompt("Введіть оцінку"),
  highRating() {
    if (rating > 8) {
      console.log("Кіно має більше ніж 8");
    } else {
      console.log("Кіно не має більше ніж 8");
    }
  },
};
movie.highRating();
console.log(`Кіно: ${this.title}`);
console.log(`Сценарій: ${this.director}`);
console.log(`Рік: ${this.year}`);
console.log(`Оцінка: ${this.rating}`);
