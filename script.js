// function to verify quiz answers
function checkAnswers() {
    let score = 0;
    let total = 5;

    //corect answers
    let answers = {
        q1: "ticketing",
        q2: "b",
        q3:"a",
        q4:"b",
        q5: ["a","c"]

    };

    let resultsHTML = "";

    // Question 1 (fill in the blank)
    let q1 = document.getElementById("q1").value.toLowerCase().trim();
    if (q1 === answers.q1) {
        score++;
        resultsHTML+="<p style ='color:green;'>Q1 Correct</p>";
    } else {
        resultsHTML += "<p style='color:red;'>Q1 Incorrect(Answer: ticketing)</p>";
    }

    // Question 2
    let q2 =document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === answers.q2) {
        score++;
        resultsHTML += "<p style='color:green;'>Q2 Correct</p>";
    } else {
        resultsHTML += "<p style='color:red;'>Q2 Incorrect (Answer: User Support)</p>"
    }

    // Question 3
    let q3 =document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === answers.q3) {
        score++;
        resultsHTML += "<p style='color:green;'>Q3 Correct</p>";
    } else {
        resultsHTML += "<p style='color:red;'>Q3 Incorrect (Answer: Service Level Agreement)</p>"
    }

    // Question 4
    let q4 =document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === answers.q4) {
        score++;
        resultsHTML += "<p style='color:green;'>Q4 Correct</p>";
    } else {
        resultsHTML += "<p style='color:red;'>Q4 Incorrect (Answer: User Submits request)</p>"
    }

    // Question 5
    let q5 =document.querySelectorAll('input[name="q5"]:checked');
    let correctCount = 0;
    //loop through checkboxes
    q5.forEach(function(box){
        if (box.value =="a" || box.value === "c"){
            correctCount++;
        }
    });

    //Verify that the correct answers were selected
    if (correctCount === 2 && q5.length ===2) {
        score++;
        resultsHTML += "<p style='color:green;'>Q5 Correct</p>";
    } else {
        resultsHTML += "<p style='color:red;'>Q5 Incorrect (Answers: Troubleshooting, User support)</p>"
    }

    //Final results
    let resultText = score >= 3? "PASS" : "FAIL";
    let color = score >= 3 ? "green" : "red";

    resultsHTML += "<h2 style = 'color:" + color +";>'Results: " + resultText + "</h2>";
    resultsHTML +="<h3>Total Score: " + score + "/" + total + "</h3>";


    document.getElementById("results").innerHTML = resultsHTML;
}

 //Reset Quiz function
 function resetQuiz(){
    //reset form inputs
    document.getElementById("quizForm").reset();

    // clear results
    document.getElementById("results").innerHTML= "";
 }