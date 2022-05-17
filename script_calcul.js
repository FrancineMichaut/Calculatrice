
// let bouton = document.getElementById("btn")
// let formu = document.getElementById("formu")
let formulaire = document.getElementById("formu")
let ensemble = document.getElementById("ensemble")


btn.addEventListener("click", function (e) {
    e.preventDefault()
    let ipt1 = document.getElementById("chiffre").value;
    let ipt2 = document.getElementById("chiffre2").value;
    let ipt3 = document.getElementById("valeur").value;
    let resultat = document.getElementById("resultat");
   
    


    if (ipt3 === "+") {

         function calculer(a, b,) {
       
           console.log(a + b);
       
        
         }

     console.log(calculer(+ipt1, +ipt2)) ;            
   

     resultat.innerHTML = `<p class="text-dark fw-bold"> ${+ipt1 + +ipt2} </p>`;
    }
    else if (ipt3 === "-") {
   
        function calculer(a, b,) {
           
               console.log(a - b);
           
            
        }
    
        console.log(calculer(+ipt1, +ipt2)) ;            
       
    
        resultat.innerHTML = `<p class="text-dark fw-bold"> ${+ipt1 - +ipt2} </p>`;


    
    }
    else if (ipt3 === "/") {
   
        function calculer(a, b,) {
           
               console.log(a / b);
           
            
        }
    
        console.log(calculer(+ipt1, +ipt2)) ;            
       
    
        resultat.innerHTML = `<p class="text-dark fw-bold">${+ipt1 / +ipt2} </p>`;


    
    }
    else if (ipt3 === "x") {
   
        function calculer(a, b,) {
           
               console.log(a * b);
           
            
        }
    
        console.log(calculer(+ipt1, +ipt2)) ;            
       
    
        resultat.innerHTML = `<p class="text-dark fw-bold"> ${+ipt1 * +ipt2} </p>`;


    
    }

})











// btn.addEventListener("click", function (e) {
//     e.preventDefault()
//     let ipt1 = document.getElementById("chiffre").value;
//     let ipt2 = document.getElementById("chiffre2").value;
//     let resultat = document.getElementById("resultat");
   
    
//     function calculer(a, b) {
       
//         console.log(a + b)
//     }

//     console.log(calculer(+ipt1, +ipt2))             
   
   
    
//     resultat.innerHTML = `<p class="text-dark fw-bold">Votre calul est ${ipt1} + ${ipt2} = ${+ipt1 + +ipt2} </p>`

// })