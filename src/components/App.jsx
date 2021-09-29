import React from "react";

function App(){
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            <div className="card">
                <div className="top">
                    <h1 className="name">Name</h1>
                    <img className="circle-img"
                    src=""
                    alt=""
                />
                </div>
                <div className="bottom">
                    <p className="info">phone</p>
                    <p className="info">email</p>
                </div>
            </div>
        </div>
    );   
}


export default App;