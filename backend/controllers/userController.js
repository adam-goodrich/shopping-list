const registerUser = (req, res) => {
  res.status(200).json({ message: "User registered" });
};

const loginUser = (req, res) => {
  res.status(200).json({ message: "User logged in" });
};

const getMe = (req, res) => {
  res.status(200).json({ message: "User data" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
