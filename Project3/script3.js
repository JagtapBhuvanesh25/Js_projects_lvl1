const ans = document.getElementById('display');

setInterval(function(){
    const timer = new Date();
    ans.innerHTML = timer.toLocaleTimeString();
},1000);