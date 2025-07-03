const cells=document.querySelectorAll(".cell");
const statusText=document.querySelector("#statusText");
const restartbtn=document.querySelector("#restartbutton");
const winconditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
     
let options = ["","","","","","","","",""];
let current="X";
let running= false;
initializeGame()
function initializeGame(){
  cells.forEach(cell => cell.addEventListener("click",cellclicked ));
  restartbtn.addEventListener("click",restartgame);
  statusText.textContent = `${current}'s turn`;

  running=true;
 
}
function cellclicked(){
 const cellIndex = this.getAttribute("cellIndex");
 if (options[cellIndex] != "" || !running) {
    return;
 }
 updatecell(this, cellIndex);
 checkwinner();
 if (running) {
   changePlayer(); // switch player only if game continues
 }
}

function updatecell(cell,index){
   options[index]=current;
   cell.textContent=current;
}
function changePlayer(){
     current=(current=="X")?"O":"X";
     statusText.textContent=`${current}'s Turn`;
} 
function checkwinner(){
let won=false;
for(let i=0; i<winconditions.length; i++){
    const condition=winconditions[i];
    const cella=options[condition[0]];
    const cellb=options[condition[1]];
    const cellc=options[condition[2]];
    if(cella==""||cellb==""||cellc==""){
        continue;
    }
    if(cella==cellb&& cellb==cellc){
        won=true;
        break;
    }
   
}
 if(won){
    statusText.textContent=`${current} WINS!`;
    running=false;

 }
 else if(!options.includes("")){
    statusText.textContent=`Draw`;
    running = false;
 }
}
function restartgame(){
current="X";
options=["","","","","","","","",""];
statusText.textContent= `${current}'s turn`;
cells.forEach(cell => cell.textContent="");
running=true;
}