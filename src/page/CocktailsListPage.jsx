import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';

// On crée une fonction de chargement de page
const CocktailsListPage = () => {
  const [cocktails, setCocktails] = useState(null);

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const cocktailsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
        const cocktailsResponseData = await cocktailsResponse.json();
        setCocktails(cocktailsResponseData.drinks);
      } catch (error) {
        console.error("Erreur lors de la récupération des cocktails :", error);
      }
    };
  
    if (!cocktails) {
      fetchCocktails();
    }
  }, [cocktails]);
  

  return (
    <>
      <Header />
      <h2 className="title">Tous nos cocktails</h2>
      <section>
        {cocktails ? (
          cocktails.map((cocktail) => {
            return (
              <article key={cocktail.idDrink}>
                <div className="cocktailDetails">
                  <h2>{cocktail.strDrink}</h2>
                </div>

                <Link to={`/our_cocktails/details/${cocktail.idDrink}`}>
                  <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                </Link>

                <div className="cocktailDetails">
                  <p>{cocktail.strInstructions}</p>
                </div>

              </article>
            )
            })) : (
             <p>Désolé, il n'y a plus de cocktail.</p>
          )
        }
      </section>
      <Footer />
    </>
  )
};

export default CocktailsListPage;
