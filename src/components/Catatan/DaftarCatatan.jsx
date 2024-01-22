import React from "react";
import PropTypes from "prop-types";
import NoteCard from "./KartuCatatan";

const DaftarCatatan = ({ notes }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
};

DaftarCatatan.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default DaftarCatatan;

// by: Sarif Hidayatullah
