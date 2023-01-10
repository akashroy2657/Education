setInterval(()=>{
    const time=document.querySelector("Digital-clock");
    let date=new Date();
    let hours=date.getHours();
    let minute=date.getMinutes();
    let seconds=date.getSeconds();
    let AM_PM="AM";
    if (hours>11){
        AM_PM="PM";
        hours=hours-12;
    }
    if(hours==0){
        hours=12;
    }
    if(seconds<10){
        seconds="0"+seconds;
    }
    if(minute<10){
        minute="0"+minute;
    }
    if(hours<10){
        hours="0"+hours;
    }
    time.textContent=hours+":"+minutes
+""+seconds+" "+AM_PM;
 })