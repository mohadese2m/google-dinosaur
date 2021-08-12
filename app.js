document.addEventListener('DOMContentLoaded',() =>{
    const dino = document.querySelector ('.dino')

    function control(e){
        if(e.keyCode === 32){
            //code
            console.log('pressed')
            jump ()
        }
    }


    document.addEventListener('keyup', control)

    function jump(){
    let position = 0
    let timerId = setInterval(function () {
         
        //move down
        if( position === 150){
            clearInterval (timerId)
            console.log('down')
            let downTimeId = setInterval (function (){
                if (position === 0){
                    clearInterval(downTimeId)
                }
                position -=30
                dino.style.bottom = position + 'px'
                },20)
            }
        //move up
        console.log ('up')
        position +=30
        dino.style.bottom = position + 'px'
     },20)
            
     }
})