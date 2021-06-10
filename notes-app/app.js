const addBtn = document.getElementById('add');
const notesEl = document.querySelector('.notes');
const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
    notes.forEach((note) => {
        if (note != "") {
            addNote(note);
        }
    })
}

function addNote(text = '') {
    const note = document.createElement('div');
    note.classList.add("note");
    note.innerHTML= `
        <div class="toolbox">
            <button class="save"><i class="fas fa-save"></i></button>
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash"></i></button>
        </div>
        <div class="main ${text ?  "" : "hidden"}" ><pre>${text}</pre></div>
        <textarea class="input-text ${text ?  "hidden" : ""}" ></textarea>`; 

    notesEl.appendChild(note);
    const saveBtn = note.querySelector('.save');
    const editBtn = note.querySelector('.edit');
    const deleteBtn = note.querySelector('.delete');
    const EditEl = note.querySelector('.input-text');
    const SaveEl = note.querySelector('.main');

    deleteBtn.addEventListener('click', () => {
        note.remove();
        updateLS();
    })

    editBtn.addEventListener('click', () => {
        SaveEl.classList.add("hidden");
        EditEl.classList.remove("hidden");
        EditEl.value = note.querySelector('pre').innerHTML;
    })

    saveBtn.addEventListener('click', () => {
        SaveEl.classList.remove("hidden");
        EditEl.classList.add("hidden");
        note.querySelector('pre').innerHTML = EditEl.value;
        updateLS();
    })
}

addBtn.addEventListener('click', () => { addNote() });

function updateLS() {
    const allnotes = document.querySelectorAll('pre');
    const notes = [];
    
    allnotes.forEach((note) => {
        if (note.innerHTML !=  "") {
            notes.push(note.innerHTML)
        }
    });
    localStorage.setItem("notes", JSON.stringify(notes));
}