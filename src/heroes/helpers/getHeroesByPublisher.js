import { heroes } from "../data/heroes";


export const getHerosByPublischer = ( publisher ) => {

  const validPublisher = ['Marvel Comics', 'DC Comics'];

  if (!validPublisher.includes ( publisher ) ) {

    throw new Error (`${ publisher } is not a valid publisher` );

  }
  
  return heroes.filter( heroe => heroe.publisher === publisher );

}
