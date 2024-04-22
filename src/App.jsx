import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" ctr container shadow-lg  bg-body rounded">
        <center className="box">
          <h1>Ahh!, I never saw someone from your company</h1>
        </center>
        <br />
        <hr />
        <br />
        <center>
          <div className="outer">
            <div className="inner">
              <h5>Welcome !!</h5>
            </div>
          </div>
          <br />
          <br />
          <br />
          <img src="xzy.gif" alt="" />
          <div className="container text-center">
            <div class="row">
              <div class="col">
                <button className=" btn1 ">Browse test data</button>
              </div>
              <div className="col">
                <button className="btn2 ">
                  <img className="imgg" src="images.png" alt="" />
                  Connect Domain
                </button>
              </div>
            </div>
          </div>
          <br />
          <br />
          <h5>
            ** tenant Connections are not allowed in free tier, however you can
            still explore the website features
          </h5>
        </center>
      </div>
    </>
  );
}

export default App;
