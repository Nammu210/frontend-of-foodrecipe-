import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchRecipeDetails } from "../../Utility/FetchApi/FetchApi";
import "./details.css";
import { NavLink } from "react-router-dom";
import { BsCamera, BsDownload, BsSave } from "react-icons/bs";
import { BsPrinter } from "react-icons/bs";
import { BsShare } from "react-icons/bs";
import SearchRecipe from "../../Footer/SearchRecipe";
import axios from "axios";
import { toast } from "react-toastify";
import { host } from "../../Utility/api";


const Details = () => {
  
  // const Nav = useNavigate();

  const [data, setData] = useState(null);

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const query = queryParams.get("q");

  console.log(query);
  const handleSaveRecipe = (recipe) => {
    console.log(recipe, "recipe from details");
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");
    if (token) {
      axios.post(`${host}/recipe/saverecipe/`, { email, recipe }).then((res) => {
        toast.success(`recipes added to saves`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
    } else {
      toast.info(`Please Login first`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  useEffect(() => {
    fetchRecipeDetails(query).then((res) => {
      // console.log(res);
      setData(res.hits);
    });
  }, [query]);
  // console.log(data);
  return (
    <>
      <div className="yellow-container">
        <div className="oo">
          {/* <NavLink  onClick={(Nav(-1))}>PREVIOUS RECIPE</NavLink>
          <NavLink to="/details?q=Slow%20Cooker%20Balsamic%20Roast%20Beef%20French%20Dip%20Sandwich%20recipes">NEXT RECIPE</NavLink> */}
        </div>
      </div>
      {data ? (
        <div className="detail-main-container">
          <div className="detail-wrapper">
            <div className="title-wrapper">
              <p>
                <NavLink>Recipe</NavLink> \
                <NavLink>{data[0].recipe.dishType}</NavLink>
              </p>
              <h2>{data[0].recipe.label}</h2>
              <p></p>
            </div>

            <div className="submitted-wrapper">
              <div>
                <i class="fa-solid fa-user" id="profile"></i>
                <p>Submitted By {data[0].recipe.source}</p>
              </div>
            </div>

            <div className="save-download-wrapper" >
              <div className="saved-print-wrapper" >
                <button className="up"><BsSave 
                
                onClick={() => {
                  handleSaveRecipe(data[0].recipe);
                }}
              /></button>
                
              
                <BsDownload />
                <BsPrinter />
                <BsShare />
              </div>

              <div className="i-made-this-wrapper">
                <BsCamera />
                <p>I made This</p>
              </div>
            </div>

            <div className="imgs-wrapper">
              <div className="big-img-wrapper">
                <img
                  src={data[0].recipe.images.REGULAR.url}
                  alt={data[0].recipe.label}
                />
              </div>

            
            </div>

            <div className="ready-in-wrapper">
              <div className="ready-box">
                <p>Ready In:{data[0].recipe.totalTime} min</p>
                <p> Yeilds:{data[0].recipe.yield}</p>
                <p>Ingredients:{data[0].recipe.ingredients.length}</p>
                <p>Serves:{data[0].recipe.yield}</p>
              </div>
              <div className="nutrition-box">
                <p>Nutrition information</p>
              </div>
            </div>

            <div className="direction-ingredient-wrapper">
              <div className="direction-wrapper">
                <h3>DIRECTIONS</h3>
                <ol>
                  <li>
                    Wash and prep all your ingredients, such as chopping
                    vegetables, measuring out spices, and marinating meats.
                    Having everything ready makes the cooking process smoother.
                  </li>

                  <li>
                    Preheat your oven, stovetop, grill, or any cooking surface
                    you'll be using to the specified temperature. This ensures
                    even cooking.
                  </li>

                  <li>
                    Use the appropriate pots, pans, and utensils for the recipe.
                    Nonstick pans, cast iron skillets, and oven-safe dishes are
                    examples of different cookware for various purposes.
                  </li>

                  <li>
                    Cook ingredients in the order specified in the recipe. This
                    often means starting with aromatics (like onions and garlic)
                    before adding proteins, vegetables, or grains.
                  </li>

                  <li>
                    Stir or toss ingredients periodically to ensure even cooking
                    and prevent sticking or burning. Use a spatula, wooden
                    spoon, or tongs as needed.
                  </li>

                  <li>
                    When the dish is ready, carefully plate it, arranging the
                    food attractively. Garnish with fresh herbs, grated cheese,
                    or other finishing touches, as specified.
                  </li>

                  <li>
                    Serve the dish immediately, if possible, while it's hot and
                    at its best. Certain dishes may require resting time before
                    serving.
                  </li>
                  <li>
                    After cooking, wash dishes, pots, pans, and utensils
                    promptly. This ensures an easier cleanup and maintains the
                    cleanliness of your kitchen.
                  </li>
                </ol>
              </div>
              <div className="ingredient-wrapper">
                <h3>INGREDIENTS</h3>
                {data[0].recipe.ingredientLines.map((item, index) => {
                  return <p>{item}</p>;
                })}
              </div>
            </div>
            {data.length > 2 && (
              <div className="also-love-container">
                <h3>YOU'LL ALSO LOVE</h3>
                <div className="also-wrapper">
                  {data &&
                    data.splice(1, 4).map((item, index) => {
                      return (
                        <div className="also-box">
                          <NavLink to={`/details?q=${item.recipe.label}`}>
                            <div className="also-img ">
                              {" "}
                              <img src={item.recipe.image} alt="img" />
                            </div>

                            <div className="also-title">
                              {/* <p>{item.recipe.label}</p> */}
                            </div>
                          </NavLink>
                        </div>
                      );
                    })}
                </div>
              </div>
            )}
          </div>

          <div className="ad-container">
            <div className="social-icons"></div>
            <div className="ad-wrapper ad">
           
              
            </div>
          </div>
        </div>
      ) : (
        "Loading"
      )}
      <SearchRecipe />
    </>
  );
};

export default Details;