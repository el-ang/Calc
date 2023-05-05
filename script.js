document.querySelectorAll(".pad button").forEach(btn=>{
    document.addEventListener("mousemove", ()=>{btn.blur()});
    btn.addEventListener("click", ()=>{
        console.log(btn.id);
    });
});