const express = require("express");
const client = require("../schoolingsystem/connection");

const schoolController = require("../schoolingsystem/controllers/school/school.js");
const router = express.Router();

const classesController = require("../schoolingsystem/controllers/classes/classes.js");
const booksController = require("../schoolingsystem/controllers/books/books.js");
//const router = express.Router();
router.get("/getSchoolData", schoolController.getSchoolData);
router.post("/postDataIntoSchools", schoolController.postDataIntoSchools);
router.put("/updateSchoolData/:id", schoolController.updateSchoolData);
router.get("/getSchoolDataById/:id", schoolController.getSchoolDataById);
router.delete("/deleteSchoolDataById/:id", schoolController.deleteSchoolDataById);


 
router.get("/getClassesData", classesController.getClassesData);
router.post("/postClassesData", classesController.postClassesData);
router.put("/updateClassesData/:id", classesController.updateClassesData);
router.get("/getClassesDataById/:id", classesController.getClassesDataById);
router.delete("/deleteClassesById/:id", classesController.deleteClassesById);
router.get("/getEightAndNinthClassData", classesController.getEightAndNinthClassData);


router.get("/getBooksData", booksController.getBooksData);
router.get("/getBooksDataById/:id", booksController.getBooksDataById)
router.post("/postBooksData", booksController.postBooksData);
router.put("/updateBooksData/:id", booksController.updateBooksData);
router.delete("/deleteBooksDataById/:id", booksController.deleteBooksDataById)
router.get("/getBooksOfNinthClass/:id", booksController.getBooksOfNinthClass);
module.exports = router;

