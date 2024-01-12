let hour = 0
let minutes = 0
let seconds = 0
let miliSeconds = 0

// =============================Getting elements by Document========================>>
let gethour = document.querySelector('#hour');
let getminutes = document.querySelector('#min');
let getseconds = document.querySelector('#sec');
let getmili = document.querySelector('#msec');
let start = document.querySelector('#start');
let reset = document.querySelector('#reset');


let interval;


//=================================End==========================>>

 start.addEventListener('click',()=>{
    interval =  setInterval(function(){
        miliSeconds++
        getmili.innerHTML = miliSeconds
        if(miliSeconds >= 100){
            seconds++
            getseconds.innerHTML = seconds
            miliSeconds = 0
        }else if(seconds >= 5){
            minutes++
            getminutes.innerHTML = minutes
            seconds = 0
        }else if(minutes >= 5){
            hour++
            gethour.innerHTML = hour
            minutes = 0
        }
    
    },10)

    let disablebtn = document.querySelector('.dis');
    disablebtn.disabled = true
   
 })
//===============================Buttons Work========================>>
function stopbtn(){
    clearInterval(interval);
    let disablebtn = document.querySelector('.dis');
    disablebtn.disabled = false
}

reset.addEventListener('click',()=>{
    seconds = '00'
    minutes = '00'
    miliSeconds = '00'
    hour = '00'
   getseconds.innerHTML = seconds
   getminutes.innerHTML = minutes
   getmili.innerHTML = miliSeconds
   gethour.innerHTML = hour
   stopbtn()
})





