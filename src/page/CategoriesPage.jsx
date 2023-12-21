import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header";

function CategoriesPage() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    (async () => {
      const categoriesResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");
      const categoriesResponseData = await categoriesResponse.json();

      setCategories(categoriesResponseData.drinks);
    })();
  }, []);

  return (
    <>
      <Header />
      <main>
      <Link to="/">Retour à la page d'accueil</Link>
      {categories ? (
        <div>
          {categories.map((category) => {
            return (
                <article key={category.strCategory}>
                  <Link to={`/cocktails_by_categories/${category.strCategory}`}>
                    <h2>{category.strCategory}</h2>
                  </Link>
                </article>
              );
            })}
          </div>
        ) : (
          <p>Les categories sont en cours de chargement....</p>
        )}
      </main>
    </>
  );
}

export default CategoriesPage;