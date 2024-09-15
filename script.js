let a=document.querySelector("#box1");
let b=document.querySelector("#box2");
let c=document.querySelector("#box3");



yourchoice();

let draw=()=>{
    hii=document.querySelector(".hexa");
        hii.innerHTML="DRAW"
        hii.style.backgroundColor = "grey";
       
}
showwinner=(user)=>{
    h=document.querySelector("#score");
    hi=document.querySelector("#score2");
    hii=document.querySelector(".hexa");
    if(user){
        h.innerText++;
        hii.innerHTML="YOU WON"
        hii.style.backgroundColor = "green";

    }else{
        hi.innerText++;
        hii.innerHTML="YOU LOOSE"
        hii.style.backgroundColor = "red";
    }
}

function computer(){
    let comp;
    let compchoice=(Math.random())*3;
        if(compchoice>0 && compchoice<1){
            comp="paper";
        } else if(compchoice>1 && compchoice<2){
            comp="scissor";
        }else if((compchoice>2 && compchoice<3)){
            comp="rock";
        }
      return comp;

}
function yourchoice(){
    let choice;
    
    a.onclick=()=>{
        choice="paper";
        comp=computer();
        
        if(choice===comp){
            draw();
        }else{
            user=true;
            if(choice==="paper"){
                user=comp==="scissor"?false:true;
            }else if(choice==="scissor"){
                user=comp==="rock"?false:true;
            }else{
               user= comp==="paper"?false:true;
            }
            showwinner(user);
        }
    }
    
    b.onclick=()=>{
        choice="scissor";
        comp=computer()
        if(choice===comp){
            draw();
        }else{
            user=true;
            if(choice==="paper"){
                user=comp==="scissor"?false:true;
            }else if(choice==="scissor"){
                user=comp==="rock"?false:true;
            }else{
               user= comp==="paper"?false:true;
            }
            showwinner(user);
        }
      
    }
    c.onclick=()=>{
        choice="rock";
        console.log(choice);
        comp=computer();
        if(choice===comp){
            draw();
        }else{
            user=true;
            if(choice==="paper"){
                user=comp==="scissor"?false:true;
            }else if(choice==="scissor"){
                user=comp==="rock"?false:true;
            }else{
               user= comp==="paper"?false:true;
            }
            showwinner(user);
        }
      
    }
   
}

