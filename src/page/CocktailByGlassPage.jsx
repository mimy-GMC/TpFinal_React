import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Header from '../component/Header';
import Footer from '../component/Footer';
import ShowCocktailsInfo from '../component/ShowCocktailsInfo';

const CocktailsByGlass  = () => {

    const { glassName } = useParams();
    const [cocktails, setCocktails] = useState(null);

    useEffect(() => {
        const fetchGlasses = async () => {
            try {
                const glassNameFormatted = glassName.replace("_", "\/");
                const cocktailsByGlassResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glassNameFormatted}`);
                const cocktailsByGlassResponseData = await cocktailsByGlassResponse.json();
                setCocktails(cocktailsByGlassResponseData.drinks);
            }  
            catch (error) 
            {
              console.error("Erreur lors de la récupération des cocktails par verres :", error);
            }
        };

        fetchGlasses();
    }, [glassName]);

    return (
        <>
          <Header />
          <main>
            <h3>Tous les cocktails sont servis dans un {glassName.replace("\/", "_")}</h3>    
            <div className="itemsBox">
                <ShowCocktailsInfo />
            </div>
          </main>
          <Footer />
        </>
      );
};

export default CocktailsByGlass;