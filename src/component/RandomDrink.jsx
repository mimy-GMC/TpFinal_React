import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const RandomDrink = () => {
  const [category, setCategory] = useState(null);

  useEffect(() => {
    (async () => {
        const categoriesResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");
        const categoriesResponseData = await categoriesResponse.json();
        const randomDrink = categoriesResponseData.drinks[Math.floor(Math.random()*categoriesResponseData.drinks.length)];
        setCategory(randomDrink);
    })(); 
}, []);

  return (
    <section>
      <Link to={`/our_categories`}><h3>Veuillez choisir votre catégories préferée </h3></Link>
      <div className="drinkContainer">
          {category ? (
            <Link to={`/cocktails_by_categories/${category.strCategory.replace(" \/ ", "_")}`}>
              <h3>{category.strCategory}</h3>
            </Link>
          ):(
            <img className="spinner" src={"/images/loading176.gif"} alt={"loading"}/>
          )}
        </div>
    </section>
  );
};

export default RandomDrink;
