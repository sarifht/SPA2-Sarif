import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import NotFoundMessage from "../../components/TidakAda/PesanTidakDitemukan";
import DetailNoteSection from "../../components/Aksi/Bagian/BagianDetailCatatan";
import { HiArrowLeft } from "react-icons/hi";
import { showFormattedDate } from "../../utils";
import parser from "html-react-parser";
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../../utils/network-data";
import useLanguage from "../../hooks/Bahasa";
import LoadingIndicator from "../../components/Indeks/IndikatorMenunggu";

const DetailNotes = () => {
  const [note, setNote] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const textLangApp = useLanguage("mainApp");
  const textLangDetail = useLanguage("detailNote");

  const onArchiveHandler = () => {
    if (confirm(textLangApp.message.confirm)) {
      let methods = null;
      let navigateTo = "/";
      if (note.archived) {
        methods = unarchiveNote(id);
        navigateTo = "/archives";
      } else {
        methods = archiveNote(id);
      }
      methods
        .then((res) => {
          if (!res.error) {
            navigate(navigateTo);
          }
        })
        .catch(() => {
          alert(textLangApp.message.error);
        });
    }
  };

  const onDeleteHandler = () => {
    if (confirm(textLangApp.message.confirm)) {
      deleteNote(id)
        .then((res) => {
          if (!res.error) {
            navigate("/");
          }
        })
        .catch(() => {
          alert(textLangApp.message.error);
        });
    }
  };

  useEffect(() => {
    getNote(id)
      .then((res) => {
        if (!res.error) {
          setNote(res.data);
        } else {
          alert(textLangDetail.notFoundData);
        }
        setLoading(false);
      })
      .catch(() => {
        alert(textLangApp.message.error);
      });
  }, [id]);

  return (
    <div className="detail-page">
      {"id" in note && !loading ? (
        <>
          <h4 className="detail-page__title">
            <Link to="/" title="Kembali">
              {" "}
              <HiArrowLeft />{" "}
            </Link>{" "}
            {note.title}
          </h4>
          <p className="detail-page__createdAt">{showFormattedDate(note.createdAt)}</p>
          <div className="detail-page__body">{parser(note.body)}</div>
          <DetailNoteSection archived={note.archived || false} onArchive={onArchiveHandler} onDelete={onDeleteHandler} />
        </>
      ) : (
        <NotFoundMessage />
      )}

      {loading ? <LoadingIndicator /> : ""}
    </div>
  );
};

export default DetailNotes;

// by: Sarif Hidayatullah
