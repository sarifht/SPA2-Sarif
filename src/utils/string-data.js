const loginPage = {
  id: {
    title: "Silahkan masuk terlebih dahulu",
    textFooter: "Belum punya akun?",
    linkRegister: "Daftar disini",
  },
  en: {
    title: "Login to use app, please.",
    textFooter: "Don't have an account?",
    linkRegister: "Register here",
  },
};

const registerPage = {
  id: {
    title: "Isi form untuk mendaftar akun.",
    textFooter: "Sudah punya akun?",
    linkRegister: "Masuk disini",
    message: {
      success: "Akun berhasil dibuat. Silahkan masuk.",
    },
  },
  en: {
    title: "Fill the form to register account.",
    textFooter: "Already have an account?",
    linkRegister: "Login here",
    message: {
      success: "User created successfully.",
    },
  },
};

const mainAppPage = {
  id: {
    title: "SPA 2",
    navbar: {
      home: "Beranda",
      archive: "Arsip",
    },
    message: {
      loading: "Load data ...",
      confirm: "Apakah anda yakin ?",
      error: "Terjadi error, coba lagi!",
    },
    add: "Tambah Catatan",
    archived: "Arsipkan",
    Actived: "Active",
    delete: "Hapus",
    cancel: "Batal",
    notFoundPage: "Halaman tidak ditemukan",
  },
  en: {
    title: "SPA 2",
    navbar: {
      home: "Home",
      archive: "Archive",
    },
    message: {
      loading: "Loading...",
      confirm: "Are you sure ?",
      error: "Error, try again!",
    },
    add: "Add",
    archived: "Archive",
    Actived: "Active",
    delete: "Delete",
    cancel: "Cancel",
    notFoundPage: "Page not found",
  },
};

const activePage = {
  id: {
    title: "Catatanku",
    searchPlaceholder: "Cari berdasarkan judul ...",
    empty: "Tidak ada catatan",
  },
  en: {
    title: "My Notes",
    searchPlaceholder: "Search by title ...",
    empty: "Empty notes",
  },
};

const addNotesNewPage = {
  id: {
    titlePlaceholder: "Judul Catatan",
    bodyPlaceholder: "<p><i><u>Ketik isi catatan disini...</u></i></p>",
    message: {
      success: "Berhasil menambahkan catatan!",
    },
  },
  en: {
    titlePlaceholder: "Title Notes",
    bodyPlaceholder: "<p><i><u>Notes Content</u></i></p>",
    message: {
      success: "Successfully add notes!",
    },
  },
};

const detailNotePage = {
  id: {
    notFoundData: "Catatan tidak ditemukan.",
  },
  en: {
    notFoundData: "Not Found",
  },
};

const archivePage = {
  id: {
    title: "Catatan Arsip",
  },
  en: {
    title: "Archived Notes",
  },
};

const stringData = {
  archivePage,
  detailNotePage,
  addNotesNewPage,
  activePage,
  mainAppPage,
  registerPage,
  loginPage,
};

export { archivePage, detailNotePage, addNotesNewPage, activePage, mainAppPage, registerPage, loginPage };

export default stringData;
