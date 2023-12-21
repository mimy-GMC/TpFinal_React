
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = event => {
    setMessage(event.target.value);
  }

  const isInputEmpty = () => {
    return message === '';
  }

  const handleSearch = event => {
    event.preventDefault();
    if (!isInputEmpty()) {
      navigate("/search/" + message);
    }
  }

  return (
    <>
      <header>
        <nav>
          <Link to="/"><h1>Accueil</h1></Link>
          <ul>
            <Link to="/our_cocktails"><li>Cocktails</li></Link>
            <Link to="/our_categories"><li>Categories</li></Link>
            <Link to="/the_ingredients"><li>Ingredients</li></Link>
            <Link to="/glasses"><li>Glasses</li></Link>
          </ul>
          <form onSubmit={handleSearch}>
            <input id="searchInput" onChange={handleChange} value={message} type='text' placeholder='Search Cocktails' />
            <button disabled={isInputEmpty()}>Search</button>
          </form>
        </nav>
      </header>
    </>
  )
}

export default Header;

