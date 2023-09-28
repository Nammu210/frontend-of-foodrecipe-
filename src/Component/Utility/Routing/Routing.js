import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Service from '../../Pages/Service'
import Home from '../../Pages/Home/Home'
import LoginPage from '../../Auth/LoginPage'
import Breakfast from '../../Pages/RecipeSubpages/Breakfast'
import RecipePage from '../../Pages/recipe/RecipePage'
import Search from '../../Pages/searchbar/Search'
import Signin from '../../Auth/Signin'
import Details from '../../Pages/recipe/Details'
import User from '../../Auth/profile/User'
import ARecipe from '../../Auth/addRecipe/ARecipe'
import RecipeBook from '../../Pages/recipe/RecipeBook'

const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Service/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/breakfast" element={<Breakfast/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/recipe' element={<RecipePage/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/saverecipe' element={<RecipeBook/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/addrecipe' element={<ARecipe/>}/>
        </Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default Routing
