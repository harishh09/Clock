let time=0,
    hours=0,
    minutes=0,
    seconds=0,
    ms=0,
    interval;
var audio = new Audio('audio.mp3');
const getTime=()=>{
    time=prompt("Enter Time in minutes");
    time=time*60;
    setTime();
};
const setTime=()=>{
    hours=Math.floor(time/3600);
    minutes=Math.floor((time %3600)/60);
    seconds=Math.floor(time%60);
    document.getElementById('hour').innerHTML = hours;
	document.getElementById('min').innerHTML = minutes ;
	document.getElementById('sec').innerHTML = seconds;
	document.getElementById('ms').innerHTML = ms;
};
const timer=()=>{
    ms--;
    if(ms==-1){
        ms=99;
        seconds--;
    }
    if(seconds==-1){
        seconds=59;
        minutes--;
    }
    if(minutes==-1){
        minutes=59;
        hours--;
    }
    document.getElementById('hour').innerHTML = hours;
	document.getElementById('min').innerHTML = minutes ;
	document.getElementById('sec').innerHTML = seconds;
	document.getElementById('ms').innerHTML = ms;
    timeUp();
};
const startTimer=()=>{
    if(
        (hours==0)&(minutes==0)&&
        seconds==0 && ms==0
    ){
        getTime();
    }
    else{
        interval=setInterval(timer,10);
    
    }
};
const stopTimer=()=>{
    clearInterval(interval);
    $(".start").show();
    $(".stop").hide();
};
const resetTimer=()=>{
    stopTimer();
    time=0;
    ms=0;
    setTime();
    audio.pause();
};

const playAudio=()=>{
        audio.play();
};

const timeUp=()=>{
    if(
        (hours==0)&(minutes==0)&&
        seconds==0 && ms==0
    ){
        stopTimer();
        //play sound
        playAudio();
        setTime();
    }
};
$("#start").click(function(){
    startTimer();
});
$("#stop").click(function(){
    stopTimer();
});
$("#reset").click(function(){
    resetTimer();
});


