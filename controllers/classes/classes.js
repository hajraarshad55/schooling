const client = require("../../connection");

exports.getClasses = async (req, res, next) => {
  try {
    const allClasses = await client.query(`Select* from classes`);
    res.status(200).json({
      success: true,
      message: "classes data is given as:",
      data: allClasses.rows,
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  client.end;
};
exports.postClasses = async (req, res, next) =>{
  try{
    const {class_id,class_name,department_id,school_id} = req.body;
    await client.query(`insert into classes(class_id,class_name,department_id,school_id) 
    values('${class_id}','${class_name}','${department_id}','${school_id}')`)
    res.status(200).json({
      success: true,
      message: "new data is inserted"
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  client.end;
} ;
exports.updateClasses = async (req, res, next) =>{
  try{
    const {class_name,department_id,school_id} = req.body;
    
    await client.query(`update classes
                         set 
                         school_id='${school_id}',
                         class_name = '${class_name}',
                         
                         department_id = '${department_id}'
                         where class_id = ${req.params.id}`
)
    res.status(200).json({
      success: true,
      message: "classes are updated "
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  client.end;
} ;
exports.getClassesById = async (req, res, next) => {
  try {
    const allUsers = await client.query(`Select* from classes where class_id=${req.params.id}`);
    res.status(200).json({
      success: true,
      message: "the specfic id users ",
      data: allUsers.rows[0],
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  client.end;
};
exports.deleteClassesById = async (req, res, next) => {
    try {
      const allClasses = await client.query (`delete from classes where class_id=${req.params.id}`);
      res.status(200).json({
        success: true,
        message: "data is deleted.",
        //data: allRoles.rows,
      });
    } catch (err) {
      return res.status(400).json({ success: false, message: err.message });
    }
    client.end;
  };
  exports.getBooks = async (req, res, next) => {
    try {
      const allClasses = await client.query(`SELECT classes.class_id, books.name
      FROM classes
      JOIN books ON classes.class_id = books.c_id
      WHERE c_id = ${req.params.id}`);
      res.status(200).json({
        success: true,
        message: "books of six class are given as:",
        data: allClasses.rows,
      });
    } catch (err) {
      return res.status(400).json({ success: false, message: err.message });
    }
    client.end;
  };