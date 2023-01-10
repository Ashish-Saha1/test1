let manuIcon = document.getElementById("manu-icon");
let manu = document.getElementById("manu");

    manuIcon.addEventListener('click', function(){
   

    if(manu.className === "hide-manu"){
        manu.classList.remove("hide-manu")
    }else{
        manu.classList.add("hide-manu")
    }
})