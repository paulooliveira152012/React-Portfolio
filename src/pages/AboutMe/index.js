import React from "react";
import "./style.css";
import avatar from "../../assets/images/avatar.jpg";

function AboutMe() {
    return (
        <section class="aboutMe" id="aboutMe">

        
          <h2>About Me</h2>
        
        <div class="container">
          <article>
            
             <img src={avatar} alt="avatar" className="image" />
            
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              veritatis debitis autem ipsa natus voluptatum aut velit? Sapiente,
              est? In recusandae autem at velit officiis nostrum beatae eius
              eaque atque. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptate dolores rerum voluptates praesentium distinctio
              sunt. Inventore beatae necessitatibus nobis facilis, officia quia
              culpa ducimus asperiores veritatis illo ex dolor ut! Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Sed, cum libero
              optio dolor maxime officia nam tempora suscipit modi eaque nemo,
              esse obcaecati, numquam facere itaque! Ab expedita odio magni.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores dignissimos possimus voluptas esse natus libero
              quisquam iste nesciunt modi qui deserunt, numquam suscipit
              cupiditate ipsam iusto non! Natus, excepturi quod.
            </p>
          </article>
        </div>
      </section>
    )
}


export default AboutMe;