let isGameRunning = true
const incomePerTool = [5, 50, 100, 250]
const intervals = [5, 25, 250, 500, 1000] // intervals at which the player can upgrade
const tools = ['Upgrade1', 'Upgrade2', 'Upgrade3', 'Upgrade3'] // contains the names of the tools 

// Object that holds the player stats
const playerStats = {
    currentMoney: 0, // Variable used to stor the current ammount of money the player has
    incomePerRun: 0,
    currentTool: null
}

// Function that sets the players tool based off the parameter given
function setTool(tool){
    playerStats.currentTool = tool
}
// function that sets the players income based off the parameter given
function setIncome(newIncome){
    playerStats.incomePerRun = newIncome
}

// Sets the starting tool to teeth ans income to 1
setTool('Basic')
setIncome(1)

// Gameplay Loop
while(isGameRunning){
// Increases the ammount of money the player has when this code runs
    playerStats.currentMoney += playerStats.incomePerRun
    console.log(playerStats.currentMoney)
// Core Game Loop Logic
// Checks to see if the player has reached the current Interval by looking at the first value in the array
    if (intervals.length === 1 && tools.length === 0){
        alert("YOU WIN")
        isGameRunning = false
        }
    else if (playerStats.currentMoney >= intervals[0]){
        let playerInput = prompt(`Current tool: ${playerStats.currentTool}\nNext Avalible Upgrade: ${tools[0]}\nInput A Selection`)
        console.log(`Interval ${intervals[0]} Reached`) // Debug to check which interval th program reaches
        if (playerInput == "Upgrade"){
            setTool(tools[0]) // calls the setTools function to set the players tool to the first tool in the array
            tools.shift() // removes the tool that was upgraded to from the begining of the array.
            setIncome(incomePerTool[0]) // sets the players new income to the first value in the incomePerTool array
            intervals.shift() // removes the first value from the intervals array making the next interval the new first value
            incomePerTool.shift()
            console.log('Player Chose To Upgrade')
            alert(`TOOL UPGRADED\nCurrent tool: ${playerStats.currentTool}\nCurrent Income: ${playerStats.incomePerRun}`) // Displays the players current stats after they decide to upgrade
        }else if (playerInput == "End"){ // Selection to allow the player to quit the game
            alert("Game Ended")
            isGameRunning = false
        }else{
            
        }
        
    }

}