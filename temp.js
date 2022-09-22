const cel = document.querySelector("#cel")
const feh = document.querySelector('#feh')


cel.addEventListener('input' , function(){
     c = this.value
     f = (c * 9/5) + 32 
     feh.value = f



})

feh.addEventListener('input' , function(){
    f = this.value
    c = (f -32) * 5/9 
    cel.value = c

})