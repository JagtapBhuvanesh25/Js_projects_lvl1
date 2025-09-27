const starter = document.getElementById('start');
const stoper = document.getElementById('stop');

function rndm_col(){
    str = "0123456789ABCDEF";
    ans = "#";
    for(let i=0 ; i<6 ; i++)  ans += str[Math.floor(Math.random()*16)];
    return ans;
}
let start;
starter.addEventListener('click' , function(){
    if(!start){
        start = setInterval(function(){
            document.body.style.backgroundColor = rndm_col();
            document.body.style.color = rndm_col();
        },500);
    }
});

stoper.addEventListener('click' , function(){
    clearInterval(start);
    start = null; // industry code
});
