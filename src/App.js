import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import CocktailsListPage from "./page/CocktailsListPage"
import CategoriesPage from "./page/CategoriesPage";
import IngredientsPage from "./page/IngredientsPage";
import GlassPage from "./page/GlassPage";
import CocktailDetailsPage from "./page/CocktailDetailsPage";
import CocktailByCategoryPage from "./page/CocktailByCategoryPage";
import Search from './page/Search';
import CocktailByGlassPage from "./page/CocktailByGlassPage";

import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our_cocktails" element={<CocktailsListPage />} />
        <Route path="/our_categories" element={<CategoriesPage />} />
        <Route path="/the_ingredients" element={<IngredientsPage />} />        
        <Route path="/glasses" element={<GlassPage />} />
        <Route path="/our_cocktails/details/:id" element={<CocktailDetailsPage />} />
        <Route path="/cocktails_by_categories" element={<CocktailByCategoryPage/>} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/cocktails_by_glasses/:glassName" element={<CocktailByGlassPage/>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;