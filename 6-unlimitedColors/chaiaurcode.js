var x=document.getElementById("start")
var y=document.getElementById("stop")
const randomColor=()=>{
  const hex="0123456789ABCDEF"
  let color="#"
  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)]
  }
  return color
}
let ss
x.addEventListener('click',()=>{
  console.log(randomColor())
  ss=setInterval(()=>{
    document.body.style.backgroundColor=randomColor();
  },1000)
  
})

y.addEventListener('click',()=>{
  clearInterval(ss)
})