const express = require("express");
const client = require("../schoolingsystem/connection");

const schoolController = require("../schoolingsystem/controllers/school/school.js");
const router = express.Router();

const classesController = require("../schoolingsystem/controllers/classes/classes.js");
const booksController = require("../schoolingsystem/controllers/books/books.js");
//const router = express.Router();
router.get("/getAllSchool", schoolController.getAllSchool);
router.post("/postALLschool", schoolController.postAllSchool);
router.put("/updateALLSchool/:id", schoolController.updateAllSchool);
router.get("/getSchoolById/:id", schoolController.getSchoolById);
router.delete("/deleteSchoolById/:id", schoolController.deleteSchoolById);
router.get("/getClasses/:id", schoolController.getClasses);
 
router.get("/getClasses", classesController.getClasses);
router.post("/postClasses", classesController.postClasses);
router.put("/updateClasses/:id", classesController.updateClasses);
router.get("/getClassesById/:id", classesController.getClassesById);
router.delete("/deleteClassesById/:id", classesController.deleteClassesById)
router.get("/getBooks/:id", classesController.getBooks);

router.get("/getBooks", booksController.getBooks);
router.get("/getBooksById/:id", booksController.getBooksById)
router.post("/postBooks", booksController.postBooks);
router.put("/updateBooks/:id", booksController.updateBooks);
router.delete("/deleteBooksById/:id", booksController.deleteBooksById)
module.exports = router;