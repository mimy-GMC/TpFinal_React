import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

const IngredientsPage = () => {
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const ingredientsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");
        const ingredientsResponseData = await ingredientsResponse.json();
        setIngredients(ingredientsResponseData.drinks);
      } 
      catch (error) 
      {
        console.error("Erreur lors de la récupération des ingrédients :", error);
      }
    };
    if (!ingredients) {
      fetchIngredients();
    }
  }, [ingredients]);

  return (
    <>
      <Header />
      <h2 className="title">Tous nos ingréients</h2>
        <div className="itemsBox">
          {ingredients ? (
            ingredients.map((ingredient) => {
              return (
                <article>
                  <Link to={`/the_ingredients/${ingredient.strIngredient1.replace("\/", "_")}`}>
                    <img src={`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}gin-Medium.png`} alt={ingredient.strIngredient1} />
                    <h3>{ingredient.strIngredient1}</h3>
                  </Link>
                </article>
              )
          })) : (
          <p>Les ingrédients sont en cours de chargement....</p>
          )}
        </div>
      <Footer />
    </>
  );
};

export default IngredientsPage;