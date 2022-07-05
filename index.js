var inp1= document.getElementById("inp1")
var inp2=document.getElementById('inp2')

inp1.addEventListener('input',function(){
    let c= this.value 
    let f  = (c * 9/5) + 32
    
    if(!Number.isInteger(f)){
        f=f.toFixed(4)
    }
    inp2.value=f
})
inp2.addEventListener('input',function(){
    let f=this.value
    let c=(f - 32) * 5/9
    
    if(!Number.isInteger(c)){
        c=c.toFixed(4)
    }
    inp1.value=c
})
