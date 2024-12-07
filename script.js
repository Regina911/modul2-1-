1task 
let auto = {
    manufacturer: "Japan",
    model: "Nissan",
    issueAge: 2000,
    averageSpeed: 100,
}

console.log(auto);
function auto1(auto, distance) {
  let auto1 = distance/auto.averageSpeed;
  let breaks = Math.floor(auto1/4);
  let sumTime = auto1 + breaks;

  return `${distance}
  ${sumTime.toFixed(2)}`;
}
console.log(auto1(auto,300));


2task 
function createVichislenie(chislitel, znamenatel){
  return {
  chislitel: chislitel,

  znamenatel: znamenatel,

};

}



function ddd(a, b) {
  return b === 0 ? a : ddd(b, a % b);
}


function reduce(vichislenie) {
  const commonDivisor = ddd(vichislenie.chislitel, vichislenie.znamenatel);
  return createVichislenie(vichislenie.numerator / commonDivisor, vichislenie.znamenatel / commonDivisor);
}


function add(vichislenie1, vichislenie2) {
  const newChislitel = vichislenie1.chislitel * vichislenie2.znamenatel + vichislenie2.chislitel* vichislenie1.znamenatel;
  const newZnamenatel = vichislenie1.znamenatel * vichislenie2.znamenatel;
  return reduce(createVichislenie(newChislitel, newZnamenatel));
}


function subtract(vichislenie1, vichislenie2) {
  const newChislitel = vichislenie1.chislitel * vichislenie2.znamenatel - vichislenie2.chislitel * vichislenie1.znamenatel;
  const newZnamenatel = vichislenie1.znamenatel * vichislenie2.znamenatel;
  return reduce(createVichislenie(newChislitel, newZnamenatel));
}

// Функция для умножения двух дробей
function multiply(vichislenie1, vichislenie2) {
  const newChislitel = vichislenie1.chislitel * vichislenie2.chislitel;
  const newZnamenatel = vichislenie1.znamenatel * vichislenie2.znamenatel;
  return reduce(createVichislenie(newChislitel, newZnamenatel));
}

// Функция для деления двух дробей
function divide(fraction1, fraction2) {
  const newChislitel = fraction1.numerator * fraction2.denominator;
  const newZnamenatel = fraction1.denominator * fraction2.numerator;
  return reduce(createVichislenie(newChislitel, newZnamenatel));
}

// Функция для отображения дроби в строковом формате
function toString(vichislenie) {
  return `${vichislenie.chislitel}/${vichislenie.znamenatel}`;
}

// Пример использования
const vichislenie1 = createVichislenie(1, 2); // 1/2
const vichislenie2 = createVichislenie(3, 4); // 3/4

console.log(`Сложение: ${toString(add(vichislenie1, vichislenie2))}`);        // 10/8 или 5/4
console.log(`Вычитание: ${toString(subtract(vichislenie1, vichislenie2))}`); // -1/4
console.log(`Умножение: ${toString(multiply(vichislenie1, vichislenie2))}`); // 3/8
console.log(`Деление: ${toString(divide(vichislenie1, vichislenie2))}`);     

  3task 
  let time = {
    hours: 12,
    minutes: 45,
    seconds: 17,
    showTime: function() {
      alert(`${this.hours}:${this.minutes}:${this.seconds}`);
    },
    addSeconds: function(seconds) {
      if (seconds <= 0) {
        alert("You entered incorrect time!");
      } else if (seconds + this.seconds >= 60) {
        let differenceMin = Math.floor((this.seconds + seconds) / 60);
        this.seconds = (this.seconds + seconds) % 60;
        this.addMinutes(differenceMin);
      } else {
        this.seconds += seconds;
      }
    },
    addMinutes: function(minutes) {
      if (minutes <= 0) {
        alert("You entered incorrect time!!!");
      } else if (this.minutes + minutes >= 60) {
        let differenceHours = Math.floor((this.minutes + minutes) / 60);
        this.minutes = (this.minutes + minutes) % 60;
        this.addHours(differenceHours);
      } else {
        this.minutes += minutes;
      }
    },
    addHours: function(hours) {
      if (hours <= 0) {
        alert("You entered incorrect time!");
      } else if (hours + this.hours >= 24) {
        this.hours = (this.hours + hours) % 24;
      } else {
        this.hours += hours;
      }
    }
  };
  
  time.showTime();
  time.addHours(25);
  time.showTime();
  time.addMinutes(120);
  time.showTime();
  time.addSeconds(360);
  time.showTime();