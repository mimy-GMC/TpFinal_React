import { Link } from "react-router-dom";

// On déclare "CocktailsCart" qui prend une prop "cocktailToDisplay."
// Cette prop contient les données d'un cocktail que le composant doit afficher.
function CocktailsCart ({ cocktailToDisplay }) {

// On déclare une fonction (async) appelée handleCocktailDelete. 
// Cette fonction est utilisée pour gérer la suppression d'un cocktail. 
  const handleCocktailDelete = async (event, id) => {

    // Et effectue une requête HTTP de type DELETE à l'API "TheCocktailDB" 
   // pour supprimer un cocktail spécifique en utilisant l'ID du cocktail.
    
   await fetch(`https://www.thecocktaildb.com/api/json/v1/1/fake-delete.php?i=${id}`, {
      method: "DELETE",
    });
  };

  return (
    <article className="cocktail-card">

        {/* Affiche le nom du cocktail.*/}
      <h2>{cocktailToDisplay.strDrink}</h2>

      {/* Affiche une image du cocktail avec une classe CSS "cocktail-card-img".*/}
      <img className="cocktail-card-img" src={cocktailToDisplay.strDrinkThumb} alt={cocktailToDisplay.strDrink} />

      {/* On utilise "Link" pour créer un lien vers la page de détails du cocktail. L'URL inclut l'ID du cocktail.*/}
      <Link to={`/cocktails/details/${cocktailToDisplay.idDrink}`}>Voir le détail du cocktail</Link>

      {/* On créé un bouton qui, lorsqu'il est cliqué.*/}
      <button onClick={(event) => {

            // Il déclenche la fonction handleCocktailDelete pour supprimer le cocktail.
          handleCocktailDelete (event, cocktailToDisplay.idDrink);
        }}>
        Supprimer le cocktail
        </button>
    </article>
  );
}

export default CocktailsCart;

 