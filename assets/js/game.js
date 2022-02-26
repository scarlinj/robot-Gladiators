var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// function to generate a random numeric value
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1)) + min;

    return value;
};
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = randomNumber;
var enemyAttack = 12;


console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log("You have " + playerMoney + " money.");



var start = function (playerName) {
    startGame()
}


// function to end the entire game
var endGame = function () {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
        console.log("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var fight = function (enemyName) {

    // repeat and execute as long as the enemy-robot is alive 
    while (playerHealth > 0 && enemyHealth > 0) {

        // ask if player would like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        // console.log(promptFight);

        // if player chooses to skip, confirm and stop the fight
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. You lost 10 money.  Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("You lost 10 money.")
                console.log("playerMoney", playerMoney);
                break;
            }
        }
        // if no (false), ask question again by running fight() again
        // else fight();
        // remove enemy's health by subtracting the amount set in the playerAttack variable

        // enemyHealth = Math.max(0, enemyHealth - playerAttack);


        // generate random damage value based on player's attack power
        var damage = randomNumber(playerAttack - 3, playerAttack);

        enemyHealth = Math.max(0, enemyHealth - damage);

        console.log(
            playerName + ' attacked ' + enemyName + ' for ' + damage + ' damage. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + ' has died!');

            // award player money for winning
            window.alert('You earned 20 money!');
            console.log('You earned 20 money!')
            playerMoney = playerMoney + 20;

            // leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
        }

        // remove players's health by subtracting the amount set in the enemyAttack variable
        // playerHealth = Math.max(0, playerHealth - enemyAttack);
        // add random damage funcitonality
        var damage = randomNumber(enemyAttack - 3, enemyAttack);

        playerHealth = Math.max(0, playerHealth - damage);
        console.log(
            enemyName + ' attacked ' + playerName + 'for ' + damage + ' damage. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
        );

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + ' has died!');
            // leave while() loop if player is dead
            break;
        } else {
            window.alert(playerName + ' still has ' + playerHealth + ' health left.');
        }
    }
};

// // if player choses to fight, then fight
// if (promptFight === "fight" || promptFight === "FIGHT") {
//     // remove enemy's health by subtracting the amount set in the playerAttack variable
//     enemyHealth = enemyHealth - playerAttack;
//     console.log(
//         playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
//     );

//     // check enemy's health
//     if (enemyHealth <= 0) {
//         window.alert(enemyName + " has died!");
//         break;
//     } else {
//         window.alert(enemyName + " still has " + enemyHealth + " health left.");
//     }

//     // remove player's health by subtracting the amount set in the enemyAttack variable
//     playerHealth = playerHealth - enemyAttack;
//     console.log(
//         enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
//     );

//     // check player's health
//     if (playerHealth <= 0) {
//         window.alert(playerName + " has died!");
//         console.log(playerName + " has died.");
//         break;
//     } else {
//         window.alert(playerName + " still has " + playerHealth + " health left.");
//     }

// }


// fight each enemy robot by looping over them and fighting them one at a time
// function to start a new game

var startGame = function () {

    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        // check to see if the value of the playerHealth variable is greater than 0
        if (playerHealth > 0) {
            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];

            // reset enemyHealth before starting new fight
            enemyHealth = randomNumber(40, 60);

            randomNumber = function (min, max) {
                var value = Math.floor(Math.random() * (max - min + 1) + min);

                return value;
            };

            // use debugger to pause script from running and check what's going on at that moment in the code
            // debugger;

            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);

            // if player is still alive and not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                //ask if player wants to use the store before the next round
                var storeConfirm = window.confirm("The fight is over.  Visit the store before your next fight?");

                // if yes, take player to store() function
                if (storeConfirm) {
                    shop();
                }
            }
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
        if (playerHealth === 0) {
            console.log(playerName + " has died.  Game over.");
        } else {
            // console.log("This will run instead. Check if health is not 0.");
        }

        // You can also log multiple values at once like this
        console.log(playerName, playerAttack, playerHealth);


        // console.log(enemyNames[i]);
        // console.log(i);
        // console.log(enemyNames[i] + " is at " + i + " index");
    }

    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
};


var shop = function () {
    console.log("entered the shop");
    console.log("You have " + playerMoney + " money.")
    // ask player what they would like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop?  Please enter 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    // use switch to carry out action
    switch (shopOptionPrompt) {
        case "refill": //new case
        case "REFILL":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 money.");

                // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            } else {
                window.alert("You don't have enough money.");
            }
            shop();

            break;
        case "upgrade": // new case
        case "UPGRADE":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 money.");

                // increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            } else {
                window.alert("You don't have enough money.");
            }
            shop();
            break;

        case "leave": // new case
        case "LEAVE":
            window.alert("Leaving the store.");

            // do nothing, so function will end
            break;

        default:
            window.alert("You did not pick a valid option. Try again.");

            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
};

// start the game when the page loads
startGame();