// src/Header.js
import React from 'react';
import './header2.css';
import $ from 'jquery';

const Header = () => {

  $(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
})

  return (
<main>
      <div class="wrapper">
            <header>

                  <nav>

                        <div class="menu-icon">
                              <i class="fa fa-bars fa-2x"></i>
                        </div>

                        {/* <div class="logo">
                              GrubStake
                        </div> */}
                        <a href="/" class="logo"><div className='img11'></div></a>

                        <div class="menu">
                              <ul>
                                    <li><a class="active" className='Color' href='/work'>Work</a></li>
                                    <li><a className='Color' href="/about">About</a></li>
                                    <li><a className='Color' href="/contact">Contact</a></li>
                                    <li><a className='Color' href="/services">Services</a></li>
                              </ul>
                        </div>
                  </nav>

            </header>
      </div>

    

</main>
  );
};

export default Header;
