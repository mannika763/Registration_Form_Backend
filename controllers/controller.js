
const UserCityWise = require("../models/user.models")


const editUser = async (req, res) => {
  try {
      const { id } = req.params; // Get the ID from the URL parameters
      const updatedData = req.body; // Get the updated data from the request body
console.log("id",id)
      // Update user by ID in the database
      const result = await UserCityWise.findOneAndUpdate({ id }, updatedData, { new: true });
console.log("result in edit",result)
        if (!result) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            message: "User updated successfully",
            data: result,
        });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ message: "Server error" });
    }
};


const formData = async (req,res) =>{
  // console.log("form data")
    try {
        const users = await UserCityWise.find(); // Fetch all users
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send({ message: "Server error" });
    }
}


const submitform = async (req, res) => {
    // Handle the form submission
    const {id, name, mobile, city, state } = req.body;

    // Process the form data (e.g., save to the database)
    console.log({id, name, mobile, city, state });


    try {
      const existingUser = await UserCityWise.findOne({ mobile });
      if (existingUser) {
          return res.status(400).json({
              message: "A user with this mobile number already exists"
          });
      }
        // Create a new user in the database
        const newUser = await UserCityWise.create({
          id,
          name,
          mobile,
          city,
          state
        });
    
        // Send a success response
        res.status(201).json({
          message: "Form submitted and user saved successfully",
          data: newUser
        });
      } catch (error) {
        console.error("Error saving user:", error);
        res.status(500).json({
          message: "Failed to save user data",
          error: error.message
        });
      }

    // res.status(200).json({ message: 'Form submitted successfully' });
};


const deleteUser = async (req, res) => {
    try {
       
        const { id } = req.params; // Get the ID from the URL parameters
      console.log("delete",id)
        const result = await UserCityWise.findOneAndDelete({ id: Number(id) }); // Delete user by ID
        
        // if (!result) {
        //     return res.status(404).send({ message: "User not found" });
        // }
        
        res.status(200).send({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).send({ message: "Server error" });
    }
  };
  
  module.exports = { submitform, deleteUser,formData,editUser };