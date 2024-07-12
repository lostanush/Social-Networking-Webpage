import { useContext, useEffect } from "react";
import { UserContext } from "../context";

const Home = () => {
  const [state, setState] = useContext(UserContext);

  useEffect(() => {
    // console.log(state)
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="display-1 text-center py-5">Home Page : </h1>
          {JSON.stringify(state)}
          <img src="/images/japan.jpg" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Home;
