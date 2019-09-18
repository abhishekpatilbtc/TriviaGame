$(document).ready(function () {
    var questionNow = "";
    var option1 = "";
    var option2 = "";
    var option3 = "";
    var option4 = "";
    var answer = "";
    var correct = 0;
    var incorrect = 0;
    var accuracy = 0;
    var timeRemaining = "";
    var selector = 0;
    var questions = [];
    var time = 10;
    var bootstrapDiv = "<div class='row text-center justify-content-center'><div class='col col-md-8 justify-content-center'>";


    //Question Array
    function gameStart() {
        correct = 0;
        incorrect = 0;
        questions = [
            {
                question: 'What is the capital of United States of America?',
                option1: 'New York',
                option2: 'San Francisco',
                option3: 'Washington',
                option4: 'Atlanta',
                answer: 'Washington'
            }, {
                question: 'What is the capital of Peoples Republic of China?',
                option1: 'Hong Kong',
                option2: 'Beijing',
                option3: 'Chongqing',
                option4: 'Shanghai',
                answer: 'Beijing'
            }, {
                question: 'What is the capital of India?',
                option1: 'Mumbai',
                option2: 'New Delhi',
                option3: 'Chennai',
                option4: 'Kolkata',
                answer: 'New Delhi'
            }, {
                question: 'What is the capital of United Kingdom?',
                option1: 'Manchester',
                option2: 'Liverpool',
                option3: 'London',
                option4: 'Glasgow',
                answer: 'London'
            }, {
                question: 'What is the capital of France?',
                option1: 'Paris',
                option2: 'Lyon',
                option3: 'Bordeaux',
                option4: 'Cannes',
                answer: 'Paris'
            },{
                question: 'What is the capital of Italy?',
                option1: 'Rome',
                option2: 'Venice',
                option3: 'Florence',
                option4: 'Naples',
                answer: 'Rome'
            },{
                question: 'What is the capital of Russia?',
                option1: 'Saint Petersburg',
                option2: 'Kazan',
                option3: 'Moscow',
                option4: 'Yekaterinburg',
                answer: 'Moscow'
            },{
                question: 'What is the capital of Japan?',
                option1: 'Osaka',
                option2: 'Hiroshima',
                option3: 'Kyoto',
                option4: 'Tokyo',
                answer: 'Tokyo'
            },{
                question: 'What is the capital of Canada?',
                option1: 'Montreal',
                option2: 'Toronto',
                option3: 'Vancouver',
                option4: 'Victoria',
                answer: 'Toronto'
            },{
                question: 'What is the capital of Ireland?',
                option1: 'Dublin',
                option2: 'Cork',
                option3: 'Galway',
                option4: 'Waterford',
                answer: 'Dublin'
            },{
                question: 'What is the capital of South Africa?',
                option1: 'Durban',
                option2: 'Johannesburg',
                option3: 'Cape Town',
                option4: 'Port Elizabeth',
                answer: 'Cape Town'
            },{
                question: 'What is the capital of Argentina?',
                option1: 'Mendoza',
                option2: 'Buenos Aires',
                option3: 'Córdoba',
                option4: 'Rosario',
                answer: 'Buenos Aires'
            },{
                question: 'What is the capital of Portugal?',
                option1: 'Braga',
                option2: 'Porto',
                option3: 'Coimbra',
                option4: 'Rosario',
                answer: 'Lisbon'
            },{
                question: 'What is the capital of Saudia Arabia?',
                option1: 'Mecca',
                option2: 'Media',
                option3: 'Medina',
                option4: 'Jeddah',
                answer: 'Riyadh'
            },{
                question: 'What is the capital of U.A.E?',
                option1: 'Abu Dhabi',
                option2: 'Dubai',
                option3: 'Ajman',
                option4: 'Sharjah',
                answer: 'Abu Dhabi'
            },
            {
                question: 'What is the capital of Norway?',
                option1: 'Bergen',
                option2: 'Oslo',
                option3: 'Trondhiem',
                option4: 'Stavanger',
                answer: 'Oslo'
            },
            {
                question: 'What is the capital of Spain?',
                option1: 'Seville',
                option2: 'Barcelona',
                option3: 'Madrid',
                option4: 'Toledo',
                answer: 'Madrid'
            },
            {
                question: 'What is the capital of Belgium?',
                option1: 'Bruges',
                option2: 'Brussels',
                option3: 'Charleroi',
                option4: 'Châtelet',
                answer: 'Brussels'
            },{
                question: 'What is the capital of New Zealand?',
                option1: 'Auckland',
                option2: 'Wellington',
                option3: 'Christchurch',
                option4: 'Napier',
                answer: 'Wellington'
            },{
                question: 'What is the capital of Finland?',
                option1: 'Oulu',
                option2: 'Tampere',
                option3: 'Turku',
                option4: 'Helsinki',
                answer: 'Helsinki'
            },{
                question: 'What is the capital of Netherlands?',
                option1: 'Utrecht',
                option2: 'Rotterdam',
                option3: 'Groningen',
                option4: 'Amsterdam',
                answer: 'Amsterdam'
            },{
                question: 'What is the capital of Germany?',
                option1: 'Berlin',
                option2: 'Munich',
                option3: 'Groningen',
                option4: 'Frankfurt',
                answer: 'Berlin'
            },{
                question: 'What is the capital of Sweden?',
                option1: 'Malmö',
                option2: 'Munich',
                option3: 'Stockholm',
                option4: 'Gothenburg',
                answer: 'Stockholm'
            },{
                question: 'What is the capital of Republic of China?',
                option1: 'Beijing',
                option2: 'Kaohsiung',
                option3: 'Taipei',
                option4: 'Hsinchu',
                answer: 'Taipei'
            },{
                question: 'What is the capital of Georgia?',
                option1: 'Gori',
                option2: 'Tbilisi',
                option3: 'Kutaisi',
                option4: 'Batumi',
                answer: 'Tbilisi'
            },{
                question: 'What is the capital of Mongolia?',
                option1: 'Erdenet',
                option2: 'Darkhan',
                option3: 'Ulaanbaatar',
                option4: 'Ulaangom',
                answer: 'Ulaanbaatar'
            },{
                question: 'What is the capital of Egypt?',
                option1: 'Alexandria',
                option2: 'Giza',
                option3: 'Memphis',
                option4: 'Cairo',
                answer: 'Cairo'
            },{
                question: 'What is the capital of Philippines?',
                option1: 'Pasay',
                option2: 'San Juan',
                option3: 'Manila',
                option4: 'Cebu City',
                answer: 'Manila'
            },{
                question: 'What is the capital of Vietnam?',
                option1: 'Ho Chi Minh',
                option2: 'Hanoi',
                option3: 'Hai Phong',
                option4: 'Bien Hoa',
                answer: 'Hanoi'
            },{
                question: 'What is the capital of Colombia?',
                option1: 'Cartagena',
                option2: 'Medellin',
                option3: 'Cali',
                option4: 'Bogotá',
                answer: 'Bogotá'
            },
        ];
    }



    //Next question
    function nextQuestion() {

        if (questions.length === 0) {
            clearInterval(timeRemaining);
            gameEnd();
        } else {

            clearInterval(timeRemaining);
            //Declare variables
            time = 30;
            selector = Math.floor(questions.length * Math.random());
            questionNow = questions[selector].question;
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
            $("#timeRemaining").text(time)
            $("#question").text(questionNow);
            $("#option1").text(option1);
            $("#option2").text(option2);
            $("#option3").text(option3);
            $("#option4").text(option4);

            //Event Handler
            $("#option1").click(function () {
                clearInterval(timeRemaining);
                setTimeout(checkAnswer(option1), 200)
            });

            $("#option2").click(function () {
                clearInterval(timeRemaining);
                setTimeout(checkAnswer(option2), 200)
            });

            $("#option3").click(function () {
                clearInterval(timeRemaining);
                setTimeout(checkAnswer(option3), 200)
            });
            $("#option4").click(function () {
                clearInterval(timeRemaining);
                setTimeout(checkAnswer(option4, 200))
            });
            clockrunning = true;
            timeRemaining = setInterval(startRound, 1000);

        }
    };

    function checkAnswer(selection) {
        // ===== CORRECT ANSWER =====
        if (selection === answer) {
            correct++;
            // clear the content area to show whether the player got the question right or wrong.
            $(".questions").html("");
            // show that the user got the correct answer.
            $(".questions").html(bootstrapDiv + "<h3 style='color: #1a8200;'>Correct!</h3></div></div>");
            // remove the current question from questions
            questions.splice(selector, 1);
            // wait a few seconds before showing the next question.
            setTimeout(nextQuestion, 1500);
        }
        // ===== INCORRECT ANSWER =====
        else if (selection !== answer) {
            incorrect++;
            // If time runs out, clear the content area to show the correct answer
            $(".questions").html("");
            // show that the user got the the wrong answer and show them the correct one.
            $(".questions").html(bootstrapDiv + "<h3 style='color: #b70000;'>Incorrect!</h3><h3>The correct answer was:</h3>" + "<h3 style='color: #1d8fa5;'>" + answer + "</h3>" + "</div></div>");
            // remove the current question from questions
            questions.splice(selector, 1);
            // wait a few seconds before showing the next question.
            setTimeout(nextQuestion, 2500);
        }
    }

    function startRound() {

        if (clockrunning === true) {
            time--;
            $("#timeRemaining").text(time);

            // Time Runs out Scenario
            if (time === 0) {
                incorrect++; // Player did not answer question fast enough; increase their incorrect score.
                clockrunning = false; // turn the timer off.
                $(".questions").html("");
                // show that the user got the the wrong answer and show them the correct one.
                $(".questions").html(bootstrapDiv + "<h3 style='color: #b70000;'>Time's up!</h3><h3>The right answer was:" + "<h3 style='color: #1d8fa5;'>" + answer + "</h3></div></div>");
                // remove the current question from questions
                questions.splice(selector, 1);
                // wait a few seconds before showing the next question.
                setTimeout(nextQuestion, 3000);
            }
        }
    }

    function gameEnd() {
        clearInterval(timeRemaining);
        // calculate percentage correct
        accuracy = Math.round((correct / (correct + incorrect)) * 100);
        // clear content area before re-establishing format.
        $(".questions").html("");
        // Rebuid the content area with each new question because we clear it to show if the user was right or wrong after each guess.
        $(".questions").append(bootstrapDiv + "<h2>The game has ended!</h2></div></div>");
        $(".questions").append(bootstrapDiv + "<h3 style='color: #1d8fa5;'>Let's see how you did.</h3></div></div>");
        $(".questions").append(bootstrapDiv + "<h4>Correct Answers: " + correct + "</h4></div></div>");
        $(".questions").append(bootstrapDiv + "<h4>Incorrect Answers: " + incorrect + "</h4></div></div>");
        $(".questions").append(bootstrapDiv + "<h3 style='color: #1a8200;'>" + accuracy + "%</h3></div></div>");
        $(".questions").append(bootstrapDiv + "<button type='button' id='start' class='btn btn-success'>Start Game Over</button></div></div>");
        // Allow user to start game over by clicking the start button
        $("#start").click(function () {
            gameStart();
            $(".questions").html(""); // Clear the game over screen
            $("#start").hide(); // After the button is hit, hide the button 
            nextQuestion();
        })
    }

    //init function

    $("#start").on('click', function () {
        gameStart();
        nextQuestion();
    })



});
