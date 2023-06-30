import React from "react";
import rollingtext from "./rollingtext";
import './App.css'
import cardimg from './train.png'
import logo2 from './train2.png'

function App() {
  return (
    <div>
      <body>
      <header>
        <div class="container">
            <h1 class="logo" href="#"><img src="./public/train2.png" height="100" width="150"></img></h1>
        </div>
        </header>
      <div class="banner-area">
          <div class="rolling-text">
              <div class="line">AFFORDMED</div>
              <div class="line">TECHNOLOGY</div>
              <div class="line">INNOVATION</div>
              <div class="line">AFFORDABILITY</div>
          </div>
          <div class="content">
              <h2>JOHN DOE RAILWAYS</h2>
          </div>    
      </div>
      <div class="cardcontain">
        <div class="card1">
          <div class="back-side"></div>
          <div class="cardcontent">
            <img src="./public/train.png" class="cardimg" />
            <h1 class="cardtitle">Chennai Express</h1>
            <p class="cardabout">
              Dadar to Chennai Central
            </p>
            <button class="card-btn"> Check seat availability </button>
          </div>
          <div class="cardframe"></div>
        </div>
        <div class="card2">
          <div class="back-side"></div>
          <div class="cardcontent">
            <img src="./public/train.png" class="cardimg" />
            <h1 class="cardtitle">Vivek Express</h1>
            <p class="cardabout">
            Dibrugarh to Kanyakumari Junction
            </p>
            <button class="card-btn"> Check seat availability </button>
          </div>
          <div class="cardframe"></div>
        </div>
        <div class="card3">
          <div class="back-side"></div>
          <div class="cardcontent">
            <img src="./public/train.png" class="cardimg" />
            <h1 class="cardtitle">Himsagar Express</h1>
            <p class="cardabout">
            Kashmir to Kanyakumari Junction
            </p>
            <button class="card-btn"> Check seat availability </button>
          </div>
          <div class="cardframe"></div>
        </div>
      </div>
      <footer>
        <p>Created by 
        <a href="mailto:siddeshwarvenkat@gmail.com">Siddeshwar V A</a></p>
      </footer>
      </body>
    </div>
  )
}

export default App;
