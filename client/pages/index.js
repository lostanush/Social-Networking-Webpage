import { useContext, useEffect } from "react";
import { UserContext } from "../context";

const Home = () => {
  const [state, setState] = useContext(UserContext);

  useEffect(() => {
    console.log("User state updated:", state);
  }, [state]); // only runs when `state` changes

  return (
    <>
      <div
        className="display-1 text-left py-5 text-light"
        style={{ backgroundImage: `url('/images/yourname.png')` }}
      >
        <h1>
          <b>
            <i>
              @<u>Home Page</u>
            </i>
          </b>{""}
        </h1>
        <h4>
          <b>
            <i>Welcome to the MERN Stack Application</i>
          </b>
        </h4>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            {/* {JSON.stringify(state)} */}

            <h4>
              Welcome Back Mr. <b>{state && state.user && state.user.name}</b>.{" "}
              <br></br>It good to see you again!
            </h4>
            <h4 className="text-muted">
              This is a simple MERN Stack Application with Next.js and MongoDB.
            </h4>
            <p className="lead">
              Go have a productive session and enjoy the journey!
            </p>
            <img src="/images/japan.jpg" alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
