import LastFourDrinks from '../component/LastFourDrinks';
import Header from '../component/Header';
import Footer from '../component/Footer';
import RandomDrink from '../component/RandomDrink';

const Accueil = () => {
    return (
    <>
      <Header />
      <main>
      <LastFourDrinks />
      <RandomDrink />
      </main>      
      <Footer />
    </>
  );
};

export default Accueil;

