// for clicking all the buttons

// var buttons=document.querySelectorAll('button');
// buttons.forEach(button =>{
//     button.addEventListener('click',function(){
//         alert("I am clicked");
//     })
// })

// --------------------------

// for clicking just the first button

// document.querySelector('button').addEventListener("click",function(){
//     alert("I am clicked");
// });

// -------------------------------

// alternative way to click all the buttons

var buttons=document.querySelectorAll('button');
var numButtons=buttons.length;

// ---------------------------

// let vs const vs var
// https://www.youtube.com/watch?v=Icev9Oxf0WA

// ----------------

for(let i=0;i<numButtons;i++) // yahan pe var use karoge toh error aayega kyunki var is function scoped but let is block scoped, yahan jab click event pakdega tab
// tak loop chal chuka hoga and var ki final value numButtons ho gayi hogi, saare event listeners same value share karenge i ki i.e numButtons, par let store karke rakhta hai harr ek event listener
// ke corresponding i ki value ko
{
    buttons[i].addEventListener('click',function(){
        // console.log(i); // var use karne pe hamesha 7 aayege fir buttons[7] error dega
        // console.log(buttons[i].innerHTML);
        makeSound(buttons[i].innerHTML); // this.innerHTML bhi use kar sakte the
        buttonAnimation(buttons[i].innerHTML);
    });
}
document.addEventListener('keydown',function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(trigger)
{
    switch(trigger){
        case 'w':
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
        break;
        case 'a':
            var kickBass=new Audio("sounds/kick-bass.mp3");
            kickBass.play();
        break;
        case 's':
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
        break;
        case 'd':
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
        case 'j':
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;
        case 'k':
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        case 'l':
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
        default:
            console.log("The button "+trigger+" is not in drum kit");
    }
}
function buttonAnimation(trigger)
{
    if(trigger=='w'||trigger=='a'||trigger=='s'||trigger=='d'||trigger=='j'||trigger=='k'||trigger=='l')
    {
            var activeButton=document.querySelector('.'+trigger);
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        },100);
    }
}