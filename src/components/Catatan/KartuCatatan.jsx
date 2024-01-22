import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../../utils";
import parse from "html-react-parser";

const KartuCatatan = ({ note }) => {
  const { id } = note;

  return (
    <div className="note-item">
      <h2 className="note-item__title">
        <Link to={`/notes/${id}`} title={note.title}>
          {note.title}
        </Link>
      </h2>
      <p className="note-item__createdA">{showFormattedDate(note.createdAt)}</p>
      <div className="note-item__body">{parse(note.body)}</div>
    </div>
  );
};

KartuCatatan.propTypes = {
  note: PropTypes.object.isRequired,
};

export default KartuCatatan;

// by: Sarif Hidayatullah