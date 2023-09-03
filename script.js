var second = 0;
var intervalid = 0;
var minute = 0;
var hour = 0;
function start(){
    intervalid = setInterval(()=>{
        second++;
        document.getElementById("sec").innerText ="Second : "+second;
        if(second%60 == 0){
            minute++;
            document.getElementById('min').innerText = "Minute :" +minute;
            second = 0;
        }
    },1000);
}
function stop(){
    clearInterval(intervalid);
}
function reset(){
    second = 0;
    minute = 0;
    document.getElementById("sec").innerText ="Second :"+second;
    document.getElementById("min").innerText ="Minute :"+minute;
}