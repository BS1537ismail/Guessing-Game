/*var photo = ["image/pc1.jpg","image/pc2.jpg","image/pc3.jpg"];
var imgtag = document.querySelector("img");
var count = 0;
function prev(){
    count--;
    if(count < 0){
        count = photo.length-1;
    }
    imgtag.src = photo[count];
}
function next(){
    count++;
    if(count >= photo.length){
        count = 0;
    }
    imgtag.src = photo[count];
    
}


    // addEventListener
        document.getElementById("myBtn").addEventListener("click", displayDate);
    function displayDate(){
         document.getElementById("date").innerHTML = Date();
    }

    // onchange event
    var program = document.querySelectorAll("input[name=program]");
    Array.from(program).map((program)=>{
        program.addEventListener("change", programHandler);
    });
    function programHandler(e){
        if(e.target.checked){
          document.getElementById("check").innerHTML = e.target.value;
        }
        else {
            document.getElementById("check").innerHTML = '';
        }
    }

    //setTime Out
    var data = document.getElementById("btnTimeOut")
    var message = document.getElementById("timeout");
    data.addEventListener("click", fun);
    function fun(){
        message.textContent = "This is SetTime Out in BOM"
         setTimeout(() => {
            message.textContent = '';  
        }, 1000);
    }*/

    //Guessing Game
    let totalAttempts = 5;
    let attempts = 0;
    let totalWons = 0;
    let totalLost = 0;
    const form = document.querySelector("form");
    const cardBody = document.querySelector(".card-body");
    const gussingNumber = document.querySelector("#guessingNumber");
    const checkButton = form.querySelector("#check");
    const resultText = cardBody.querySelector(".resultText");
    const lostWonMessage = document.createElement("p");

    const remainingAttempts = cardBody.querySelector(".remainingAttempts");

    form.addEventListener("submit", function(event){
        event.preventDefault();
        
        attempts++;
        if(attempts == 5){
            gussingNumber.disabled = true;
            checkButton.disabled = true;
        }
        if(attempts < 6){
            let guessNumber = Number(gussingNumber.value);
            checkResult(guessNumber);
            remainingAttempts.innerHTML = `Remaining attempts: ${
                totalAttempts - attempts
            }`
        }
        gussingNumber.value = "";
    })
    function checkResult(gussingNumber){
         const randomNumber = getRandomNumber(5);
         if(gussingNumber == randomNumber){
            resultText.innerHTML = `you have won`;
            totalWons++;
         }else{
            resultText.innerHTML = `you have lost; random number was:${randomNumber}`;
            totalLost++;
        }
        lostWonMessage.innerHTML = `Won:${totalWons},Lost:${totalLost}`
        lostWonMessage.classList.add("large-text");
        cardBody.appendChild(lostWonMessage);
    }
    function getRandomNumber(limit){
        return Math.floor(Math.random()*limit)+1;
    }
