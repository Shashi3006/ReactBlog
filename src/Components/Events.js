import React from 'react';

function Events() {
  const myStyle = {
    color: "DodgerBlue",
    padding: "40px",
    fontFamily: "Sans-Serif",
    textAlign: "center"
  }
  return (
    <>
    <div className='wrapper'>
    <div className='container'>
      <h1 style={myStyle}>For Updates on upcoming events</h1>
      <img src='/Images/Reg.jpg' />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit neque eos, dolore unde porro mollitia eius expedita laudantium repellat nihil nobis, repudiandae maiores velit voluptate rem odio ullam? Dolor, delectus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae iste ipsam fugit quas veritatis sequi itaque, unde suscipit esse laudantium exercitationem dolore explicabo quasi quis porro nostrum repudiandae vero <nemo className="lor">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat labore tenetur officiis natus. Delectus tempora aliquid quod debitis quisquam distinctio, totam fugit, impedit assumenda sequi vitae, voluptatum dolorem illo!</nemo></p>
    </div>
    <div className='container'>
      <img src='/Images/update.webp' />
    </div>
    </div>
    </>
  );
}

export default Events;
