import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from 'query-string';
import { getHerosByName } from "../helpers";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {

  const navigate = useNavigate ();

  const location = useLocation ();

  const { q = '' } = queryString.parse ( location.search )

  const heroes = getHerosByName ( q );

  const { searchText, onInputChange } = useForm ({
    searchText: q
  });

  const onSearchSumit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 2) return;

    navigate(`?q=${ searchText }`);

  }
  return (
    <>
      <h1>SearchPage</h1>
      <hr />
      
      <div className="row">
        <div className="col-5">
          <h4>searching</h4>
          <hr />
          <form onSubmit={ onSearchSumit }>
          <input 
            type="text"
            placeholder="search a hero"
            className="form-control"
            name="searchText"
            autoComplete="off"
            value={ searchText }
            onChange={ onInputChange }
          />
          <button className="btn btn-outline-primary mt-4">
            Search
          </button>
          </form>
        </div>
          
        <div className="col-7 " >
          <h4>Result</h4>
          <hr />

          {
            ( q === '' )
              ? <div className="alert alert-primary"> Search a Hero </div>
              : ( heroes.length === 0 )
              && <div className="alert alert-danger"> No Hero With hero <b> { q } </b> </div>
          }

          {
            heroes.map ( hero => (
              <HeroCard key={ hero.id } {...hero} />
            ))
          }
        </div>
      </div>

      

    </>
  )
}
