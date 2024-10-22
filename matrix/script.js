const nameBtn = document.getElementById('nameBtn');

let avatarName = document.getElementById('avatarName');
let newAvatarName = document.getElementById("newAvatarName").value;

let level=document.getElementById('level'); 
let newLevel=document.getElementById('avatarLevel').value;

let attribute=document.getElementById('attribute'); 
let newAttribute=document.getElementById('avatarAttribute').value;

let avatarClass=document.getElementById('class'); 
let newCLass=document.getElementById('avatarClass').value; 

let ability=document.getElementById('ability'); 
let newAbility=document.getElementById('avatarAbility').value;

let position=document.getElementById('position'); 
let newPosition=document.getElementById('avatarPosition').value;

let points=document.getElementById('points'); 
let newPoints=document.getElementById('avatarPoints').value;

const attributes=["Earth","Water","Fire", "Air", "Neutral", "lightning"]

function newCard(){
    avatarName.innerHTML=newAvatarName;
    level.innerHTML=newLevel;
    avatarClass.innerHTML=newCLass;
    ability.innerHTML=newAbility;
    points.innerHTML=newPoints;    
    attribute.getElementsByTagName('img').className=newAttribute
    } 


nameBtn.addEventListener('click',newCard);

