import { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from '../component/Footer';
import { Link } from 'react-router-dom';

const GlassPage = () => {
  const [glasses, setGlasses] = useState(null);

  useEffect(() => {
    const fetchGlasses = async () => {
      try {
        const glassResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list");
        const glassResponseData = await glassResponse.json();
        setGlasses(glassResponseData.drinks);
      } 
      catch (error) 
      {
        console.error("Erreur lors de la récupération des verres :", error);
      }
    };

    if (!glasses) {
      fetchGlasses();
    }
  }, [glasses]);

  return (
    <>
      <Header />
      <h2 className="title">Voici nos verres</h2>
      <section>
        {glasses ? (
          glasses.map((glass) => {
            return (
              <article>
                <Link to={`/glasses/${glass.strGlass.replace(" ", "_")}`}>
                  <h3>{glass.strGlass}</h3>
                </Link>
              </article>
            )
          })) : (
            <p>La page des verres est en cours de chargement...</p>
          )}
      </section>
      <Footer />
    </>
  );
};

export default GlassPage;