import { useContext } from "react";
import { UserContext } from "../context";

const dashboard = () => {
  const [state, setState] = useContext(UserContext);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="display-1 text-center py-5">Dashboard : </h1>
          {JSON.stringify(state)}
          <img src="/images/yourname.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default dashboard;
