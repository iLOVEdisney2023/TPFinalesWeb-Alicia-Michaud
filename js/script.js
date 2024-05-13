console.log("allo")

let images= document.querySelectorAll(".grille img");
document.querySelector(".modale").addEventListener("click",FermerModale);

for(let i of images){
    i.addEventListener("click",OuvrirModale);
} 

function OuvrirModale(){

    let image=this.getAttribute("src"); 
   
    let element=document.createElement("img");
    element.setAttribute('src',image);

    document.querySelector(".modale").appendChild(element);

    document.querySelector(".modale").classList.add("actif");
}

function FermerModale(){
    let image = document.querySelector('.modale img');

    document.querySelector('.modale').removeChild(image);
    document.querySelector(".modale").classList.remove("actif");
}
    
