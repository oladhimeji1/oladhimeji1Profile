function  getBotResponse(input) {
    // rock paper scissors
    // input.toLowerCase(); 
    // var input = $('#textInput').val().toLowerCase();
    if ( input == "hi"){
        // alert(input);
        return "Hi";
    }
    else if ( input == "paper"){
        return "scissors";
    }
    else if ( input == "scissors"){
        return "rock";
    }
     
    // Simple responses
    if ( input == "hello"){
        return "Hello there!";
    }
    else if ( input == "goodbye"){
        return "Talk to you later!";
    }
    else {
       return "Try asking something else!"
    }
    
}