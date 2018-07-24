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
    return `
    <h2>${this.name}</h2>
    <img src='${this.image}' />
    <p>Specialty: ${this.specialty}</p>
    <p>Highest medal achieved: ${this.medal}</p>
    <button class="delete" data-id="${this.id}">Delete</button>`
  }

  deleteHog(e) {
    const id = e.target.dataset.id
    fetch(`http://localhost:3000/hogs/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        console.log('Successfully deleted hog', id)
        document.getElementById('hog-container')
          .removeChild(document.getElementById(id))
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
    })
  }
}