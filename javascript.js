let url= "https://api.potterdb.com/v1/movies";
  fetch(url)
  .then((res)=> {
    console.log(res)
  }).catch((err)=>{
    console.log("ERROR_", err)
  })

// async function greet() {
//   return "Hello, World!";
// }

// let h1 = document.querySelector("h1");
// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//    setTimeout(() => {
//     let num = Math.floor(Math.random()* 10) + 1;
//     if (num > 3) {
//       reject("Promise rejected")
//     }
//     h1.style.color = color;
//     console.log(`color changed to , ${color}!`)
//      resolve ("Color changed.")
//    }, delay);

// });
// }
// async function demo() {
//   try {
//     await changeColor("red", 1000);
//  await  changeColor("blue", 1000);
//  await  changeColor("orange", 1000);
//   await changeColor("yellow", 1000);
// } catch (error) {
//   console.log("error caught")
//   console.log(error)
// }

// }

// let h1 = document.querySelector("h1");
// function changeColor(color, delay) {
//   return new Promise ((resolve, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       resolve("color chnaged!");
//     }, delay)
//   })
// }
// changeColor("red", 2000)
// .then((message) => {
//   console.log("red color changed");
//   console.log(message)
//   return changeColor ("blue", 3000)
// })
// .then ((message) => {
//   console.log("blue color changed");
//   console.log(message)
//   return changeColor ("green", 4000)
// })
// .then ((message) => {
//   console.log("green color changed");
//   console.log(message)
//   return changeColor ("yellow", 5000)
// })
// .then((message) => {
//   console.log("yellow color changed")
//   console.log(message)
//   return changeColor ("purple", 6000)
// })
// .then((message)=> {
//   console.log("purple color changed");
//   console.log(message)
// })

// let h1 = document.querySelector("h1");
// function changecolor (color, delay, nextColorChange) {
//   setTimeout(() =>{
// h1.style.color = color;
// nextColorChange();
//   }, delay)
// };
// changecolor("red", 1000, () => {
//   changecolor("orange", 1000, () => {
//     changecolor("yellow", 1000,() =>{ 
//       changecolor("green", 1000, () =>{});
//     });
//   });
// });
// changecolor("blue", 2000);
// changecolor("orange", 3000);
// changecolor("brown", 4000);
// let h1 = document.querySelector("h1");

// function changecolor(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     nextColorChange();
//   }, delay);
// }

// changecolor("red", 1000, () => {
//   changecolor("orange", 1000, () => {
//     changecolor("yellow", 1000, () => {
//       changecolor("green", 1000, () => {}); // 👈 Fix here
//     });
//   });
// });



// const h1 = document.querySelector("h1");
// const colors = ["red", "orange", "yellow", "green", "blue", "brown"];
// let index = 0;

// function loopColors() {
//   h1.style.color = colors[index];
//   index = (index + 1) % colors.length; // loops back to start
//   setTimeout(loopColors, 1000); // call again after 1 second
// }

// loopColors(); // start the loop
 

// function savetodb (data, succes, failure) {
//   let internetspeed = Math.floor(Math.random()* 10) + 1 ;
//   if (internetspeed > 4) {
//     succes();
//   }
//     else {
//      failure();
//     }
// };
// savetodb("practice1",
//    () => {
// console.log("succes : data saved");
//  savetodb("practice2", 
//   ()=> {
//     console.log("succes2 : data saved");
//   },
//   ()=> {
//     console.log("failure2 : data not saved");
//   });
// },
// () => {
//   console.log("failure : data not saved");
// }
// );




// setTimeout(() => {
//   console.log("javascript practice")
// }, 2000);
// setTimeout(() => {
//   console.log("javascript practice2");
// }, 3000);
// console.log("helo")

// function heelo() {
//   console.log("heloo");
// }

// function demo() {
//   console.log("calling the heloo function");
//   heelo();
// }
// console.log("clling the demo ");
// demo();
// console.log("done")

// function one() {
//   return 1;
// }
// function two(){
//   return one() + one();
// }
// function three() {
//   let ans =  two() + one();
//   console.log(ans);
// }
// three();
// let buttonColors = ["red", "blue", "green", "yellow"];
// let gamePattern = [];
// let userClickedPattern = [];
// let started = false;
// let level = 0;

// // Start game on keypress
// document.addEventListener("keypress", () => {
//   if (!started) {
//     document.querySelector("h1").textContent = "Level " + level;
//     nextSequence();
//     started = true;
//   }
// });

// // When user clicks a button
// document.querySelectorAll(".btn").forEach(button => {
//   button.addEventListener("click", function () {
//     let userChosenColor = this.id;
//     userClickedPattern.push(userChosenColor);
//     playSound(userChosenColor);
//     animatePress(userChosenColor);
//     checkAnswer(userClickedPattern.length - 1);
//   });
// });

// function checkAnswer(currentLevel) {
//   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//     // Correct so far
//     if (userClickedPattern.length === gamePattern.length) {
//       setTimeout(() => {
//         nextSequence();
//       }, 1000);
//     }
//   } else {
//     // Wrong answer
//     playSound("wrong");
//     document.body.classList.add("game-over");
//     document.querySelector("h1").textContent = "Game Over, Press Any Key to Restart";

//     setTimeout(() => {
//       document.body.classList.remove("game-over");
//     }, 200);

//     startOver();
//   }
// }

// function nextSequence() {
//   userClickedPattern = [];
//   level++;
//   document.querySelector("h1").textContent = "Level " + level;

//   let randomNumber = Math.floor(Math.random() * 4);
//   let randomChosenColor = buttonColors[randomNumber];
//   gamePattern.push(randomChosenColor);

//   document.getElementById(randomChosenColor).classList.add("flash");
//   setTimeout(() => {
//     document.getElementById(randomChosenColor).classList.remove("flash");
//   }, 200);

//   playSound(randomChosenColor);
// }

// function playSound(name) {
//   let audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// function animatePress(currentColor) {
//   let activeButton = document.getElementById(currentColor);
//   activeButton.classList.add("pressed");
//   setTimeout(() => {
//     activeButton.classList.remove("pressed");
//   }, 100);
// }

// function startOver() {
//   level = 0;
//   gamePattern = [];
//   started = false;
// }




















// let gamesq = [];
// let usersq = [];
// let started = false;
// let btns = ["yellow", "red", "green", "blue"];
// let level = 0;
// let h2 = document.querySelector("h2");

// document.addEventListener("keypress", function(){
//     // console.log("game started.");
//     if (started == false) {
//         console.log("game is started.")
//         started = true;
//         levelup();
        
//         }
        
// })

// function gameflash(btn) {
    
//     btn.classList.add("flash");
//     setTimeout(function(){
//         btn.classList.remove("flash");

//     },250)
// }
// function userflash(btn) {
    
//     btn.classList.add("userflash");
//     setTimeout(function(){
//         btn.classList.remove("userflash");

//     },250)
// }
// function levelup() {
//     level++;
//     h2.innerText= `level ${level}`;
//     let randix = Math.floor(Math.random() * 4);
//     let randcolor = btns[randix];
//     let randbtn = document.querySelector(`.${randcolor}`);
//     gamesq.push(randcolor);
//     console.log(gamesq)

//     let btn = document.querySelector(".btn"); // Select any button you want to flash
//     btnflash(btn);
//     gameflash(randbtn);
    
// }
// function btnpress(){
//     console.log(this)
//     let btn = this;
//     userflash(btn)

// };
// let allbtns = document.querySelectorAll(".btn");
//  for (btn of allbtns){
//     btn.addEventListener("click", btnpress);

//  }













// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");
//  div.addEventListener("click", function() {
//     console.log("div was clicked");
// });
//  ul.addEventListener("click", function(event) {
//     event.stopPropagation();
//     console.log("ul was clicked");
// });
// for (li of lis) {
//     li.addEventListener("click", function(event) {
//         event.stopPropagation();
//         console.log("li was clicked");
//     })
// }

// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let inp = document.querySelectorAll("input");

//  btn.addEventListener("click", function () {
//     let item = document.createElement("li");
//     item.innerText = inp[0].value;
//     ul.appendChild(item);
//     let delbtn = document.createElement("button");
//     delbtn.innerText = "delete";
//     delbtn.classList.add("delete");
//     item.appendChild(delbtn);
//     console.log(inp[0].value);
//     inp[0].value = "";
//  });
// ul.addEventListener("click", function(event){
//     let delbtn = event.target.classList.contains("delete");
//     if(delbtn){
//         event.target.parentNode.remove();
//         }
//         });




// let = delbtns = document.querySelectorAll(".delete");
// for (delbtn of delbtns) {
//     delbtn.addEventListener("click", function () {
//         this.parentNode.remove();
//         });
//     }










// let form = document.querySelector("form");
// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     console.dir(form);
// //  let user = this.elements[0];
// //  let pass = this.elements[1];

// //     // let user = document.querySelector("#user");
// //     // let pass = document.querySelector("#pass");
// //     console.log(user.value);
// //     console.log(pass.value);

//     // alert(`Hi ${user.value}, your password is ${pass.value}`);

// });
// let user = document.querySelector("#user");
// let para1 = document.createElement("p");
// para1.innerText = user.value;
//  document.querySelector("body").appendChild(para1);
// // user.addEventListener("change", function(){
// //     console.log("change event");
// //     console.log("input value: ", this.value)
// // })

// user.addEventListener("input", function(){
//     console.log("input event");
//     console.log("input value: ", this.value);
//     para1.innerText = this.value;
// });

    








// let heading = document.createElement("h1");
// heading.innerText = "jAvaScript.";
// document.querySelector("body").append(heading);
// heading.classList.add('red');

// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let p = document.createElement("p");

// h1.innerText = "i'm in a div";
// p.innerText= "ME TOO!"
// console.dir(div);
// div.append(h1);
// div.append(p);
// div.classList.add("abc");
// document.querySelector("body").append(div);

// let btn = document.createElement("button");
// let input = document.createElement("input");
// btn.innerText = "CLICK ME !";

// input.setAttribute('placeholder','write color');
// document.querySelector("body").append(input)
// document.querySelector("body").append(btn)

// let heading1 = document.createElement("h1");
// heading1.innerText = "DOM PRACTICE";
// heading1.classList.add("xyz");
// document.querySelector("body").prepend(heading1);

// btn.addEventListener("click", function () {
//     let h1 = document.querySelector(".red");
// let randomcolor = getrandomcolor();
// h1.innerText = randomcolor ;
// let div= document.querySelector(".abc");
// div.style.backgroundColor = randomcolor ;
// let input = document.querySelector("input");
// input.value = randomcolor ;
 
//     console.log("color updated");
// });

// function getrandomcolor() {
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);

//     let color = `rgb(${red},${green},${blue})`;
//     return color;
// }
// function savetodb(data) {
//   return new Promise((resolve, reject) => {
//     let internetspeed = Math.floor(Math.random() * 10) + 1;
//     if (internetspeed > 5) {
//       resolve("fast internet");
//   }
//   else {
//     reject("slow internet");
//   }
// });
// };
// savetodb("net")
// .then((result) => {
// console.log("promis is completed.");
// console.log("result: ", result);
//   return savetodb("heloo");
//   })
//   .then ((result) => {
//     console.log("second promise is completed");
//     console.log("result: ", result)
//     return savetodb("zarish hameed");
//   })
//   .then ((result)=> {
//     console.log("third promise is completed");
//     console.log("result: ", result)
//   })
// .catch((error) => {
//   console.log("promise not done.");
//   console.log("error result: ", error);
// })
// console.log ("savetodb")
// console.log(Promise);

// savetodb("net")
//   .then(result => console.log("Resolved:", result))
//   .catch(error => console.log("Rejected:", error));