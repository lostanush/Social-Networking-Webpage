const register = (req, res) => {
  console.log("Register Endpoint =>", req.body);
  res.status(200).send("User registered");
};

export default register;
