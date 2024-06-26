import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "./Components/Button";
import styled from "styled-components";

const App = () => {
  const [users, setUsers] = useState([]);
  const [post, setPost] = useState([]);

  useEffect(() => {
    //fetchPost();
  }, []);

  const fetchUserData = () => {
    axios
      .get(`http://localhost:8000/api/users`)
      .then((data) => setUsers(data.data.users))
      .catch((err) => console.log(err));

    // fetch(`http://localhost:8000/api/users`, {
    //   method: "GET",
    // })
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw new Error("Failed to fetch data");
    //     }
    //     return res.json();
    //   })
    //   .then((data) => {
    //     //console.log( data.users); // Check the structure of data.users
    //     setUsers(data.users);
    //   })
    //   .catch((err) => console.log(err));
  };

  const fetchPost = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((data) => setPost(data.data))
      .catch((err) => console.log(err));

    // fetch(`https://jsonplaceholder.typicode.com/posts`, {
    //   method: "GET",
    // })
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw new Error("Failed to fetch data");
    //     }
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data); // Check the structure of data.users
    //     setPost(data);
    //   })
    //   .catch((err) => console.log(err));
  };

  const testFunction = () => {
    alert("Alert !!@@##%%");
  };

  return (
    <div className="container">
      <Button handleClick={fetchUserData} title="Get Data" /> <hr />
      <Button handleClick={fetchPost} title="Get Posts" /> <hr />
      <Button handleClick={testFunction} title="test" /> <hr />
      {/* Displaying users */}
      {users ? (
        users.map((user) => (
          <div className="alert alert-primary" key={user.age}>
            <p>
              {user.name} : {user.age}.
            </p>
            {/* Add other user details here if needed */}
          </div>
        ))
      ) : (
        <p>No users found</p>
      )}
      {post ? (
        post.map((user) => (
          <Anush key={user.id}>
            {user.id} : {user.title}.
          </Anush>
        ))
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
};

export default App;

const Anush = styled.div`
  background-color: aquamarine;
  color: rgb(6, 103, 61);
  border: 1px solid #999;
  padding: 20px;
  margin-bottom: 20px;
`;

// import "./App.css";
// import { useState } from "react";

// function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const eventHandler = (event) => {
//     event.preventDefault();
//     console.log("State: ", email, password);
//   };

//   return (
//     <div className="container">
//       <h1 className="display-4 text-center ">Learning React !</h1>

//       <div class="row">
//         <div class="col-md-6 offset-md-3">
//           <form onSubmit={eventHandler}>
//             <div className="mb-3">
//               <label className="form-label">Email address</label>
//               <input
//                 value={email}
//                 onChange={(event) => setEmail(event.target.value)}
//                 type="email"
//                 className="form-control"
//               />
//               <div className="form-text">
//                 We'll never share your email with anyone else.
//               </div>
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Password</label>
//               <input
//                 value={password}
//                 onChange={(event) => setPassword(event.target.value)}
//                 type="password"
//                 className="form-control"
//               />
//             </div>
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
