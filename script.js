let btn=document.querySelector("button");
let h3=document.querySelector("h3");


btn.addEventListener("click",joke);

async function joke(){
let url=fetch('https://icanhazdadjoke.com/' ,{
    headers:{
        'Accept':'application/json'
    }
});
    url
.then(data=>data.json())
.then((data)=>{
    let d=data  ;
    console.log(d.joke);
    h3.innerText=d.joke;
    
})
.catch((err)=>{
    console.log(err);
});
};
