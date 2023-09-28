import React from 'react'
import './home.css'

import Poster from './poster/Poster'
import Craving from './craving/Craving'
import Explore from './explore/Explore'
import Trending from './trending/Trending'
import Miss from './Miss/Miss'
import Ideas from './ideas/Ideas'
import PeelPeach from './peaches/PeelPeach'
import SearchBar from '../../Footer/SearchBar'
import Comments from '../recipe/CommentsFIle/Comment'

const Home = () => {
  return (
    <>
    <Poster/>
    <div className='Home-page'>
      <div className='addvertise'><h1 className='pile'> Advertisement</h1> 
      </div>
      {/* <div className='comments-section'>
        <div className='heading-btn'>
        <div className='comments-heading'>Fresh from our community</div>
        <NavLink to="/comments" className="allcmt-btn">View All</NavLink>
        </div>
        <div className='comments'>
          <div className="user-review">
            <span className="user-content">
              <img
                src="https://geniuskitchen.sndimg.com/gk/img/avatar/sushi.png"
                alt="img"
                className="user-icon "
              />
              <p className="text-user">
                <span className="username">arnaoutretaj </span>
                 asked a question about
                <span className="username text-recipe"> 
                   {" "}Easy Bake Oven Secret...
                </span>
              </p>
            </span>
            

            <p className="text-comment"><h3>What can I use instead of vanilla extract</h3></p>

            <h3 className="time-cook">4 Hour Ago</h3>
            <h3 className="comment-reply">Reply</h3>

          </div> <div className="user-review">
            <span className="user-content">
              <img
                src="https://geniuskitchen.sndimg.com/gk/img/avatar/pasta.png"
                alt="img"
                className="user-icon "
              />

              <p className="text-user">
                <span className="username">denise.mclain066 </span>
                 reviewed
                <span className="username text-recipe"> 
                   {" "}Enchilada Chicken Tart
                </span>
                <br/>
                <i class="fas fa-star filled"></i>   <i class="fas fa-star filled"></i>   <i class="fas fa-star filled"></i>   <i class="fas fa-star empty"></i>   <i class="fas fa-star empty"></i>
              </p>
            </span>
            <br/>
            <p className="text-comment"><h4>Tasted fine but the instructions are unclear.It says to grease a 10X15 pan, but you are making a 10 inch tart, that you then cut into wedges... why not just make the recipe for a 10 inch round dish? Also, not sure how I'm supposed to serve thi...</h4></p>

            <h3 className="time-cook">4 Hour Ago</h3>
            <h3 className="comment-reply">Reply</h3>

          </div>
          <div className="user-review">
            <span className="user-content">
              <img
                src="https://graph.facebook.com/v6.0/10222792240546871/picture?type=square"
                alt="img"
                className="user-icon "
              />
              <p className="text-user">
                <span className="username">Anonymous </span>
                tweaked
                <span className="username text-recipe"> 
                   {" "}Mahogany Beef Stew
                </span>
              </p>
            </span>
            <br/>
            <p className="text-comment"><h3>I also subbed one cup of beef broth for one cup of wine after 30 mins and also added veggies.Very good!</h3></p>
            <h3 className="time-cook">5 Hour Ago</h3>
            <h3 className="comment-reply">Reply</h3>

          </div>
          </div>
      </div> */}

<Comments/>
      <Craving/>
      <Explore/>
      <div className="ad-explore"> <h1 className='pile'> Advertisement</h1></div>
      <br/>
      <Trending/>
      <Miss/>
      <Ideas/>
      <div className="ad-idea"><h1 className='pile'> Advertisement</h1></div>
      <PeelPeach/>
      <br/>
      <SearchBar/>
    </div>
    </>
  )
}

export default Home
