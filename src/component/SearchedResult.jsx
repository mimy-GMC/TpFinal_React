import { Link } from "react-router-dom";

const SearchedResult = ({ searchCocktails }) => {
  return (
    <>
      {searchCocktails && searchCocktails.length > 0 ? (
        <div className="itemsBox">
          {searchCocktails.map((cocktail) => (
            <article key={cocktail.idDrink}>
              <h3>{cocktail.strDrink}</h3>
              <Link to={`/our_cocktails/details/${cocktail.idDrink}`}>
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
              </Link>
              <div className="cocktailDetails">
                <p>{cocktail.strInstructions}</p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <article>
          <div className="cocktailDetails">
            {searchCocktails === null ? (
              <p>Une erreur s'est produite lors de la recherche. Veuillez réessayer plus tard.</p>
            ) : (
              <p>Aucun résultat trouvé. Veuillez retaper!</p>
            )}
          </div>
        </article>
      )}
    </>
  )
};

export default SearchedResult;
