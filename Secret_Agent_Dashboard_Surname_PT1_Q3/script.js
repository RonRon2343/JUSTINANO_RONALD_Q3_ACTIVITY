// console.log("System Initialized...");
// let agentScore = 95.5;
// let agentName = "Bond";
// console.log("Profile: " + agentName + " Score: " + agentScore);
// console.log(typeof agentName);
// document.getElementById("btn-mission").addEventListener("click", function() {
//     document.getElementById("status-text").textContent = "Status: Mission Active - Do not disturb.";
// });
// document.getElementById("btn-color").addEventListener("click", function(){
//     document.getElementById("agent-profile").style.borderColor = "red";
//     document.getElementById("agent-profile").style.color = "red";
// });
// document.getElementById("btn-disguise").addEventListener("click", function() {
//    const img = document.getElementById("agent-avatar");
//    img.src.includes("https://via.placeholder.com/150/333333/FFFFFF?text=Civilian+Mode") ? "https://via.placeholder.com/150/333333/FFFFFF?text=Civilian+Mode" : "https://via.placeholder.com/150/FF0000/FFFFFF?text=SPY+MODE";
// });
// document.getElementById("btn-stealth").addEventListener("click", function(){
//     document.getElementById("agent-profile").style.display = "none";
// });
// const input = document.getElementById("codename-input")
// const input2 = document.getElementById("agent-name") 
// document.addEventListener("input", () => {
//     input2.textContent = "Agent: " + input.value + "!";
// });
// document.addEventListener("keydown", (event) => {
//     console.log("Key pressed: " + event.key);
// });
const x = 0;
const y = -1;
const z = 4;
if (x >= y && x >= z) {
    sort = x + ", " + y + ", " +z;
}else {
    sort = z + ", " + y + ", " +x;
}if (y >= z && y >= x) {
    sort = y + ", " + z + ", " +x;
}else {
    sort = x + ", " + z + ", " +y;
}if (z >= x && z >= y) {
    sort = z + ", " + x + ", " +y;
}else {
    sort = y + ", " + x + ", " +z;
}
alert(sort);

const a = 0;
const b = -1;
const c = -2;
const d = -5;
const e = -6;
if (a > b,c,d,e) {
    results = a;
}else if (b > a,c,d,e) {
    results = b;
}else if (c > a,b,d,e) {
    results = c;
}else if (d > a,b,c,e) {
    results = d;
}else if (e > a,b,c,d) {
    results = e;
}
alert(results);

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0  && i % 5 ===0) {
        console.log("FizzBuzz");
    }else if (i % 3 === 0) {
        console.log("Fizz");
    }else if (i % 5 === 0) {
        console.log("Buzz");
    }else {
        console.log(i)
    }
}