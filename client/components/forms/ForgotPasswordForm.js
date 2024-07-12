const ForgotPasswordForm = ({
  handleSubmit,
  email,
  newPassword,
  secret,
  setEmail,
  setNewPassword,
  setSecret,
  loading,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
          ></input>
        </div>

        <div className="form-group p-2">
          <small>
            <label className="text-muted">New Password :</label>
          </small>
          <input
            type="password"
            placeholder="Enter new password"
            className="form-control"
            value={newPassword}
            onChange={(x) => setNewPassword(x.target.value)}
          ></input>
        </div>

        <div className="form-group p-2">
          <small>
            <label className="text-muted">Enter security key : </label>
          </small>
          <input
            type="text"
            placeholder="Enter answer"
            className="form-control"
            value={secret}
            onChange={(x) => setSecret(x.target.value)}
          ></input>
        </div>
        <div className="form-group p-2">
          <button
            disabled={!email || !newPassword || !secret || loading}
            className="btn btn-primary col-12"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default ForgotPasswordForm;
