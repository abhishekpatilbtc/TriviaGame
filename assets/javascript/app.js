$(document).ready(function () {
    let questionNow = "";
    let choice1 = "";
    let choice2 = "";
    let choice3 = "";
    let choice4 = "";
    let answer = "";
    let right = 0;
    let wrong = 0;
    let accurate = 0;
    let timeLeft = "";
    let selector = 0;
    let questions = [];
    let clock = 10;
    const bootstrapDiv = "<div class='row text-center justify-content-center'><div class='col col-md-8 justify-content-center'>";


    //Questions Array
    function triviabegin() {
        right = 0;
        wrong = 0;
        questions = [
            {
                question: 'What is the capital of United States of America?',
                choice1: 'New York',
                choice2: 'San Francisco',
                choice3: 'Washington',
                choice4: 'Atlanta',
                answer: 'Washington'
            }, {
                question: 'What is the capital of China?',
                choice1: 'Hong Kong',
                choice2: 'Beijing',
                choice3: 'Chongqing',
                choice4: 'Shanghai',
                answer: 'Beijing'
            }, {
                question: 'What is the capital of India?',
                choice1: 'Mumbai',
                choice2: 'New Delhi',
                choice3: 'Chennai',
                choice4: 'Kolkata',
                answer: 'New Delhi'
            }, {
                question: 'What is the capital of United Kingdom?',
                choice1: 'Manchester',
                choice2: 'Liverpool',
                choice3: 'London',
                choice4: 'Glasgow',
                answer: 'London'
            }, {
                question: 'What is the capital of France?',
                choice1: 'Paris',
                choice2: 'Lyon',
                choice3: 'Bordeaux',
                choice4: 'Cannes',
                answer: 'Paris'
            }, {
                question: 'What is the capital of Italy?',
                choice1: 'Rome',
                choice2: 'Venice',
                choice3: 'Florence',
                choice4: 'Naples',
                answer: 'Rome'
            }, {
                question: 'What is the capital of Russia?',
                choice1: 'Saint Petersburg',
                choice2: 'Kazan',
                choice3: 'Moscow',
                choice4: 'Yekaterinburg',
                answer: 'Moscow'
            }, {
                question: 'What is the capital of Japan?',
                choice1: 'Osaka',
                choice2: 'Hiroshima',
                choice3: 'Kyoto',
                choice4: 'Tokyo',
                answer: 'Tokyo'
            }, {
                question: 'What is the capital of Canada?',
                choice1: 'Montreal',
                choice2: 'Toronto',
                choice3: 'Vancouver',
                choice4: 'Victoria',
                answer: 'Toronto'
            }, {
                question: 'What is the capital of Ireland?',
                choice1: 'Dublin',
                choice2: 'Cork',
                choice3: 'Galway',
                choice4: 'Waterford',
                answer: 'Dublin'
            }, {
                question: 'What is the capital of South Africa?',
                choice1: 'Durban',
                choice2: 'Johannesburg',
                choice3: 'Cape Town',
                choice4: 'Port Elizabeth',
                answer: 'Cape Town'
            }, {
                question: 'What is the capital of Argentina?',
                choice1: 'Mendoza',
                choice2: 'Buenos Aires',
                choice3: 'Córdoba',
                choice4: 'Rosario',
                answer: 'Buenos Aires'
            }, {
                question: 'What is the capital of Portugal?',
                choice1: 'Braga',
                choice2: 'Porto',
                choice3: 'Coimbra',
                choice4: 'Lisbon',
                answer: 'Lisbon'
            }, {
                question: 'What is the capital of Saudia Arabia?',
                choice1: 'Mecca',
                choice2: 'Riyadh',
                choice3: 'Medina',
                choice4: 'Jeddah',
                answer: 'Riyadh'
            }, {
                question: 'What is the capital of United Arab Emirates?',
                choice1: 'Abu Dhabi',
                choice2: 'Dubai',
                choice3: 'Ajman',
                choice4: 'Sharjah',
                answer: 'Abu Dhabi'
            },
            {
                question: 'What is the capital of Norway?',
                choice1: 'Bergen',
                choice2: 'Oslo',
                choice3: 'Trondhiem',
                choice4: 'Stavanger',
                answer: 'Oslo'
            },
            {
                question: 'What is the capital of Spain?',
                choice1: 'Seville',
                choice2: 'Barcelona',
                choice3: 'Madrid',
                choice4: 'Toledo',
                answer: 'Madrid'
            },
            {
                question: 'What is the capital of Belgium?',
                choice1: 'Bruges',
                choice2: 'Brussels',
                choice3: 'Charleroi',
                choice4: 'Châtelet',
                answer: 'Brussels'
            }, {
                question: 'What is the capital of New Zealand?',
                choice1: 'Auckland',
                choice2: 'Wellington',
                choice3: 'Christchurch',
                choice4: 'Napier',
                answer: 'Wellington'
            }, {
                question: 'What is the capital of Finland?',
                choice1: 'Oulu',
                choice2: 'Tampere',
                choice3: 'Turku',
                choice4: 'Helsinki',
                answer: 'Helsinki'
            }, {
                question: 'What is the capital of Netherlands?',
                choice1: 'Utrecht',
                choice2: 'Rotterdam',
                choice3: 'Groningen',
                choice4: 'Amsterdam',
                answer: 'Amsterdam'
            }, {
                question: 'What is the capital of Germany?',
                choice1: 'Berlin',
                choice2: 'Munich',
                choice3: 'Groningen',
                choice4: 'Frankfurt',
                answer: 'Berlin'
            }, {
                question: 'What is the capital of Sweden?',
                choice1: 'Malmö',
                choice2: 'Helsingborg',
                choice3: 'Stockholm',
                choice4: 'Gothenburg',
                answer: 'Stockholm'
            }, {
                question: 'What is the capital of Republic of China?',
                choice1: 'Beijing',
                choice2: 'Kaohsiung',
                choice3: 'Taipei',
                choice4: 'Hsinchu',
                answer: 'Taipei'
            }, {
                question: 'What is the capital of Georgia?',
                choice1: 'Gori',
                choice2: 'Tbilisi',
                choice3: 'Kutaisi',
                choice4: 'Batumi',
                answer: 'Tbilisi'
            }, {
                question: 'What is the capital of Mongolia?',
                choice1: 'Erdenet',
                choice2: 'Darkhan',
                choice3: 'Ulaanbaatar',
                choice4: 'Ulaangom',
                answer: 'Ulaanbaatar'
            }, {
                question: 'What is the capital of Egypt?',
                choice1: 'Alexandria',
                choice2: 'Giza',
                choice3: 'Memphis',
                choice4: 'Cairo',
                answer: 'Cairo'
            }, {
                question: 'What is the capital of Philippines?',
                choice1: 'Pasay',
                choice2: 'San Juan',
                choice3: 'Manila',
                choice4: 'Cebu City',
                answer: 'Manila'
            }, {
                question: 'What is the capital of Vietnam?',
                choice1: 'Ho Chi Minh',
                choice2: 'Hanoi',
                choice3: 'Hai Phong',
                choice4: 'Bien Hoa',
                answer: 'Hanoi'
            }, {
                question: 'What is the capital of Colombia?',
                choice1: 'Cartagena',
                choice2: 'Medellin',
                choice3: 'Cali',
                choice4: 'Bogotá',
                answer: 'Bogotá'
            }, {
                question: 'What is the capital of Kazakhstan?',
                choice1: 'Astana',
                choice2: 'Almaty',
                choice3: 'Nur-Sultan',
                choice4: 'Shymkent',
                answer: 'Nur-Sultan'
            },
        ];
    }



    //Next question
    function nextquestion() {

        if (questions.length === 0) {
            clearInterval(timeLeft);
            triviaEnd();
        } else {

            clearInterval(timeLeft);
            //Declare constiables
            clock = 30;
            selector = Math.floor(questions.length * Math.random());
            questionNow = questions[selector].question;
            choice1 = questions[selector].choice1;
            choice2 = questions[selector].choice2;
            choice3 = questions[selector].choice3;
            choice4 = questions[selector].choice4;
            answer = questions[selector].answer;

            //Declare in HTML lines
            $(".questions").html("");
            $(".questions").append(bootstrapDiv + "<h1 id='timeLeft' style='color: #1d8fa5;'></h1></div></div>");
            $(".questions").append(bootstrapDiv + "<h2 id='question' style='margin-bottom: 20px;'></h2></div></div>");
            $(".questions").append(bootstrapDiv + "<button type='button' class='btn btn-primary' id='choice1'></button></div></div>");
            $(".questions").append(bootstrapDiv + "<button type='button' class='btn btn-primary' id='choice2'></button></div></div>");
            $(".questions").append(bootstrapDiv + "<button type='button' class='btn btn-primary' id='choice3'></button></div></div>");
            $(".questions").append(bootstrapDiv + "<button type='button' class='btn btn-primary' id='choice4'></button></div></div>");

            //Add consts to HTML lines using Id
            $("#timeLeft").text(clock)
            $("#question").text(questionNow);
            $("#choice1").text(choice1);
            $("#choice2").text(choice2);
            $("#choice3").text(choice3);
            $("#choice4").text(choice4);

            //Event Handler
            $("#choice1").click(function () {
                clearInterval(timeLeft);
                setTimeout(checkChoice(choice1), 200)
            });

            $("#choice2").click(function () {
                clearInterval(timeLeft);
                setTimeout(checkChoice(choice2), 200)
            });

            $("#choice3").click(function () {
                clearInterval(timeLeft);
                setTimeout(checkChoice(choice3), 200)
            });
            $("#choice4").click(function () {
                clearInterval(timeLeft);
                setTimeout(checkChoice(choice4, 200))
            });
            clockrunning = true;
            timeLeft = setInterval(beginRound, 1000);

        }
    };

    function checkChoice(selection) {
        // ===== rightanswer =====
        if (selection === answer) {
            right++;
            // clear the questions to show whether the player got the question right or wrong.
            $(".questions").html("");
            // show that the user got the rightanswer.
            $(".questions").html(bootstrapDiv + "<h3 style='color: #1a8200;'>That's right!</h3></div></div>");
            // remove the current question from questions
            questions.splice(selector, 1);
            // wait a few seconds before showing the next question.
            setTimeout(nextquestion, 1500);
        }
        // ===== wronganswer =====
        else if (selection !== answer) {
            wrong++;
            // If clock runs out, clear the questions to show the right answer
            $(".questions").html("");
            // show that the user got the the wrong answer and show them the right one.
            $(".questions").html(bootstrapDiv + "<h3 style='color: #b70000;'>Oops! That's incorrect!</h3><h3>The correct answer was:</h3>" + "<h3 style='color: #1d8fa5;'>" + answer + "</h3>" + "</div></div>");
            // remove the current question from questions
            questions.splice(selector, 1);
            // wait a few seconds before showing the next question.
            setTimeout(nextquestion, 2500);
        }
    }

    function beginRound() {

        if (clockrunning === true) {
            clock--;
            $("#timeLeft").text(clock);

            // clock Runs out Scenario
            if (clock === 0) {
                wrong++; // Player did not answer question fast enough; increase their wrong score.
                clockrunning = false; // turn the clockr off.
                $(".questions").html("");
                // show that the user got the the wrong answer and show them the right one.
                $(".questions").html(bootstrapDiv + "<h3 style='color: #b70000;'>Time's up!</h3><h3>The right answer was:" + "<h3 style='color: #1d8fa5;'>" + answer + "</h3></div></div>");
                // remove the current question from questions
                questions.splice(selector, 1);
                // wait a few seconds before showing the next question.
                setTimeout(nextquestion, 3000);
            }
        }
    }

    function triviaEnd() {
        clearInterval(timeLeft);
        // calculate percentage 
        accurate = Math.round((right / (right + wrong)) * 100);
        // clear questions before re-establishing format
        $(".questions").html("");
        // Rebuid the questions with each new question because we clear it to show if the user was right or wrong after each guess
        $(".questions").append(bootstrapDiv + "<h2>The trivia has ended</h2></div></div>");
        $(".questions").append(bootstrapDiv + "<h3 style='color: #1d8fa5;'>Let's see how you did.</h3></div></div>");
        $(".questions").append(bootstrapDiv + "<h4>Right Answers: " + right + "</h4></div></div>");
        $(".questions").append(bootstrapDiv + "<h4>Wrong Answers: " + wrong + "</h4></div></div>");
        $(".questions").append(bootstrapDiv + "<h3 style='color: #1a8200;'>" + accurate + "%</h3></div></div>");
        $(".questions").append(bootstrapDiv + "<button type='button' id='start' class='btn btn-success'>Play Trivia Again!</button></div></div>");
        // Allow user to begin trivia over by clicking the begin button
        $("#start").click(function () {
            triviabegin();
            $(".questions").html(""); // Clear the trivia over screen
            $("#start").hide(); // After the button is hit, hide the button 
            nextquestion();
        })
    }

    //init function

    $("#begin").on('click', function () {
        triviabegin();
        nextquestion();
    })



});
