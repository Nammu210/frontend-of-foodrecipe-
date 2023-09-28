import React from 'react'
import { NavLink } from 'react-router-dom';
import './comment.css'

const Comments = () => {
    const comments=[
        {
        
            comment:"What can I use instead of vanilla extract",
            user: "arnaoutretaj",
            recipeName:"Easy Bake Oven Secret...",
            time: "4 Hour ",
          },
          {
            comment: "Tasted fine but the instructions are unclear.It says to grease a 10X15 pan, but you are making a 10 inch tart, that you then cut into wedges... why not just make the recipe for a 10 inch round dish? Also, not sure how I'm supposed to serve thi...",
            user: "denise.mclain066",
            recipeName:"Enchilada Chicken Tart",
            time: "4 Hour",
          },
          {
            comment:
              "I also subbed one cup of beef broth for one cup of wine after 30 mins and also added veggies.Very good!",
            user: "Anonymous ",
            recipeName:"Mahogany Beef Stew",
            time: "5 Hours",
          },
    ]
  return (
    <div>
       <div className="comments-container">
          <div className="comments-section-title">
            <h2>FRESH FROM OUR COMMUNITY</h2>
            <NavLink>View All</NavLink>
          </div>
          <div className="comments-wrapper">
            {comments
              ? comments.map((item, index) => {
                  return (
                    <div className="comments-card" key={index}>
                      <div className="user-name">
                        <img src="https://geniuskitchen.sndimg.com/gk/img/avatar/sushi.png"  alt="icon" />
    
                        <div>
                          {" "}
                          <span className="user">{item.user}</span>
                          <span className="commented-txt"> commented on _</span>
                           <span className="recipeName">{item.recipeName}</span>
                        </div>
                      </div>
                      <div className="comments-txt">{item.comment}</div>
                      <div className="comment-time">
                        <p>{item.time} ago </p>
                      </div>



                     
                    </div>
                  );
                })
              : "No Comments"}
          </div>
        </div>
    </div>
  )
}

export default Comments