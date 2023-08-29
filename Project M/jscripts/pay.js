import {gsap ,Cubic} from "./node_modules/gsap/index.js"


let pamount = document.querySelector('.amount')
let pname = document.querySelector('.name')
let pam = document.querySelector('.am')
let inPut = document.querySelector('.inputs')
let checker =document.querySelector('.checker')
let info = document.querySelector('.info')
let clearButton = document.querySelector('.btnc')
let ss = ''
let counter =8

gsap.from(pamount, {y:-60, opacity:0, duration: 0.62, })


pam.innerHTML = localStorage.getItem('cprice')
let toBePaid = pam.innerHTML.slice(1)

console.log(toBePaid)
pname.innerHTML = localStorage.getItem('currentname')


let buttons = document.querySelectorAll('.btn')
buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        
        // ss+= button.innerHTML
        // inPut.value = ss
        inPut.value +=button.innerHTML
        

    })
})


clearButton.addEventListener('click',()=>{
    inPut.value =''
})


function payChecker(){
    if(inPut.value == toBePaid){
        info.innerHTML = 'Payment Successfull'
        info.style.color = 'lightblue'
        setTimeout(() => {
            truck();
        }, 400);
       
    }else{
        info.innerHTML = 'Give the correct Payment'        
    }
    
}

checker.addEventListener('click',()=>{
    console.log('clciked')
    payChecker()
    
})


let myInterval =0
let tDiv = document.querySelector('.truck')
let truckImg = document.querySelector('.timg')
let ainfo =document.querySelector('.ar')
let house = document.querySelector('.hs')
let spansDiv = document.querySelector('.one')
function truck(){
    gsap.to(pamount, {y:-60, opacity:0, duration: 0.62 })
    tDiv.style.opacity = '1'
    gsap.from(truckImg, {x:500, duration:0.25, ease:Cubic})
    gsap.to(spansDiv, {opacity:1})
    myInterval= setInterval(animateTruck, 1000);

    
    console.log('yeuysiy')
}

function animateTruck(){
    gsap.fromTo(truckImg, {y:0},{ y:-10, duration:1})
    gsap.fromTo(truckImg, {y:-10},{ y:0, duration:1})
    gsap.fromTo('.span1',{x:0}, {x:650})
    gsap.fromTo('.span2',{x:0}, {x:650})
    gsap.fromTo('.span3',{x:0}, {x:650})
    gsap.fromTo('.span4',{x:0}, {x:650})
    gsap.fromTo('.span5',{x:0}, {x:650})    

    ainfo.innerHTML = `Arrives in ${counter} days`
    console.log(counter)
    counter--;
    if(counter==0){
        mysTopfunction()
        ainfo.innerHTML ='Arrived'
        gsap.to(spansDiv, {opacity:0})
        house.style.opacity ='1'


        gsap.from(house,{x:0, x:-40, ease :Cubic}) 
        setTimeout(() => {
            tsf() 
        }, 2000);
      

    }

    

}


function mysTopfunction(){
    clearInterval(myInterval)
}


function tsf(){
    ainfo.innerHTML ='Arrived'

    gsap.to(truckImg,{opacity:1, opacity:0})
    gsap.to(house, {opacity:1, opacity:0})
    gsap.to('.ground',{opacity:1, opacity:0})
    ainfo.innerHTML = 'Thanks for Shopping'
    gsap.to(ainfo, { fontSize: 55, y:200})
    localStorage.setItem("flagValue", true)
 

}


 
