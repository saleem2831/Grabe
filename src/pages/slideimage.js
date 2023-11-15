import React from 'react';
import "./slideimage.css";

const slideimage =()=> {

    //store width of container in the obj variable
var obj = document.getElementsByClassName('container')[0];

function goNext() {
  document.getElementsByClassName('container')[0].scrollBy({ 
    left: obj, 
  });
}


function goPrevious() {
  document.getElementsByClassName('container')[0].scrollBy({ 
    left: -obj,
  });
}
  return (
    <>
{/* //     <div class="container_slider">
//   <div class="container-wrapper">
//     <div class="content-one">1</div>
//     <div class="content-two">2</div>
//     <div class="content-three">3</div>
//     <div class="SuiteEtCopie">
//       <div class="content-four">4</div>
//       <div class="content-five">5</div>
//       <div class="content-six">6</div>
//        <div class="content-one">1</div>
//       <div class="content-two">2</div>
//       <div class="content-three">3</div>

//     </div>
//   </div>
// </div> */}
{/* <div class="container_slider">
<div class="container-wrapper">
  <div class="content-one">1</div>
  <div class="content-two">2</div>
  <div class="content-three">3</div>
  <div class="SuiteEtCopie">
    <div class="content-four"></div>
    <div class="content-five"></div>
    <div class="content-six"></div>
     <div class="content-one"></div>
    <div class="content-two"></div>
    <div class="content-three"></div>

  </div>
</div>
</div> */}
<div class="container">
  <div class="content-one" id="item1"></div>
  <div class="content-two" id="item2"></div>
  <div class="content-three" id="item3"></div>
  <div class="content-four" id="item4"></div>
  <div class="content-five" id="item5"></div>
  <div class="content-six" id="item6"></div> 
  
  {/* <a class="prev" onclick="goPrevious()">❮</a>
  <a class="next" onClick="goNext()">❯</a> */}
</div>
</>
  )
}

export default slideimage;