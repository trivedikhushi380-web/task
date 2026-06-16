let playAgain = true;

while (playAgain) 
    {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    let attempts = 0;
    let guessedCorrectly = false;

    alert("Welcome to Number Guessing Game!");
    alert("You have only 10 attempts to guess the number between 1 and 100.");

    while (attempts < 10 && !guessedCorrectly) 
        {

        let input = prompt(
            "Attempt " + (attempts + 1) +
            "/10\nEnter a number between 1 and 100:"
        );

        if (input === null) 
        {
            alert("Please enter a valid number.");
            continue;
        }

        let guess = Number(input);
        if (isNaN(guess)) 
        {
            alert("Invalid input! Please enter a valid number.");
            continue;
        }

        if (guess < 1 || guess > 100) 
        {
            alert("Please enter a number between 1 and 100.");
            continue;
        }

        attempts++;
        if (guess > randomNumber)
        {
            alert("Too High!");
        }
        else if (guess < randomNumber) 
        {
            alert("Too Low!");
        }
        else {
            guessedCorrectly = true;

            alert(
                "Congratulations! You Win!\n" +
                "You guessed the number in " +
                attempts + " attempt(s)."
            );
        }
    }

    if (!guessedCorrectly) 
    {
        alert(
            "Game Over!\n" +
            "The correct number was: " + randomNumber
        );
    }

    let choice = prompt(
        "Do you want to play again?\nType Yes or No"
    );

    if (choice === null) 
    {
        playAgain = false;
    }
    else if (choice.toLowerCase() === "yes") 
    {
        playAgain = true;
    }
    else 
    {
        playAgain = false;
    }
}

alert("Thank You for Playing!");