const question_bank = [ 
    {
        Q: "What is the most popular programming language?",
        A: "Python",
        B: "Java",
        C: "C#",
        D: "Swift",
        Correct:"A"
    },
    {
        Q: "Who is the president of the United States in 2021?",
        A: "Donald Trump",
        B: "Barack Obama",
        C: "Kamala Harris",
        D: "Joe Biden",
        Correct: "D"
    },
    {
        Q: "Which is the financial center with the highest GFCI in the world?",
        A: "London",
        B: "New York City",
        C: "Hong Kong",
        D: "Singapore",
        Correct: "B"
    },
    {
        Q: "When is Association for Computing Machinery (ACM) founded?",
        A: "1941",
        B: "1943",
        C: "1947",
        D: "1949",
        Correct: "C"
    },
    { 
        Q: "Which one is not an european country?",
        A: "Greece",
        B: "Italy",
        C: "Ireland",
        D: "Argentina",
        Correct: "D"
    }
];

let submitbtn = document.getElementById('submit');
let score = 0;
let ordinal = 0;

function loadquestion(question_bank, ordinal) {
    document.getElementById('question-ordinal').innerHTML = ordinal + 1;
    document.getElementById('question').innerHTML = question_bank[ordinal]['Q'];
    document.getElementById('A').innerHTML = question_bank[ordinal]['A'];
    document.getElementById('B').innerHTML = question_bank[ordinal]['B'];
    document.getElementById('C').innerHTML = question_bank[ordinal]['C'];
    document.getElementById('D').innerHTML = question_bank[ordinal]['D'];
    
    let radio = document.getElementsByName('option');
    
    for (let i = 0; i < radio.length; i++) {
        radio[i].checked = false;
    };
}

function check_point_counter(question_bank, ordinal, check = false) {
    let radio = document.getElementsByName('option');
    
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            check = true;
            if ((radio[i].value) == question_bank[ordinal]['Correct']) score++;
        }
    }
    return check;
}


submitbtn.addEventListener("click", () => {
    check = check_point_counter(question_bank, ordinal);
    
    if (check && ordinal < question_bank.length -1) {
        ordinal ++;
        loadquestion(question_bank, ordinal);
    }
    else if (!check) {
        window. alert("Please answer the question!");
    }
    else if (ordinal == question_bank.length -1) {
        result.innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center">
                <h2 >You answered correctly at ${score}/${question_bank.length} questions.</h2>
            </div>`;
        reloadpage.innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center">
                <button onclick="location.reload()">Reload</button>
            </div>`;
    }
});
