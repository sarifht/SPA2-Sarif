import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import HomePage from "../pages/Beranda";
import ArchivesPage from "../pages/Arsip";
import AddNote from "../pages/Catatan/TambahCatatan";
import DetailNotes from "../pages/Catatan/_id-detail";
import NotFoundPage from "./../pages/NotFoundPage";
import AppMiddleware from "./../middleware/AppMiddleware";
import LoginPage from "../pages/Masuk";
import RegisterPage from "../pages/Daftar";

const SetupRoutes = () =>
  useRoutes([
    {
      path: "/",
      element: (
        <AppMiddleware middleware="auth">
          <HomePage />
        </AppMiddleware>
      ),
    },
    {
      path: "/login",
      element: (
        <AppMiddleware middleware="public">
          <LoginPage />
        </AppMiddleware>
      ),
    },
    {
      path: "/register",
      element: (
        <AppMiddleware middleware="public">
          <RegisterPage />
        </AppMiddleware>
      ),
    },
    {
      path: "/archives",
      element: (
        <AppMiddleware middleware="auth">
          <ArchivesPage />
        </AppMiddleware>
      ),
    },
    {
      path: "/notes",
      element: (
        <AppMiddleware middleware="auth">
          <Navigate to="/" replace />
        </AppMiddleware>
      ),
    },
    {
      path: "/notes/new",
      element: (
        <AppMiddleware middleware="auth">
          <AddNote />
        </AppMiddleware>
      ),
    },
    {
      path: "/notes/:id",
      element: (
        <AppMiddleware middleware="auth">
          <DetailNotes />
        </AppMiddleware>
      ),
    },
    {
      path: "/*",
      element: (
        <AppMiddleware middleware="auth">
          <NotFoundPage />
        </AppMiddleware>
      ),
    },
  ]);

export default SetupRoutes;

// by: Sarif Hidayatullah
