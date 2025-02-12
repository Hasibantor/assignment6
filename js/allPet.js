const allPet = () =>{
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then(res => res.json())
    .then(data => petDisplay(data.pets))
    .catch((error)=>console.log(error))
}
allPet()

const petDisplay =(pets)=>{
    let petCetagoryContainer = document.getElementById('petCetagory')
    pets?.forEach((pet)=>{
        console.log(pet)
        let sectionCreate = document.createElement('div')
        sectionCreate.classList = 'card bg-base-100 w-96 shadow-xl'
        sectionCreate.innerHTML = `
        <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      Shoes!
      <div class="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">Fashion</div>
      <div class="badge badge-outline">Products</div>
    </div>
  </div>
        
        `
        petCetagoryContainer.append(sectionCreate)
        console.log(sectionCreate.innerHTML)
    })
   
}
petDisplay()