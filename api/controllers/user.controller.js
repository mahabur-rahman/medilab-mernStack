const UserModel = require("../models/user.model");
// CREATE | POST

const registerUser = async (req, res) => {
  const { username, email, img, age, mobile, profession, address, desc, date } =
    req.body;

  if (
    !username ||
    !email ||
    !age ||
    !mobile ||
    !profession ||
    !address ||
    !desc ||
    !date
  ) {
    return res.status(404).json("please fill up all field!");
  }

  try {
    const preUser = await UserModel.findOne({ email: email });
    // console.log("preUser : " + preUser);
    if (preUser) {
      return res.status(404).json("email already exist!");
    } else {
      // create a new user
      const user = new UserModel({
        username,
        email,
        age,
        img,
        mobile,
        profession,
        address,
        desc,
        date,
      });

      // save on db
      const savedUser = await user.save();

      return res.status(201).json({ savedUser });
    }
  } catch (err) {
    console.log(err);
  }
};

// GET ALL USER

const getAllUser = async (req, res) => {
  try {
    const users = await UserModel.find();
    return res.status(200).json({ users });
  } catch (err) {
    return res.status(200).json(err);
  }
};

// GET SINGLE USER
const getSingleUser = async (req, res) => {
  const { id } = req.params;

  try {
    const singleUser = await UserModel.findById(id);
    return res.status(200).json({ singleUser });
  } catch (err) {
    return res.status(403).json(err);
  }
};

// UPDATED USER
const updatedUser = async (req, res) => {
  const { updateId } = req.params;
  //   console.log(updateId);

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(updateId, req.body, {
      new: true,
    });

    return res.status(200).json({ updatedUser });
  } catch (err) {
    return res.status(400).json(err);
  }
};

// DELETE USER
const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await UserModel.findByIdAndDelete(id);
    return res.status(200).json("Delete user successful!");
  } catch (err) {
    return res.status(404).json(err);
  }
};

// export
module.exports = {
  registerUser,
  getAllUser,
  getSingleUser,
  updatedUser,
  deleteUser,
};
