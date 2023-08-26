console.log('Project 5');
let x=document.getElementById("insert")

window.addEventListener('keydown',(e)=>{
  x.innerHTML=`
  <div class='color'>
  <table>
  <tr>
    <th>key</th>
    <th>key code</th>
    <th>Digit</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
</div>
`
})
