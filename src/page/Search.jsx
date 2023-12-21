import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';
import SearchedResult from '../component/SearchedResult';

const Search = () => {

    const { query } = useParams();
    const [searchCocktails, setSearchCocktails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   
    useEffect(() => {
        const fetchSearch = async () => {
            try {
                const searchResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
                const searchResponseData = await searchResponse.json();
                setSearchCocktails(searchResponseData.drinks);

            } 
            catch (error) {
                console.error('Error fetching search results:', error.message);
                setError(error.message);
            } 
            finally {
                setLoading(false);
            }
        };

         fetchSearch();

    }, [query]);

    return (
        <div>
            <Header />
            {loading ? (
                <p>Chargement de la page est en cours...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <SearchedResult searchCocktails={searchCocktails} />
            )}
            <Footer />
        </div>
    );
};

export default Search;