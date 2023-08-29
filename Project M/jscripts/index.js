import {gsap, Flip, RoughEase, TweenLite} from "./node_modules/gsap/all.js"
import {Power4, Power3, Expo} from "./node_modules/gsap/index.js"
gsap.registerPlugin(Flip)



const signupButton = document.querySelector('.sign')
const LogButton = document.querySelector('.log')



signupButton.addEventListener('click', ()=>{
    
    
    signupButton.classList.add('ssign')

    gsap.to(signupButton,0.2,{ 'borderRadius':50, scale:100.5, backgroundColor: 'rgb(155, 181, 155)', color:' rgb(155, 181, 155)',ease:Power4.easeOut  })
    setTimeout(() => {
                window.location.href = "/htmls/register.html";
                
            }, 500);
        

})




LogButton.addEventListener('click', ()=>{

    LogButton.classList.add('llog')
   

    gsap.to(LogButton,0.2,{ 'borderRadius':50,  backgroundColor: 'rgb(255, 255, 255)', color:'  rgb(93, 252, 112)', scale:100.5,backgroundColor:'rgb(93, 252, 112)', opacity:0.7,ease:Power3.easeOut  })
    setTimeout(() => {
                window.location.href = "/htmls/login.html";
                
            }, 500);
        
    
    
    
    
   
})






const cards = document.querySelectorAll('.cards')
cards.forEach((card, index)=>{

    card.addEventListener('click',()=>{
        const state = Flip .getState(cards);
        //
        const isCardActive = card.classList.contains("active")

        cards.forEach((otherCard, OtherIdx)=>{
            otherCard.classList.remove('active')
            otherCard.classList.remove('is-inactive')
            if(!isCardActive && index!==OtherIdx) otherCard.classList.add('is-inactive')
        });
        if(!isCardActive) card.classList.add('active')
        // Flip.to(state,{ duration:0.4,  ease:easeOut})
    
    })

})