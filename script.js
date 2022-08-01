var question1 = $('#question1')
var question2 = $('#question2')
var question3 = $('#question3')
var formEl1 = $('#test-form1');
var formEl2 = $('#test-form2');
var formEl3 = $('#test-form3');
var answerInputEl = $('#answer-input');
var answerDisplayEl = $('#answer-display');

var startTest = window.confirm("Would you like to begin the test?");

function showQuestion1(){
    if (startTest) {
        question1.css("display","flex");
    }
}
