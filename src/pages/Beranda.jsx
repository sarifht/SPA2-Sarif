import React, { useEffect, useState } from "react";
import SearchComponent from "../components/Indeks/MenuPencarian";
import NoteList from "../components/Catatan/DaftarCatatan";
import EmptyNote from "../components/TidakAda/TidakAda";
import HomePageAction from "../components/Aksi/Bagian/HalamanBeranda";
import useLanguage from "../hooks/Bahasa";
import { getActiveNotes } from "../utils/network-data";
import LoadingIndicator from "../components/Indeks/IndikatorMenunggu";

const HomePage = () => {
  const [dataNotes, setDataNotes] = useState([]);
  const [initData, setInitData] = useState(false);
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const textMainApp = useLanguage("mainApp");
  const textActive = useLanguage("active");

  const initDataNotesAPI = () => {
    getActiveNotes()
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

  const onSearchHandler = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (!initData) {
      initDataNotesAPI();
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
      <h2>{textActive.title}</h2>
      <SearchComponent value={search} onChange={onSearchHandler} />
      {notes.length > 0 && !loading ? <NoteList notes={notes} /> : ""}
      {notes.length === 0 && !loading ? <EmptyNote /> : ""}
      {loading ? <LoadingIndicator /> : ""}
      <HomePageAction />
    </div>
  );
};

export default HomePage;

// by: Sarif Hidayatullah
