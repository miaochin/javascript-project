const activity_level = [1.2, 1.375, 1.55, 1.725, 1.9];
const age = document.getElementById('age');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const tdee_text = document.getElementById('tdee');
const bmi_text = document.getElementById('bmi');
const bmr_text = document.getElementById('bmr');
const gender = document.querySelector('.gender');
const gender_radios = document.getElementsByName('gender');
const activity = document.querySelector ('.activity');
const activity_radios = document.getElementsByName('activity');

function radio_value(radios) {
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
}

let current_gender = Number(radio_value(gender_radios));
let current_activity = Number(radio_value(activity_radios));
let current_height = Number(height.value);
let current_age = Number(age.value);
let current_weight = Number(weight.value);

function bmi_calc(weight, height) {
    let bmi = weight/ (Math.pow((height/100), 2));
    bmi_text.innerHTML = bmi.toFixed(1);
    return bmi.toFixed(1);
}

function bmr_calc(gender, weight, height, age) {
    let bmr ;
    if (gender == 0) {
        bmr = Math.floor(13.7 * weight + 5.0 * height - 6.8 * age + 66);
    }
    else {
       bmr = Math.floor(9.6 * weight + 1.8 * height - 4.7 * age + 655);
    }
    bmr_text.innerHTML = bmr;
    return bmr;
}

function tdee_calc(bmr, activity) {
    const tdee = Math.floor(activity_level[activity] * bmr);
    tdee_text.innerHTML = tdee;
    return tdee
}

function bmr_tdee() {
    const bmr = bmr_calc(current_gender, current_weight, current_height, current_age);
    tdee_calc(bmr, current_activity);
}


function bmr_tdee_bmi() {
    const bmr = bmr_calc(current_gender, current_weight, current_height, current_age);
    tdee_calc(bmr, current_activity);
    bmi_calc(current_weight, current_height);
} 

gender.addEventListener('change', () => {
    current_gender = Number(radio_value(gender_radios));
    bmr_tdee(); 
})

activity.addEventListener('change', () => {
    current_activity = Number(radio_value(activity_radios));
    bmr_tdee();
})

age.addEventListener('input', () => {
    document.getElementById('age-text').innerHTML = age.value;
    current_age = Number(age.value);
    bmr_tdee();
})

height.addEventListener('input', ( ) =>{
    document.getElementById('height-text').innerHTML = height.value;
    current_height = height.value;
    bmr_tdee_bmi();
})

weight.addEventListener('input', ( ) => {
    document.getElementById('weight-text').innerHTML = weight.value;
    current_weight = weight.value;
    bmr_tdee_bmi();
})
