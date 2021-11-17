import React from "react";
import notes from "../notes.js";

console.log(notes[0]);

function Note () {
    return <div className="note">
        <h1>Para vos Tomás!</h1>
        <p>Por ser tan pito corto forro de mierda</p>
    </div>
}

export default Note;