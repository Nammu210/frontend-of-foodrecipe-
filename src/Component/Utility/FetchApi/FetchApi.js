import axios from "axios";
const fetchRecipe = async (query) => {
  try {
    const res = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=177447bf&app_key=4fc2078f8be2794a9ccef24c13098344&type=public`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchRecipeDetails = async (query) => {
  try {
    const res = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=177447bf&app_key=4fc2078f8be2794a9ccef24c13098344&type=public`
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchRecipe, fetchRecipeDetails };
