
const minutes = document.querySelector(".minutes"),
      seconds = document.querySelector(".seconds"),
      box = document.querySelector(".watch"),
      buttone = document.querySelector(".input-buttone");

let buttonState = false;
let datatime = null;
let intervalId;

//timer
const toggleState = function() {
    buttonState = !buttonState;
    if (buttonState) {
        if (!datatime) {
            datatime = new Date();
            datatime.setMinutes(0);
            datatime.setSeconds(0);
        }
        intervalId = setInterval(() => {
            datatime.setSeconds(datatime.getSeconds() + 1);
            if (datatime.getSeconds() === 60) {
                datatime.setSeconds(0);
                datatime.setMinutes(datatime.getMinutes() + 1);
            }
            
            minutes.innerHTML = `${datatime.getMinutes()}`;
            seconds.innerHTML = `${datatime.getSeconds()}`;
        }, 1000);
    } else {
        clearInterval(intervalId);
    }
};
// Функция Reset
const resetTime = function() {
    if (buttonState) {
        clearInterval(intervalId);
        buttonState = false;
    }
    datatime = null;

    // Добавляем задержку в 1 миллисекунду перед обновлением таймера
    setTimeout(() => {
        minutes.innerHTML = '0';
        seconds.innerHTML = '0';
        console.log("Time reset");
    }, 1);
};



    var buttonNames = ["Start", "Stop"]; // Массив с названиями кнопок
    var currentButtonIndex = 0; // Индекс текущего названия

    document.getElementById("myButton").addEventListener("click", function() {
      var button = document.getElementById("myButton");
      currentButtonIndex = (currentButtonIndex + 1) % buttonNames.length; // Инкремент индекса и проверка на выход за пределы массива
      button.innerHTML = buttonNames[currentButtonIndex]; // Установка нового названия
    });