$(document).ready(function () {
    var questionNow = "";
    var correct = 0;
    var incorrect = 0;
    var accuracy = 0;
    var timeRemaining = "";
    var selector = 0;
    var bootstrapDiv = "<div class='row text-center justify-content-center'><div class='col col-md-8 justify-content-center'>";

    var q1 = {
        question: 'What is the capital of United States of America?',
        option1: 'New York',
        option2: 'San Francisco',
        option3: 'Washington',
        option4: 'Atlanta',
        answer: 'Washington'
    };

    var q2 = {
        question: 'What is the capital of China?',
        option1: 'Hong Kong',
        option2: 'Beijing',
        option3: 'Chongqing',
        option4: 'Shanghai',
        answer: 'Beijing'
    };

    var q3 = {
        question: 'What is the capital of India?',
        option1: 'Mumbai',
        option2: 'New Delhi',
        option3: 'Chennai',
        option4: 'Kolkata',
        answer: 'New Delhi'
    };

    var q4 = {
        question: 'What is the capital of United Kingdom?',
        option1: 'Manchester',
        option2: 'Liverpool',
        option3: 'London',
        option4: 'Glasgow',
        answer: 'London'
    };

    var q5 = {
        question: 'What is the capital of France?',
        option1: 'Paris',
        option2: 'Lyon',
        option3: 'Bordeaux',
        option4: 'Cannes',
        answer: 'Paris'
    };

    //Question Array
    var questions = [q1, q2, q3, q4, q5];
    //Timer Function
    var timer = setInterval(function () {

        var count = parseInt($('#time').html());
        if (count !== 0) {
            $('#time').html(count - 1);
        } else {
            nextQuestion()
        }
    }, 1000);


    //Next question
    function nextQuestion() {
        //Declare variables
        var clock = 30;
        selector = Math.floor(questions.length * Math.random());
        questionNow = questions[selector].question
        option1 = questions[selector].option1;
        option2 = questions[selector].option2;
        option3 = questions[selector].option3;
        option4 = questions[selector].option4;
        answer = questions[selector].answer;

        //Declare in HTML lines
        $(".questions").html("");
        $(".questions").append(bootstrapDiv + "<h1 id='timeRemaining' style='color: #1d8fa5;'></h1></div></div>");
        $(".questions").append(bootstrapDiv + "<h2 id='question' style='margin-bottom: 20px;'></h2></div></div>");
        $(".questions").append(bootstrapDiv + "<button type='button' class='btn btn-primary' id='option1'></button></div></div>");
        $(".questions").append(bootstrapDiv + "<button type='button' class='btn btn-primary' id='option2'></button></div></div>");
        $(".questions").append(bootstrapDiv + "<button type='button' class='btn btn-primary' id='option3'></button></div></div>");
        $(".questions").append(bootstrapDiv + "<button type='button' class='btn btn-primary' id='option4'></button></div></div>");

        //Add vars to HTML lines using Id
        $("#timeremaining").text(questionNow)
        $("#option1").text(option1);
        $("option2").text(option2);
        $("#option3").text(option3);
        $("#option4").text(option4);

        //Event Handler
        $("#option1").click(function () {
            setTimeout(checkAnswer(option1), 200)
        });

        $("#option2").click(function () {
            setTimeout(checkAnswer(option2), 200)
        });

        $("#option3").click(function () {
            setTimeout(checkAnswer(option3), 200)
        });
        $("#option4").click(function () {
            setTimeout(checkAnswer(option4, 200))
        });
        clockrunning = true; 
        timeRemaining = setInterval(startRound, 1000); 

    };


    //init function
    function init() {
        $("button").on('click', nextQuestion)
    }
    init()

});
