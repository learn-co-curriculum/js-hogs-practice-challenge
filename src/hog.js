class Hog {
  constructor(id, name, specialty, greased, weight, medal, image){
    this.id = id
    this.name = name
    this.specialty = specialty
    this.greased = greased
    this.weight = weight
    this.medal = medal
    this.image = image
    this.render()
  }

  delete(e){
    const id = e.target.dataset.id
    fetch(`http://localhost:3000/hogs/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(()=>{
        e.target.parentElement.remove()
    })
  }

  greaseToggle(e){
    console.log("grease")
  }





  render(){
    const hogContainer = document.getElementById('hog-container')
    const hogCard = document.createElement('div')
    const checked = this.greased ? 'checked' : ''
    hogCard.classList.add('hog-card')
    hogCard.id = this.id
    hogCard.innerHTML = `
        <h2>${this.name}</h2>
        <img src="${this.image}" />
        <p>Specialty: ${this.specialty}</p>
        <p>Highest Medal Achievied: ${this.medal}</p>
        <p>Weight: ${this.weight}</p>
        <p>Greased: <input type="checkbox" class="toggle" ${checked} /></p>
        <button data-id="${this.id}" class="delete">DELETE PIG? :-(</button>
    `
    hogContainer.appendChild(hogCard)
    hogCard.addEventListener('click', e => {
        if (e.target.className === 'delete')this.delete(e)
        if (e.target.className === 'toggle') this.greaseToggle(e)

    })
  }

}