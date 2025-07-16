const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const supabase = require("../supabase");

const JWT_SECRET =
  "YlMvaOm8ssZ/7UoPGnXyy0PSxD+l6TEEE5PMWr+52vVviWno5WPSo4Mg0+rZEyR0w2oRaiv68D6IhZEoUUNqXA==";

exports.registerUser = async (req, res) => {
  const { email, password, role = "student" } = req.body;

  const { data: existingUser } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const { error } = await supabase
    .from("users")
    .insert([{ email, password: hashedPassword, role }]);

  if (error) {
    return res.status(500).json({ message: "Error registering user" });
  }

  // Return the role in the response
  res.status(201).json({ message: "User registered successfully", role });
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  const { data: user } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials." });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials." });
  }
  const token = jwt.sign({ email: user.email, role: user.role }, JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({ token, role: user.role });
};

exports.getProfile = async (req, res) => {
  const { email } = req.user;
  const { data: user } = await supabase
    .from("users")
    .select("email, role")
    .eq("email", email)
    .single();
  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }
  res.json(user);
};
