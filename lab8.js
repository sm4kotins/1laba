function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML = 'Дата и время для Русской локали:' + today.toLocaleString('ru-RU');

    let out1 = document.getElementById('current-date1');
    let today1 = new Date();
    out1.innerHTML = 'Дата и время для Белоруской локали:' + today1.toLocaleString('be-BY');

    let out2 = document.getElementById('current-date2');
    let today2 = new Date();
    out2.innerHTML = 'Дата и время для Канадской локали:' + today2.toLocaleString('en-CA');

    let out3 = document.getElementById('current-date3');
    let today3 = new Date();
    out3.innerHTML = 'Дата и время для Мексикансокой локали:' + today3.toLocaleString('es-MX');

    let out4 = document.getElementById('current-date4');
    let today4 = new Date();
    out4.innerHTML = 'Дата и время для Истонской локали:' + today4.toLocaleString('et-EE');

    let out5 = document.getElementById('current-date5');
    let today5 = new Date();
    out5.innerHTML = 'Дата и время для Индийской локали:' + today5.toLocaleString('gu-IN');

}
function showDaysCount() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let result = document.getElementById('rusult-count');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    result.innerHTML = "Количество дней с даты рождения: " + daysCount;
}

function ohistka() {
    let inputDate = document.querySelector('input[type=date]');
    let result =document.getElementById('rusult-count');

    inputDate.value="";
    result.innerHTML="";
}

function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = "Время " + currentTime;

}
setInterval(showTime, 1000);