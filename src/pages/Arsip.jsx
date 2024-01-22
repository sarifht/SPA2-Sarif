import React, { useEffect, useState } from "react";
import NoteList from "../components/Catatan/DaftarCatatan";
import EmptyNote from "../components/TidakAda/TidakAda";
import HomePageAction from "../components/Aksi/Bagian/HalamanBeranda";
import SearchComponent from "../components/Indeks/MenuPencarian";
import useLanguage from "../hooks/Bahasa";
import { getArchivedNotes } from "../utils/network-data";
import LoadingIndicator from "../components/Indeks/IndikatorMenunggu";

const ArchivesPage = () => {
  const [dataNotes, setDataNotes] = useState([]);
  const [initData, setInitData] = useState(false);
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const textArchive = useLanguage("archive");
  const textMainApp = useLanguage("mainApp");

  const onSearchHandler = (event) => {
    setSearch(event.targe.value);
  };

  const initDataAPI = () => {
    getArchivedNotes()
      .then((res) => {
        if (!res.error) {
          setDataNotes(res.data);
          setNotes(res.data);
          setInitData(true);
          setLoading(false);
        }
      })
      .catch(() => alert(textMainApp.message.error));
  };

  useEffect(() => {
    if (!initData) {
      initDataAPI();
    }

    if (initData) {
      let dataNoteTemporary = [...dataNotes];
      if (search !== "") {
        dataNoteTemporary = dataNoteTemporary.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()));
      }
      setNotes(dataNoteTemporary);
    }
  }, [search]);

  return (
    <div className="homepage">
      <h2>{textArchive.title}</h2>
      <SearchComponent value={search} onChange={onSearchHandler} />

      {notes.length > 0 && !loading ? <NoteList notes={notes} /> : ""}
      {notes.length === 0 && !loading ? <EmptyNote /> : ""}
      {loading ? <LoadingIndicator /> : ""}
      <HomePageAction />
    </div>
  );
};

export default ArchivesPage;

// by: Sarif Hidayatullah
