import React, {useState} from 'react';
import RecipeDetails from './RecipeDetails';

function MoreRecipes({recipe}) {
  const [show, setShow] = useState(false)

  const {label, image, url, ingredients} = recipe.recipe;
  return( 
    <div className="moreRecipes">
      <h3 className="labelTitle">{label}</h3>
      <br />
      <img src={image} alt={label} />
      <br />
      <a href={url} className="urlTitle">Source </a>
      <br />
      <button className="button" onClick={() => setShow(!show)}>Ingredients</button>
      {show && <RecipeDetails ingredients={ingredients}/>}
    </div>
  )
}

export default MoreRecipes;
