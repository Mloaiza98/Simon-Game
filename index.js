buttonColours=["green","red","yellow","blue"];
gamePatter =[];
userClickedPattern=[];
level=0;
started= false

$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
});

$(".btn").click(function(i){
        var userChosenColour = i.target.id ;
        userClickedPattern.push(userChosenColour);

        sounds(userChosenColour);
        animation(userChosenColour);
        
        checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {
    console.log("check answer ",  userClickedPattern[currentLevel], gamePatter[currentLevel])
    if (userClickedPattern[currentLevel]=== gamePatter[currentLevel] ) {


        if (userClickedPattern.length === gamePatter.length) {
            setTimeout(function () {
                nextSequence();
              }, 500);
        }
        
    }
    else{
        sounds("worng");
        $("body").addClass("game-over")
        setTimeout(function(){ $("body").removeClass("game-over")}, 300); 
        $("#level-title").text("Fail")
        startOver();
    }
    
}

function nextSequence() {
    i=0;
    userClickedPattern = [];
    var randomNum = Math.floor((Math.random() * 4));
    var randomChosenColour= buttonColours[randomNum];
    gamePatter.push(randomChosenColour)
    


    myLoop(gamePatter.length);
        
    // sounds(gamePatter[index]);
    // $("#"+ gamePatter[index]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
   
          
   


    $("#level-title").text("level "+ level)
    level++;;
    return gamePatter
    
    
}



function animation(currentColor) {
        $("#"+currentColor).addClass("pressed")
        setTimeout(function(){ $("#"+currentColor).removeClass("pressed")}, 300); 
}


function sounds(color) {

    var audio = new Audio ("sounds/"+color+".mp3");
    audio.play();
}
function startOver() {
    level=0;
    gamePatter=[];
    started=false
    
}

function soundAnimaation(currentLevel){
    for (let index = 0; index < currentLevel; index++) {
        sounds(gamePatter[index]);
        $("#"+ gamePatter[index]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);  
    }
}
var i = 0;                  //  set your counter to 0

function myLoop(currentLevel) {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    sounds(gamePatter[i]);  //  your code here
    $("#"+ gamePatter[i]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100); 
    console.log(i, gamePatter[i])
    i++;                    //  increment the counter
    if (i < currentLevel) {           //  if the counter < 10, call the loop function
      myLoop(currentLevel);             //  ..  again which will trigger another 
    }                       //  ..  setTimeout()
  }, 300)
}



    


// PRIMER INTENTO SOLO 

// $(document).keypress(function(i){
//     var board= i.key
    
    
//     if (board == "a") {
//         $("#level-title").text("Lets gooo")
//         simon();
    
        
//     }
//     else{
//         $("#level-title").text("hundiste la " + board)

//     }

// })


// function simon(colors) {
//     var game = {
//         level: 0,
//         padding:[],
//         answer:[],
//         colors:["green","red","yellow","blue"]
//     };
//     var randomNum = Math.floor((Math.random() * 4));
//     sounds(randomNum);
//     var cont = 1;
//     console.log(game.colors[randomNum])  
//     $(document).click(function(i){
//         console.log(this.target.id)
//          while (cont<3) { 
//             var button = i.target.id
//             console.log(cont, randomNum, this.colors, button)
//             // if (colors[randomNum]==button) {
//             //     alert("ahhhh")
//             //     var randomNum = Math.floor((Math.random() * 4));
//             //     game.level = cont;
//             //     }
//             cont+=1;
//         }
//         })
            
    
//     }
    
    
    
    
// // Funcion para el sonido y animacion 

// function sounds(x) {

//     var tom1 = new Audio ("sounds/"+this.colors[x]+".mp3");
//     tom1.play();
//     $("."+this.colors[x]).addClass("pressed")
//     setTimeout(function(){ $("."+ this.colors[x]).removeClass("pressed")}, 300); 
// }
