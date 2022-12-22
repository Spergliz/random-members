let memberE1 = document.getElementById("member input");
let btnE1 = document.getElementById("clicker");
let outputE1 = document.getElementById("output");
let members = [];

btnE1.addEventListener("click", addpeople)

function addpeople() {
  members.push(newpeople(memberE1.value));
  console.log(members);
}
function display(){

}
function randomizer(){
    let A = members.N+Math.random
    console.log(A)
}
console.log(randomizer)
function newpeople(name) {
  return {
    N: name,
  };
}
