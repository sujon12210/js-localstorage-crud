const list = document.getElementById('list');

function getNotes(){
  return JSON.parse(localStorage.getItem('notes')) || [];
}

function saveNotes(notes){
  localStorage.setItem('notes', JSON.stringify(notes));
}

function render(){
  const notes = getNotes();
  list.innerHTML = '';

  notes.forEach((note, index)=>{
    const li = document.createElement('li');
    li.innerText = note;

    const btn = document.createElement('button');
    btn.innerText = 'X';
    btn.onclick = () => removeNote(index);

    li.appendChild(btn);
    list.appendChild(li);
  });
}

function addNote(){
  const input = document.getElementById('note');
  if(input.value === '') return;

  const notes = getNotes();
  notes.push(input.value);
  saveNotes(notes);
  input.value = '';
  render();
}

function removeNote(index){
  const notes = getNotes();
  notes.splice(index, 1);
  saveNotes(notes);
  render();
}

render();
