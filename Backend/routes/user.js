const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const supabase = require("../supabase");

router.get("/profile", verifyToken, async (req, res) => {
  const userId = req.user.sub;

  const { data, error } = await supabase
    .from("user_roles")
    .select("role")
    .eq("user_id", userId)
    .single();

  if (error || !data) {
    return res.status(404).json({ message: "User role not found." });
  }

  res.json({ user_id: userId, role: data.role });
});

router.get("/all-users", verifyToken, async (req, res) => {
  const userId = req.user.sub;

  const { data: adminRole } = await supabase
    .from("user_roles")
    .select("role")
    .eq("user_id", userId)
    .single();

  if (adminRole?.role !== "admin") {
    return res.status(403).json({ message: "Forbidden" });
  }

  const { data, error } = await supabase.from("user_roles").select("*");
  if (error) {
    return res.status(500).json({ message: "Failed to fetch users" });
  }

  res.json(data);
});

module.exports = router;
