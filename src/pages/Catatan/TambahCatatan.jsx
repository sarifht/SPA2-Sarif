import { ContentState, EditorState, convertFromHTML, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import AddNewNoteSection from "../../components/Aksi/Bagian/BagianTambahCatatan";
import useLanguage from "../../hooks/Bahasa";
import useInput from "../../hooks/Masukkan";
import { addNote } from "../../utils/network-data";

const AddNote = () => {
  const navigate = useNavigate();
  const textApp = useLanguage("mainApp");
  const textLangAdd = useLanguage("addNotesNew");

  const [title, onTitleChangeHandler] = useInput("");
  const [bodyNote, setBodyNote] = useState(EditorState.createWithContent(ContentState.createFromBlockArray(convertFromHTML(textLangAdd.bodyPlaceholder))));

  const onChangeEditorHandler = (body) => {
    setBodyNote(body);
  };

  const onSaveNewNote = () => {
    const body = draftToHtml(convertToRaw(bodyNote.getCurrentContent()));
    addNote({ title, body: body })
      .then((res) => {
        if (!res.error) {
          console.log(title, body);
          alert(textLangAdd.message.success);
          navigate("/");
        }
      })
      .catch(() => {
        alert(textApp.message.error);
      });
  };

  return (
    <div className="add-new-page">
      <div className="add-new-page__input">
        <input type="text" className="add-new-page__input__title" placeholder={textLangAdd.titlePlaceholder} value={title} onChange={onTitleChangeHandler} style={{ marginBottom: "12px" }} />
        <Editor editorState={bodyNote} toolbarClassName="toolbarClassName" wrapperClassName="wrapperClassName" editorClassName="editorClassName" onEditorStateChange={onChangeEditorHandler} />
      </div>
      <AddNewNoteSection onSaveNote={onSaveNewNote} />
    </div>
  );
};

export default AddNote;

// by: Sarif Hidayatullah
