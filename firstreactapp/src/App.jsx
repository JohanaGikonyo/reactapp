import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  //console.log("hallo world");
  const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links a");
  
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
  
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          } `;
        }
      });
      burger.classList.toggle("toggle");
    });
    //
  };
  
  navSlide();


  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: 'rem 0',
    textAlign: 'center',
    margin:'0px',
    width:'100%',
  };

  const containerStyle = {
   // maxWidth: '1200px',
    margin: '0 auto',
  };
  
  const textStyle = {
    fontSize: '16px',
    margin:'10px',
    color:'white',
  };
  const icon={
    backgroundColor:'orange',
  }
  const follow={
    padding:'50px',
    color:'orange',
    textAlign:'center',
    
  
  };


  return (
    <div>
      <h1 className='title'>Hello Thiru Visitors?<i ><box-icon name='book-reader' style={icon}></box-icon></i></h1>
      <div class="row">
        <div class='col-md-4'><button class="btn btn-danger"><a >login</a> </button></div>
        <div class='col-md-4'><button class="btn btn-primary"><a>Get marks</a> </button></div>
        <div class='col-md-4'><button class="btn btn-danger"><a>register</a> </button></div>



      </div>
      <div class="row">

        <div class="col-xl-6">
          <div class="well no text-center">
            <h2 className='motto'>MOTTO: HARD WORK PAYS</h2>
            <h3 >MUCH PRIVELEDGE TO HAVE YOU!</h3>

          </div>

        </div>
        <div class="col-xl-6">
          <div class="well yes text-center">
            <h3>Welcome all</h3><br />
            Thiru is a day school located at Laikipia county, Laikipia west constituency, Nyahururu district,
            and Marmanet location.
          </div>

        </div>
      </div>





      <div class="row">
        <div class='col-md-6'><button class="btn btn-primary ">Like <box-icon name='like' type='solid'></box-icon></button>
        </div>
        <div class='col-md-6'><button class="btn btn-danger">Dislike <box-icon name='dislike'
          type='solid'></box-icon></button></div>
      </div><br/><br/><br/>
      <footer style={footerStyle}>
      
      <div style={containerStyle}>

      <a href="#"><box-icon name='home-alt-2' class="menus"></box-icon>Home</a><br/>
  <a href="#"><box-icon name='info-circle' class="menus"></box-icon>About</a><br/>
  <a href="#"><box-icon name='phone-call'class="menus" ></box-icon>Contact</a><br/>
  <a href="#"><box-icon name='color-fill' class="menus"></box-icon>Login portal</a><br/>



      <div class="row foots" style={follow}>

      <p ></p>
      
     <div class="col-sm-3"> <box-icon name='whatsapp' type='logo' ></box-icon></div>
     <div class="col-sm-3"> <box-icon type='logo' name='facebook-circle'></box-icon></div>
     <div class="col-sm-3"><box-icon name='twitter' type='logo' ></box-icon></div>
     <div class="col-sm-3"><box-icon name='instagram' type='logo' ></box-icon></div>
      </div>
        <p style={textStyle}>©copywrite 2023 #thirusecondaryschool@gmail.com</p>
      </div>
    </footer>
    
      
    
    </div>
  )
}

//import React from 'react';
export default App
