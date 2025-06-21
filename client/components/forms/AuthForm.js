const AuthForm = ({
  handleSubmit,
  name,
  email,
  password,
  secret,
  setName,
  setEmail,
  setPassword,
  setSecret,
  loading,
  page,
  username,
  setUsername,
  about,
  setAbout,
  ProfileUpdate,
}) => {
  return (
    <div
      className="border p-4 mt-3 mb-3"
      // style={{
      //   backgroundImage: "url('/bg.jpeg')",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <form onSubmit={handleSubmit}>
        {/* Name : (visible only in registration and ProfileUpdate) */}
        {page !== "login" && (
          <div className="form-group p-2">
            <small>
              <label className="text-muted">Your Name :</label>
            </small>
            <input
              type="text"
              placeholder="Enter Your name"
              className="form-control"
              value={name}
              onChange={(x) => setName(x.target.value)}
            ></input>
          </div>
        )}

        {/* Username : (visible only in ProfileUpdate) */}
        {ProfileUpdate && (
          <div className="form-group p-2">
            <small>
              <label className="text-muted">Username :</label>
            </small>
            <input
              type="text"
              placeholder="Enter username"
              className="form-control"
              value={username}
              onChange={(x) => setUsername(x.target.value)}
            ></input>
          </div>
        )}  

        {/* Email : (visible in all forms) */}
        <div className="form-group p-2">
          <small>
            <label className="text-muted">Email address :</label>
          </small>
          <input
            type="email"
            placeholder="Enter email"
            className="form-control"
            value={email}
            onChange={(x) => setEmail(x.target.value)}
            disabled={ProfileUpdate}
          ></input>
        </div>

        {/* Password : (visible in all forms) */}
        <div className="form-group p-2">
          <small>
            <label className="text-muted">Password :</label>
          </small>
          <input
            type="password"
            placeholder="Enter password"
            className="form-control"
            value={password}
            onChange={(x) => setPassword(x.target.value)}
          ></input>
        </div>

        {/* Secret : (visible only in registration and ProfileUpdate) */}
        {page !== "login" && (
          <>
            <div className="form-group p-2">
              <small>
                <label className="text-muted">Select your question:</label>
              </small>
              <select className="form-control">
                <option>which is your favourite animal ? </option>
                <option>which is your favourite city ? </option>
                <option>name your favourite colour ... </option>
              </select>
            </div>

            <div className="form-group p-2">
              <small>
                <label className="text-muted">Write answer: </label>
              </small>
              <input
                type="text"
                placeholder="Enter answer"
                className="form-control"
                value={secret}
                onChange={(x) => setSecret(x.target.value)}
              ></input>
            </div>
          </>
        )}

        {/* About : (visible only in ProfileUpdate) */}
        {ProfileUpdate && (
          <div className="form-group p-2">
            <small>
              <label className="text-muted">About :</label>
            </small>
            <input
              type="text"
              placeholder="Write about yourself..."
              className="form-control"
              value={about}
              onChange={(x) => setAbout(x.target.value)}
            ></input>
          </div>
        )}

        {/* Submit Button : (visible in all forms) */}
        <div className="form-group p-2">
          <button
            disabled={
              ProfileUpdate
                ? loading
                : page === "login"
                ? !email || !password || loading
                : !name || !email || !password || !secret || loading
            }
            className="btn btn-primary col-12"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default AuthForm;
