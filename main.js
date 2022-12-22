let memberE1 = document.getElementById("member input");
let btnE1 = document.getElementById("clicker");
let outputE1 = document.getElementById("output");
let members = [];

btnE1.addEventListener("click", randomizer)

function addpeople() {
  members.push(newpeople(memberE1.value));
  console.log(members);
}
function display(){

}
function groupcreate(){
    let G = prompt("how many groups do you want to create")
    members.
    
}
console.log(randomizer)
function newpeople(name) {
  return {
    N: name,
  };
}
// let user chose groups, take groups, give members to those groups, display groups  DONE, 