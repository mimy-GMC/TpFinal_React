import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ShowCocktailsInfo = () => {

    const [cocktails, setCocktails] = useState();

    useEffect(() => {
        const fetchGlasses = async () => {
            try {
                const cocktailsInfoResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
                const cocktailsInfoData = await cocktailsInfoResponse.json();
                setCocktails(cocktailsInfoData.drinks);
            } catch (error) {
                console.error("Erreur lors de la récupération des infos sur le cocktail :", error);
            }
        };

        fetchGlasses();
    }, []);


    return (
        <>
            {cocktails ? (
                cocktails.map((cocktail) => {
                    return (
                        <article>
                            <h2 className="title">{cocktail.strDrink}</h2>
                            <Link to={`/our_cocktails/details/${cocktail.idDrink}`}>
                                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                            </Link>
                        </article>
                    )
                })
            ) : (
                <p>La page est en cours de chargement...</p>
            )
            }
        </>
    )
};

export default ShowCocktailsInfo;


