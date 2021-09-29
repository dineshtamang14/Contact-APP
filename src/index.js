import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App"
import contact from "./contact.js"

const card1 = contact[0];
const card2 = contact[1];
const card3 = contact[2];

ReactDOM.render(
  <div>
    <h1 className="heading">My Contacts</h1>
    <App 
    name={card1.name}
    img={card1.imgURL}
    phone={card1.phone}
    email={card1.email}
  />
    <App 
    name={card2.name}
    img={card2.imgURL}
    phone={card2.phone}
    email={card2.email}
  />
      <App 
    name={card3.name}
    img={card3.imgURL}
    phone={card3.phone}
    email={card3.email}
  />
  </div>, 
  document.getElementById("root")
);



//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.
