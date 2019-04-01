
var q1 = {
    question:'What is the capital of United States of America?',
    option: ['New York', 'San Francisco', 'Washington', 'Atlanta'],
    answer: 'Washington',
};

var q2 = {
    question:'What is the capital of China?',
    option: ['Hong Kong', 'Beijing', 'Chongqing', 'Shanghai'],
    answer: 'Beijing',
};

var q3 = {
    question:'What is the capital of India?',
    option: ['Mumbai', 'New Delhi', 'Chennai', 'Kolkata'],
    answer: 'New Delhi',
};

var q4 = {
    question:'What is the capital of United Kingdom?',
    option: ['Manchester', 'Liverpool', 'London', 'Glasgow'],
    answer: 'London',
};

var q5 = {
    question:'What is the capital of France?',
    option: ['Paris', 'Lyon', 'Bordeaux', 'Cannes'],
    answer: 'Paris',
};

var questions = [q1, q2, q3, q4, q5]

//functions
function nextQuestion () {
//conditions
    for (var i=0; i<questions.length; i++) {
    var options ='';

        for (var j = 0; j < questions[i].option.length; j++) {
        options += '<li>' + questions[i].option[j] + '</li>';
        }
    
        $('#question').html(
        `<div>
          <h4>${questions[i].question}</h4>
          <ul>
            ${options}
          </ul>
        </div>`
        );
    } 

};

$('#list').on('click', nextQuestion)
