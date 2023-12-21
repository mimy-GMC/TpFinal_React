import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';


// On défini le composant "LastFourDrinks".
const LastFourDrinks = () => {
  const [cocktails, setCocktails] = useState(null);
  
  useEffect(() => {
    const fetchCocktail = async () => {

      try {
        const cocktailsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
        const cocktailsDataResponse = await cocktailsResponse.json()
        const lastFourDrinks = cocktailsDataResponse.drinks.slice(-4);
        // Une fois les données récupérées, elles seront stockées dans l'état drinks (setDrinks).
        setCocktails(lastFourDrinks);
      }
      catch (error) {
        console.error("Erreur lors de la récupération du cocktail :", error);
      }
    };
    
    fetchCocktail();      
  }, []);

  return (
    <section>
        <Link to={`/our_cocktails`}><h3> Voici nos quatre derniers cocktails </h3></Link>
        <div className="drinkContainer">
          {cocktails ? (
            cocktails.map((cocktail) => {
              return (              
                <li key={cocktail.idDrink}>
                  <Link to={`/our_cocktails/details/${cocktail.idDrink}`}>
                    <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                  </Link>
                </li>
              )})
          ):(
            <img className="spinner" src={"/images/loading176.gif"} alt={"loading"}/>
          )}
        </div>
    </section>
  );
};

export default LastFourDrinks;

