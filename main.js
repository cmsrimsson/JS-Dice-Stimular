let nunberChoice = document.querySelector("#number");
let rollButton = document.querySelector("#roll"); 
let totalResult = document.querySelector("#result");
let showRolls = document.querySelector("#showRoll");
let lists = document.querySelector("#resultLists");
let sides = document.querySelector("#numberOfSides")
let reset = document.querySelector("#reset");

let dieRolls = [];
let usersides = document.querySelector("#numberOfSides").value;
roll.addEventListener("click", function () {
  
  let userInput = document.querySelector("#number").value;
  
  let count = 0;
  let total = 0;

    while (count < userInput) {
        let x = Math.floor(Math.random() * 6) + 1;
        dieRolls.push(x);
        total += dieRolls[count];
        count += 1;
  }
    totalResult.innerHTML = total;
    console.log(dieRolls);
});

  showRolls.addEventListener("click", function () {
    result = "<ol>";
    dieRolls.forEach(function (dice) {
      result += "<li>" + dice + "</li>";
    })
    result += "</ol>";
    lists.innerHTML = result;

});

reset.addEventListener("click", function() {
       //console.log(document.querySelector("#number").value);
        dieRolls = [];
        //nunberChoice.innerHTML = " ";
        lists.innerHTML = " ";
        totalResult.innerHTML = " ";
        //userInput = " ";
        sides = " ";
    
       document.querySelector("#number").value = 0;
       document.querySelector("#numberOfSides").value = 0;
       
    
});
