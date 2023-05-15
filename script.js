const op = {
    input: [],
    push: ()=>{},
    clear: ()=>{},
    submit: ()=>{}
}, num = {
    built: "",
    push: ()=>{},
    back: ()=>{},
    assign: ()=>{}
}, job = {
    identify: ({id})=>{
        console.log(id);
        switch(id){
            case "a": job.add(); break;
            case "b": job.back(); break;
            case "c": job.clear(); break;
            case "d": job.divide(); break;
            case "e": job.equal(); break;
            case "m": job.multiply(); break;
            case "p": job.point(); break;
            case "s": job.sub(); break;
            default: job.num(id);
        }
    },
    add: ()=>{},
    back: ()=>{},
    clear: ()=>{},
    divide: ()=>{},
    equal: ()=>{},
    multiply: ()=>{},
    num: ()=>{},
    point: ()=>{},
    sub: ()=>{}
};

document.querySelectorAll(".pad button").forEach(btn=>{
    document.addEventListener("mousemove", ()=>{btn.blur()});
    btn.addEventListener("click", job.identify.bind(null, btn));
});

const mantainer = ()=>{
    const result = document.querySelector(".result");
    if(op.out){
        result.querySelector("h2").removeAttribute("class");
        result.querySelector("h1").innerHTML = op.out;
    }else result.querySelector("h1").setAttribute("class", "prior");
    
    requestAnimationFrame(mantainer);
}
requestAnimationFrame(mantainer);