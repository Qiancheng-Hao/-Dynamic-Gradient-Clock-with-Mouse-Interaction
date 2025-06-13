$(document).ready(function() {

    // Track mouse movement
    $(document).on('mousemove', function(e) {
        lastMove = Date.now();

        showShowHideDiv();
        clearTimeout(hideDivTimeout);
        hideDivTimeout = setTimeout(hideShowHideDiv, buttonGap);

        if (mode !== 'mouse') {
            switchToMouseMode();
        }

        updateByMouse(e);
        clearTimeout(inactivityTimeout);
        inactivityTimeout = setTimeout(checkInactivity, timeGap);
    });

    switchToTimeMode();

    inactivityTimeout = setTimeout(checkInactivity, timeGap);

    hideDivTimeout = setTimeout(hideShowHideDiv, buttonGap);


    updateTime();
    setInterval(updateTime, 500);



});

let mode = 'time'; // 'mouse' or 'time'
let lastMove = Date.now();
let timeInterval, inactivityTimeout, hideDivTimeout;
let timeGap = 10000, buttonGap = 1000;

// Function to update background color based on mouse position
function updateByMouse(e) {
    const red = Math.floor((e.clientX / $(window).width()) * 255);
    const green = Math.floor((e.clientY / $(window).height()) * 255);
    const blue = Math.floor(((e.clientX + e.clientY) / ($(window).width() + $(window).height())) * 255);

    setColor(red, green, blue, 0.25);
}

// Function to update background color based on time
function updateByTime() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentSecond = now.getSeconds();
    let hour, minute;
    if (currentMinute <= 30) {
        minute = currentMinute*2;
    } else {
        minute = 120-2*currentMinute;
    }
    if (currentHour <= 12) {
        hour = currentHour*2;
    } else {
        hour = 48 - currentHour*2;
    }
    const x = (hour + minute + currentSecond)/ 144;
    const y = (hour + currentSecond)/ 84;
    const z = (minute + currentSecond)/ 120;
    const red = Math.floor(x * 255);
    const green = Math.floor(y * 255);
    const blue = Math.floor(z * 255);
    let a;

    if (currentSecond == 0) {
        a = 0
    } else if (currentSecond <=30) {
        a = currentSecond/30*0.5
    } else {
        a = (60-currentSecond)/30*0.5
    }
    setColor(red, green, blue, a);
}

function setColor(red, green, blue, a){
    let red1 = 0;
    if (red >= 199) {red1 = 199 + Math.floor((red-199)*a);}
    else {red1 = 199 - Math.floor((199-red)*a);}

    let red2 = 0;
    if (red >= 118) {red2 = 118 + Math.floor((red-118)*a);}
    else {red2 = 118 - Math.floor((118-red)*a);}

    let red3 = 0;
    if (red >= 74) {red3 = 74 + Math.floor((red-74)*a);}
    else {red3 = 74 - Math.floor((74-red)*a);}

    let green1 = 0;
    if (green >= 134) {green1 = 134 + Math.floor((green-134)*a);}
    else {green1 = 134 - Math.floor((134-green)*a);}

    let green2 = 0;
    if (green >= 234) {green2 = 234 + Math.floor((red-234)*a);}
    else {green2 = 234 - Math.floor((234-green)*a);}

    let green3 = 0;
    if (green >= 20) {green3 = 20 + Math.floor((green-20)*a);}
    else {green3 = 20 - Math.floor((20-green)*a);}

    let blue1 = 0;
    if (green >= 207) {blue1 = 207 + Math.floor((blue-207)*a);}
    else {blue1 = 207 - Math.floor((207-green)*a);}

    let blue2 = 0;
    if (blue >= 207) {blue2 = 207 + Math.floor((blue-207)*a);}
    else {blue2 = 207 - Math.floor((207-blue)*a);}

    let blue3 = 0;
    if (blue >= 213) {blue3 = 213 + Math.floor((blue-213)*a);}
    else {blue3 = 213 - Math.floor((213-blue)*a);}

    let color1 = `rgba(${red1}, ${green1}, ${blue1})`;
    let color2 = `rgba(${red2}, ${green2}, ${blue2})`;
    let color3 = `rgba(${red3}, ${green3}, ${blue3})`;

    $('html').css('background-image', `linear-gradient(to left, ${color1}, ${color2}, ${color3})`);
}

// Check for mouse inactivity
function checkInactivity() {
    const now = Date.now();
    if (mode === 'mouse' && now - lastMove > timeGap) {
        switchToTimeMode();
    }
}

function switchToTimeMode() {
    mode = 'time';
    clearInterval(timeInterval);
    timeInterval = setInterval(updateByTime, Math.floor(Math.random()*1000));
    updateByTime();
}

function switchToMouseMode() {
    mode = 'mouse';
    clearInterval(timeInterval);
}

function updateTime() {
    $('#time').text(new Date().toTimeString().split(' ')[0]); // Using text() instead of html()
}

function showHideTime() {
    const button = $('#showhidebutton')
    const time = $('#time')
    const text = button.html();
    if (text === 'Hide Time') {
        time.css('display', 'none');
        button.html('Show Time');
    } else if (text === 'Show Time') {
        time.css('display', '');
        button.html('Hide Time');
    }
}


function hideShowHideDiv() {
    $('.showhide').css({
        opacity: '0',
        pointerEvents: 'none'
    });
}
function showShowHideDiv() {
    $('.showhide').css({
        opacity: '0.5',
        pointerEvents: 'auto'
    });
}


