* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #000;
  font-weight: 400;
  font-family: Impact;
}

.banner-area h2 {
  font-size: 65px;
  margin: 0;
  color: #999;
  animation: animate 2s 1;
}

.banner-area p {
  color: #999;
  width: 35%;
  text-align: center;
  animation: animate 5s 1;
}

.banner-area {
  width: 100%;
  height: 100vh;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
}

@keyframes animate {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

.content {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
}

.content h2 {
  padding: 0;
  color: #999;
  font-size: 3em;
  text-align: center;
  font-family: Impact;
  letter-spacing: 3px;
}

.content p {
  width: 40%;
  color: #fff;
  font-family: monserrat;
  line-height: 1.9;
}

.content a {
  text-decoration: none;
  background: aqua;
  color: #fff;
  padding: 15px 35px;
  display: inline-block;
  margin-top: 20px;
  border-radius: 50px;
  font-family: montserrat;
}

.rolling-text {
  font-family: Impact;
  color: #999;
  position: absolute;
  top: 25%;
  transform: translate(-505, -50%);
  background: transparent;
  padding: 0 40px;
  height: 100px;
  overflow: hidden;
}

.line {
  text-transform: uppercase;
  text-align: center;
  font-size: 75px;
  font-weight: bold;
  line-height: 100px;
}

.line:first-child {
  animation: a 12s infinite;
}

@keyframes a {
  0% {
    margin-top: 0px;
  }
  16% {
    margin-top: -100px;
  }
  33% {
    margin-top: -200px;
  }
  50% {
    margin-top: -300px;
  }
  66% {
    margin-top: -200px;
  }
  82% {
    margin-top: -100px;
  }
  100% {
    margin-top: 0px;
  }
}

.container {
  width: 80%;
  margin: 0 auto;
}

header {
  background: #000;
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
  color: #999;
  text-decoration: none;
  text-transform: uppercase;
  font
