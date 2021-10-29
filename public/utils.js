const notes = document.querySelector('#notes')

const addNote = note =>{
    notes.innerHTML += `<div>
                            <h1>${note.title}</h1>
                        </div>
                        <p>${note.description}</p>
    
                    `
}

const loadNotes = (notes) => {
    notes.forEach((note)=>addNote(note))
}