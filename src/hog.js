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

  hogHTML() {
    let checked = this.greased == true ? 'checked' : ''
    return `
    <h2>${this.name}</h2>
    <img src='${this.image}' />
    <p>Specialty: ${this.specialty}</p>
    <p>Highest medal achieved: ${this.medal}</p>
    <p>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: ${this.weight}</p>
    <p>Greased: <input data-id="${this.id}" class="toggle" type="checkbox" name="greased" value="greased" ${checked}><br></p>
    <button class="delete" data-id="${this.id}">Delete</button>`
  }

  deleteHog(e) {
    const id = e.target.dataset.id
    fetch(`http://localhost:3000/hogs/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        document.getElementById('hog-container')
          .removeChild(document.getElementById(id))
      })
  }

  greaseToggle(e) {
    const id = e.target.dataset.id
    fetch(`http://localhost:3000/hogs/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        greased: e.target.checked
      })
    })
  }

  render() {
    const hogContainer = document.getElementById('hog-container')
    const hogCard = document.createElement('div')
    hogCard.classList.add('hog-card')
    hogCard.id = this.id
    hogCard.innerHTML += this.hogHTML()
    hogContainer.appendChild(hogCard)
    hogCard.addEventListener('click', e => {
      if (e.target.className.includes('delete')) this.deleteHog(e)
      if (e.target.className.includes('toggle')) this.greaseToggle(e)
    })
  }
}
