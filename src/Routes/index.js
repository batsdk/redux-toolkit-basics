import { Route, Routes } from "react-router-dom"

import { HomePage, SingleMoviesPage, ErrorPage,ShowPage } from "../Pages"

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<SingleMoviesPage />} />
        <Route path="/shows" element={<ShowPage />} />
        <Route path="*" element={<ErrorPage />} />
    </Routes>
    )
}

export default Router