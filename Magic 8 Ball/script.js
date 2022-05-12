alert("Hello, is it me that you're looking for?");
// Function
function generate_random(max_number) {
// Generates a random number from 0 to max_number.
    return Math.round(Math.random(3)*max_number);
}

    let button = document.querySelector("button");
    let answer = document.getElementById("answer");
    // console.log(answer);
//Add a click event to the button 
    //console.log(answer);
    button.addEventListener("click", function(){
//alert("hellloo");

    
//Your procedure goes here:
    //0 -> "Yes, of course!"
    //1 -> "Negative, sorry!"
    //2 -> "You betcha"
    //3 -> "it's possible"

    let randomNumber = generate_random(3);

    let answerText = "";
    if(randomNumber == 0) {
        answerText = "Yes, of course!";
    }
    else if(randomNumber == 1) {
        answerText = "Negative, sorry!";
    }
    else if(randomNumber == 2) {
        answerText = "You betcha";
    }
    else {
        answerText = "it's possible";
    }
console.log(answerText);
    answer.innerHTML = answerText;
});





