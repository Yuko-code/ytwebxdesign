const hamburgerButton=document.getElementById('hamburger');
const navList=document.getElementById('navbar');
const x=document.getElementById('x');

hamburgerButton.addEventListener('click', ()=>{
navList.classList.remove('nonShow');
hamburgerButton.classList.add('nonShow');
x.classList.remove('nonShow');
x.addEventListener('click',()=>{
    x.classList.add('nonShow');
    navList.classList.add('nonShow');
    hamburgerButton.classList.remove('nonShow');
    });
});


const navItems=document.querySelectorAll('li a');
for(let navItem of navItems){
    navItem.addEventListener('click',()=>{
    x.classList.add('nonShow');
    navList.classList.add('nonShow');
    hamburgerButton.classList.remove('nonShow');
    
});
}

/*
const readMore=document.querySelector('.aboutBtn');
//const readMoreContainer=document.querySelector('.myJourney');
readMore.addEventListener('click',()=>{
    //readMoreContainer.classList.toggle('myJourney');
    //const hide=document.querySelector('.hide')
    //hide.addEventListener('click',()=>{
        readMoreContainer.classList.add('myJourney');
    })
})

*/
