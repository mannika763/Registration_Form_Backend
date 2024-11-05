const express = require("express");
const {submitform,deleteUser,formData,editUser} = require("../controllers/controller")


const router = express.Router();


router.post("/submit-form", submitform);
router.delete("/delete/:id", deleteUser); 
router.get("/get-form-data", formData);
router.put("/edit/:id", editUser);

module.exports = router;