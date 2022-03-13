
let head=document.querySelector('h1');
let button=document.querySelector('button');

let image1=document.querySelectorAll('img')[0];
let image2=document.querySelectorAll('img')[1];

button.addEventListener('click',function(){
    let randomnum1=Math.floor(Math.random()*6)+1;
    let randomnum2=Math.floor(Math.random()*6)+1;
    let imagepath1="images/dice"+randomnum1+".png";
    let imagepath2="images/dice"+randomnum2+".png";
    image1.setAttribute('src',imagepath1);
    image2.setAttribute('src',imagepath2);
    if(randomnum1>randomnum2){
       head.textContent='Player 1 wins';
    }
    if(randomnum2>randomnum1)
         head.textContent='Player 2 wins';
    if(randomnum1==randomnum2)
        head.textContent='Its a tie';
})