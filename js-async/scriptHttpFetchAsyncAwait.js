const sectionNotes = document.querySelector("#notas");
const newNote = document.querySelector("#novaNota");

const addNotes = (notas = []) => {
    notas.forEach(nota => {
        const p = document.createElement("p");
        p.innerHTML = nota.text;
        sectionNotes.appendChild(p);
    });
}

const getNotes = async () => {
    try {
        const response = await fetch("http://localhost:3333/notes");
        const json = await response.json();

        addNotes(json);
        // const resolves = await Promise.all([new Promise(), new Promise]);

    } catch (error) {
        if (error.response) {
            return alert("Bad Request")
        }
        alert("Verifique a internet")
    } finally {
        console.log("finalizou");
    }
}

const createNote = async (event) => {
    event.preventDefault();

    const body = JSON.stringify({ text: newNote.value });
    const response = await fetch("http://localhost:3333/notes", {
        method: "POST",
        body,
        headers: {
            "Content-type": "application/json",
        }
    })

    const json = await response.json();

    addNotes([json]);
    event.target.reset();
}

getNotes();
