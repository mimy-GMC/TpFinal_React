
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

const CocktailsByCategory = () => {
  const { category } = useParams();
  const [cocktails, setCocktails] = useState(null);

  useEffect(() => {
    const fetchCocktailsByCategory = async () => {
      try {
        const CocktailsByCategoryResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
        const CocktailsByCategoryData = await CocktailsByCategoryResponse.json();
        setCocktails(CocktailsByCategoryData.drinks);
      } catch (error) {
        console.error("Erreur lors de la récupération des cocktails par catégorie :", error);
      }
    };

    if (!cocktails) {
      fetchCocktailsByCategory();
    }
  }, [category, cocktails]);

  return (
    <>
      <Header />
      <main>
        <Link to="/our_categories">Retour à la liste des catégories</Link>
        <h2>Cocktails de la catégorie {category}</h2>
        <div className="itemsBox">
          {cocktails ? (
            cocktails.map((cocktail) => (
              <article key={cocktail.idDrink}>
                <h3>{cocktail.strDrink}</h3>
                <Link to={`/our_cocktails/details/${cocktail.idDrink}`}>
                  <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                </Link>
                <div className="cocktailDetails">
                  <p>{cocktail.strInstructions}</p>
                </div>
              </article>
            ))
          ) : (
            <p>Les cocktails sont en cours de chargement....</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CocktailsByCategory;
