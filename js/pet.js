const petName = () =>{
    fetch('https://openapi.programming-hero.com/api/peddy/pet/1')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch((error)=>console.log(error))
}


