import User from "../models/auth.model.js";

export const signin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user)
      return res.status(400).json({ status: 400, message: "User Not Found." });

    const authPassword = await user.validatePassword(password);

    if (!authPassword)
      return res
        .status(400)
        .json({ status: 400, message: "Error Password Incorrect" });

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: "internal server error (!)" });
  }
};

export const signup = async (req, res) => {
  //   const { username, password, gender, phone, specialization, role } = req.body;

  try {
    const newuser = await User.create({
      username: "JuampaVLB",
      password: "Lucas1999",
      gender: "Masculino",
      dataOfBirth: new Date("1999-09-15"),
      phone: "1138929372",
      specialization: "pediatria",
      role: "admin",
    });

    newuser.password = await newuser.encryptPassword(newuser.password);

    const savedUser = await newuser.save();

    if (!savedUser) return res.status(402).json("Error al crear usuario");

    return res.status(200).json({ user: newuser });
  } catch (error) {
    return res.status(404).json(error);
  }
};
