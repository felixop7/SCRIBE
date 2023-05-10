import React from "react";
import "./author.css";
import useState from "react";
import {Link,useNavigate} from "react-router-dom";
import axios from "axios";


export default function Author(){
    // const [autherName, setautherName]=useState("");
    // const [contact, setcontact]=useState("");
    // const [email,setemail]=useState("");
    // const [photo, setphoto]=useState("");
    // const [rating, setrating]=useState("");
    // const history =useNavigate();

    axios({
      method: 'get',
      url: 'https://87b8-202-166-219-222.in.ngrok.io/author'
    }).then(apiResponse => {
       // process the response
       const products = apiResponse.data
       console.log(products);
    })
    

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
                  <span class="sidenav1" id="sidebar"><Link to="#" class="leftobj"><img src="res/3lines.svg" /></Link></span>
                  <span class="sidenav1"><Link to="#" class="leftobj"><img src="res/search.svg" /></Link></span>
                </div>  
            </span>
            <div class="navdiv2"><Link to="#"><img src="res/Scribe.io.svg" /></Link></div>
            <div class="sangam">
              <span class ="navdiv3">
                  <Link to="/author"><img src="res/cart.svg" /></Link> 
              </span>
              <span class="navdiv3">
                <div class="dropdown1">
                  <img class="dropbtn1" src="res/idlogo.svg" />
                  <div class="dropdown-content1">
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
        <div class="container">
            <img class="book"src="res/authorid.png" alt="Book" />
            <h1>J. K. Rowling</h1>    
            <h3><a class="author" href="#">facebook/user/test.com</a></h3>
            <h3><a class="author" href="#">linkedin/user/test.com</a></h3>
            <h3><a class="author" href="#">Address: Kathmandu, Nepal</a></h3>
            <h3><a class="author" href="#">Phone: +01-5511226</a></h3>
            <h4>Rating : &#9733;&#9733;&#9733;&#9733;&#9734;  <dim>(2000 Ratings)</dim> </h4>
            <div class="rating">
                <div class="field">Horror</div>
                <div class="field">Fantacy</div>
                <div class="field">Fiction</div>
                <div class="field">Action</div>
            </div>
            <hr />
            <button class="buy">Connect</button>
            
            <p class="abstract">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel
                    erisque enim ligula venenatis dolor.
                    Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
                    Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
                    In at libero sed nunc venenatis imperdiet sed ornare turpis.
                    Donec vitae dui eget tellus gravida venenatis.
                    Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.
                </p>

           
            
      
        </div>
        <div id="footer">
            <h1>Recent Works</h1>
            <img class="related" src="res/tile.png" />
            <img class="related" src="res/tile.png" />
            <img class="related" src="res/tile.png" />
            <img class="related" src="res/tile.png" />
        </div>

        <div class="rightbar">
            <h3>Authors You May Like</h3>
            <img class="editors" src="res/authorid.png" />
            <img class="editors" src="res/authorid.png" />
        </div>
        </div>
    );
    }