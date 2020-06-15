const character = document.getElementById('game-character');
const block = document.getElementById('game-block');
const game = document.querySelector('html');
const scoreValue = document.getElementById('scoreboard')

let score = 0;

//Add the Animation Class
function jump(){
    //Only add the animate class if it hasn't already been added
    if(character.classList != 'animate'){
        character.classList.add('animate')
    }
    
    //Keep a Score of Successful Jumps
    score++;
    scoreValue.textContent = score;

    //Remove the animate class after short delay
    setTimeout( function() {
        character.classList.remove('animate')
    }, 500)
}

//When game is clicked, character jump
game.addEventListener('click', jump);



//Determine if block and character are hitting each outher by getting top position of character and left position of block
const lostGame = setInterval(function(){
    //getComputerStyle - returns an object containing the values of all CSS properties of an element (checking for the top)
    
    let characterTop = 
        parseInt(window.getComputedStyle(character).getPropertyValue('top'));  //retrieve number not string

    let blockLeft = 
        parseInt(window.getComputedStyle(block).getPropertyValue('left'));  //retrieve number not string

    //Check if block is directly on character
    if(blockLeft < 20 && blockLeft > 0 && characterTop >= 130) { /* if block's left is between 0 - 20px, hitting the character --- character needs to jump more than 20px */
        block.style.animation = 'none'
        block.style.display = 'none';
        scoreValue.textContent = '0';
        alert('You Lose!')
    }
}, 10)  // <-- 10millisecs


// block's height is 20px
// character's top is currently at 150px
// character needs to jump at least 20px to make it over the block
// if the character is 131 it hits the block (150 - 131 = 19)

