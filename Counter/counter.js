const decresaseBtn = document.getElementById("decresaseBtn");
const resetBtn = document.getElementById("resetBtn");
const incresaseBtn = document.getElementById("incresaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

incresaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decresaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0 ;
    countLabel.textContent = count;
}
