import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

// On définit une fonction CocktailDetailsPage.
function CocktailDetailsPage() {

  // On extrait du paramètre d'URL "id" avec useParams.
  const { id } = useParams();

  // On définit l'état cocktail (setCocktail) avec useState:
  const [cocktail, setCocktail] = useState(null);

  const [ingredients, setIngredients] = useState([]);

  // useEffect est utilisé pour effectuer des opérations asynchrones comme des requêtes API.
  useEffect(() => {
    const fetchCocktail = async () => {

      // On gére les erreurs potentielles dans le code suivant avec "try".
      try {
        // On Effectue une requête à l'API "TheCocktailDB" avec l'id extrait de l'URL.
        const cocktailApiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);

        // On Transforme la réponse en JSON, et on le stocke dans "cocktailApi" qui contient tous les données de cocktail.
        const cocktailApi = await cocktailApiResponse.json();

        // On met à jour l'état du composant avec les données du premier cocktail renvoyée par l'API dans la liste des cocktail.
        setCocktail(cocktailApi.drinks[0]);
      } 
      catch (error) {
        console.error("Erreur lors de la récupération du cocktail :", error);
      }
    };

    // Appelez la fonction fetchCocktail.
    fetchCocktail();

    // La dépendance [id] signifie que la fonoction "fetchCocktail"
    // est réexécutée chaque fois que la valeur de "id" change.
  }, [id]); 

  useEffect(() => {
    if (cocktail) {
      const newIngredients = []; 
      for (let i = 1; i <= 15; i++) {
        const ingredient = cocktail[`strIngredient${i}`];
        if (ingredient) {
          newIngredients.push(ingredient);
        } else {
          break; // Arrêtez la boucle si aucun ingrédient n'est trouvé
        }
      }
      setIngredients(newIngredients);
    }
  }, [cocktail]);

  
  return (
    <>
      <Header />
      {cocktail ? (
        <article>
          <h3>{cocktail.strDrink}</h3>

          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />

          <p>Instructions : {cocktail.strInstructions}</p>

          <h4>Ingrédients : </h4>
          <ul>
            {
            ingredients.map((ingredient, index) => 
            (
            <li key={index}>
              <Link to={`/cocktails-by-ingredient/${ingredient}`}>{ingredient}</Link>
            </li>
            ))} 
          </ul>            
    
          <h3>Category: </h3>
          <p>
            <Link to={`/our_categories/${cocktail.strCategory}`}>Voir les cocktails de la catégorie {cocktail.strCategory}
            </Link>
          </p>

          <p>Date de modification : {cocktail.dateModified}</p>
          
          <p>
          <Link to={`/cocktails-by-ingredient/${ingredients[0]}`}>
            Voir les cocktails avec {ingredients[0]}
          </Link>
        </p>          

        </article>
      ) : (
        <p>Pas de cocktail</p>
      )}
      <Footer />
    </>
  );
}

export default CocktailDetailsPage;