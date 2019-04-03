

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

//
var questions = [q1, q2, q3, q4, q5];
//functions

    var timer = setInterval(function() {
  
      var count = parseInt($('#time').html());
      if (count !== 0) {
        $('#time').html(count - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

//init function
    function init () {
    $("button").on('click', nextQuestion)
    }
    //next question
function nextQuestion () {
    for (var i = 0; i < questions.length; i++) {
        var options = '';
    for (var j = 0; j < questions[i].option.length; j++) {
         options += `<li>${questions[i].option[j]}</li>`;
        }    
    $('.questions').html(
        `<div class="boxflex">
    <p id="total-score">Time Remaining:<span id="time">${30}</span></p>
        </div>
        <div class="questions">
          <h4>${questions[i].question}</h4>
          <ul>${options}</ul>
        </div>`)
    }
};

init ()

// start button click to begin

//new screen shows question and timer