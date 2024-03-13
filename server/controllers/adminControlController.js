/** @format */

const registerStudent = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = new userModel({
      name,
      email,
      password,
      role,
    });
    await user.save();
    res.send({
      success: true,
      message: "Student Registered",
    });
  } catch (error) {}
};

// get all students lists
const getAllStudents = async (req, res) => {
  try {
    const students = await userModel.find({ role: "user" });
    res.send({
      success: true,
      students,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  registerStudent,
  getAllStudents,
};
