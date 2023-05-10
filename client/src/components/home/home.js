import eact, { useState } from "react";
import {Link,useNavigate} from "react-router-dom";
import line from "./public/3lines.svg";
import cart from "./public/cart.svg";
import idlogo from "./public/idlogo.svg";
import search from "./public/search.svg";
import tile from "./public/tile.png";
import Scribe from "./public/Scribe.io.svg";
import adbooks from "./public/3books.png"
import "./home.css";

// import {openNav, closeNav} from "./homeT";

export default function Home(){
    return(
        <div>
         <header>
          <span class ="navdiv1">
            <div id="mySidenav" class="sidenav">
                <a href="#" id="home">Home</a>
                <a href="#">Writers</a>
                <a href="#">Books</a>
                <a href="#">Your Likes</a>
                <a href="#">Best Of The Month</a>
                <a href="#">NewBie Writer</a>
                <a href="#">Special Edition</a>
              </div>
              <div class="leftpar">
              <span class="sidenav1" id="sidebar"><Link to="#" class="leftobj"><img src={line} /></Link></span>
              <span class="sidenav1"><Link to="#" class="leftobj"><img src={search} /></Link></span>
            </div>  
        </span>
        <div class="navdiv2"><Link to="#"><img src={Scribe} /></Link></div>
        <div class="sangam">
          <span class ="navdiv3">
              <Link to="#"><img src={cart}/></Link> 
          </span>
          <span class="navdiv3">
              
              <div class="dropdown">
                <img class="dropbtn" src={idlogo}/>
                <div class="dropdown-content">
                  <a href="#">My Profile</a>
                  <a href="#">Notifications</a>
                  <a href="#">My Wishlist</a>
                  <a href="#">My Library</a>
                  <a href="#">Settings</a>
                  <a href="#">Sign Out</a>
                </div>
              </div>
            </span>
        </div>
    </header>
        <img class="continue" src={adbooks} alt="Book" />
        
            <h3>Books You May Like</h3>
        <div class="suggestion">
            <img src={tile} alt="Book" />
            <img src={tile} alt="Book" />
            <img src={tile} alt="Book" />
            <img src={tile} alt="Book" />
            <img src={tile} alt="Book" />
            <img src={tile} alt="Book" />
            <img src={tile} alt="Book" />
            <img src={tile} alt="Book" />
        </div>
            <h3>Writers You May Like</h3>
            <div class="suggestion">
                <img src={tile} alt="Book" />
                <img src={tile} alt="Book" />
                <img src={tile} alt="Book" />
                <img src={tile} alt="Book" />
                <img src={tile} alt="Book" />
                <img src={tile} alt="Book" />
                <img src={tile} alt="Book" />
                <img src={tile} alt="Book" />
            </div>
        
        </div>
    );
}