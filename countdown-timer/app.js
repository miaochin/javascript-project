const target_time = new Date ('12/25/2021');

function digit_prefix＿two(digit) {
    if (digit < 10) digit = '0' + digit;
    return digit;
}

function digit_prefix＿three(digit) {
    if (digit < 10) {
        digit = '00' + digit;
    }
    else if (digit < 100) {
        digit = '0' + digit;
    }
    return digit;
}

function singular_plural(time_text, time_unit, digit) {
    s_p = document.getElementById(time_text);
    if (digit != 1) {
        s_p.innerHTML = time_unit + 's';
    }
    else {
        s_p.innerHTML = time_unit;
    }
}

function countdown() {
    const current_time = new Date();
    const diff_time = target_time - current_time;

    let diff_day = Math.floor(diff_time/ (1000 * 24 * 60 * 60));
    let diff_hour = (Math.floor(diff_time/ (1000 * 60 * 60))) % 24;
    let diff_min = (Math.floor(diff_time/ (1000 * 60))) % 60;
    let diff_sec = (Math.floor(diff_time/ 1000)) % 60;

    singular_plural_array = [['day-text', 'Day', diff_day], ['hour-text', 'Hour', diff_hour], 
    ['min-text', 'Minute',  diff_min], ['sec-text','Second', diff_sec]];
    
    for (let elem of singular_plural_array) {
        singular_plural(elem[0], elem[1], elem[2]);
    }
    
    diff_day = digit_prefix＿three(diff_day);
    diff_hour = digit_prefix＿two(diff_hour);
    diff_min = digit_prefix＿two(diff_min);
    diff_sec = digit_prefix＿two(diff_sec);
    
    display_array = [['day-digit', diff_day], ['hour-digit', diff_hour], ['min-digit', diff_min], ['sec-digit', diff_sec]];

    for (let elem of display_array) {
        document.getElementById(elem[0]).innerHTML = elem[1];
    }
}

setInterval(countdown,1000);