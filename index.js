
const addTrailingZero=(num)=>{
    return num<10 ? "0"+num : num;
};
const updateTime=()=>{
    const time = new Date();
    let hours=time.getHours();
    let minutes=time.getMinutes();
    let seconds=time.getSeconds();
    let ampm= hours >=12 ? "PM" : "AM";
    let otherampm= hours>= 12 ? "AM" : "PM";
    hours= hours%12|| 12;
    hours= addTrailingZero(hours);
    minutes= addTrailingZero(minutes);
    seconds= addTrailingZero(seconds);
    
    $("#hour").html(hours);
    $("#min").html(minutes);
    $("#sec").html(seconds);
    $("#ampm").html(ampm);
    $("#other-ampm").html(otherampm);
};
updateTime();
setInterval(updateTime,1000);
