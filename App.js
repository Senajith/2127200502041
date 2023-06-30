*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    margin: 0;
    background: #000000;
    font-weight: 400;
    font-family: Impact;
}
.banner-area h2{
    font-size: 65px;
    margin: 0;
    color: #BEBEBE;
    animation: animate 2s 1;
}
.banner-area p{
    color: #BEBEBE;
    width: 35%;
    text-align: center;
    animation: animate 5s 1;
}
.banner-area{
    width: 100%;
    height: 100vh;
    background-color: #000000;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: cover;
    display: -webkit- flex;
    display: -moz- flex;
    display: -ms- flex;
    display: -o- flex;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
}
@keyframes animate{
    0%{
        transform: scale(0);
    }
    100%{
        transform: scale(1);
    }
}
.content{
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 80%;
}
.content h2{
    padding: 0;
    color: #BEBEBE;
    font-size: 3em;
    text-align: center;
    font-family: Impact;
    letter-spacing: 3px;
}
.content p{
    width: 40%;
    color: #fff;
    font-family: monserrat;
    line-height:1.9;
}
.content a{
    text-decoration: none;
    background: aqua;
    color: #fff;
    padding: 15px 35px;
    display: inline-block;
    margin-top: 20px;
    border-radius: 50px;
    font-family: montserrat;
}

.rolling-text{
    font-family: Impact;
    color: #BEBEBE;
    position: absolute;
    top: 25%;
    
    transform: translate(-505,-50%);
    background: transparent;
    padding: 0 40px;
    height: 100px;
    overflow: hidden;
}
.line{
    text-transform: uppercase;
    text-align: center;
    font-size: 75px;
    font-weight: bold;
    line-height: 100px;
}
.line:first-child{
    animation: a 12s infinite;
}
@keyframes a{
    0%{
        margin-top: 0px;
    }
    16%{
        margin-top: -100px;
    }
    33%{
        margin-top: -200px;
    }
    50%{
        margin-top: -300px;
    }
    66%{
        margin-top: -200px;
    }
    82%{
        margin-top: -100px;
    }
    100%{
        margin-top: 0px;
    }
}
.container {
	width: 80%;
	margin: 0 auto;
}

header {
  background: #000000;
}

header::after {
  content: '';
  display: table;
  clear: both;
}

.logo {
  float: left;
  padding: 5px 0;
}

nav {
  float: right;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-block;
  margin-left: 70px;
  padding-top: 23px;

  position: relative;
}

nav a {
  color: #BEBEBE;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
}

nav a:hover {
  color: #ffffff;
}

nav a::before {
  content: '';
  display: block;
  height: 5px;
  background-color: #BEBEBE;

  position: absolute;
  top: 0;
  width: 0%;

  transition: all ease-in-out 250ms;
}

nav a:hover::before {
  width: 100%;
}

.cardcontain{
    width: 100%;
    height: 100vh;
    background: #000000;
}

.card1{
    width: 300px;
    height: 550px;
    position: absolute;
    top: 120%;
    left: 20%;
    transform: translate(-50%, -50%);
    perspective: 1000px;
}

.card2{
    width: 300px;
    height: 550px;
    position: absolute;
    top: 120%;
    left: 50%;
    transform: translate(-50%, -50%);
    perspective: 1000px;
}

.card3{
    width: 300px;
    height: 550px;
    position: absolute;
    top: 120%;
    left: 80%;
    transform: translate(-50%, -50%);
    perspective: 1000px;
}

.cardframe,
.cardcontent,
.back-side{
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 5px;
}

.cardframe{
    border-width: 3px;
    border-style: solid;
    border-image: linear-gradient(to right, #f32170, #ff6b08,#cf23cf, #eedd44) 1;
    transform: translateZ(50px) translateX(-20px);
    pointer-events: none;
    transition: transform 0.5s;
}

.cardcontent{
    background-color: rgba(190, 190, 190, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.back-side{
    background-color: rgba(190, 190, 190, 0.2);
    transform: translateZ(-50px) translateX(20px);
    transition: transform 0.5s;
}

.card1:hover .cardframe,
.card2:hover .cardframe,
.card3:hover .cardframe
{
    transform: translateZ(0) translateX(0);
}

.card1:hover .back-side,
.card2:hover .back-side,
.card3:hover .back-side{
    transform: translateZ(0) translateX(0);
}

.cardimg{
    width: 65%;
    border-radius: 50%;
    margin-top: 10px;
    border: 5px solid #fff;
}

.cardtitle{
    font-size: 40px;
    font-family: Bahnschrift;
    color: black;
    text-align: center;
}

.cardabout{
    font-size: 19px;
    color: #000000;    
    font-family: Bahnschrift SemiBold;
    width: 90%;
    padding: 10px;
    text-align: center;
    border-radius: 5px;
}

.card-btn{
    border: 5px solid #BEBEBE;
    border-radius: 20px;
    outline: none;
    width: 200px;
    height: 50px;
    background-color: transparent;
    color: rgb(41, 40, 40);
    font-family: Bahnschrift;
    font-weight: bold;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
    cursor: pointer;
}
 
footer {
    text-align: center;
    font-family: Century Gothic;
    padding: 3px;
    background-color: rgb(0, 0, 0);
    color: white;
  }




