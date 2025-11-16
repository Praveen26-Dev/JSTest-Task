function ClockStart() {
    let time = new Date();
    setInterval(()=>{
     time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    document.getElementById("clock").textContent = `${h}:${m}:${s}`;

    },1000)
}

