let timer=document.getElementById("timer");
let current =0;
let date=new Date();
setInterval(()=>{
    let date=new Date();
    // console.log("a")
    let hours=date.getHours()
    let text="Am"
    if(hours>12)
    {
      hours= hours-12;
      text="Pm"
    }
    
	timer.innerHTML=`${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()},${hours}:${date.getMinutes()}:${date.getSeconds()} ${text}`;
},1000);


