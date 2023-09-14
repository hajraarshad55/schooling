const client = require("../../connection");

exports.getAllSchool = async (req, res, next) => {
  try {
    const allSchool = await client.query(`Select* from school`);
    res.status(200).json({
      success: true,
      message: "table of school is:",
      data: allSchool.rows,
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  client.end;
};
exports.postAllSchool = async (req, res, next) =>{
  try{
    const {school_id,name,description,class_id} = req.body;
    await client.query(`insert into school(school_id,name,description,class_id) 
    values('${school_id}','${name}','${description}','${class_id}')`)
    res.status(200).json({
      success: true,
      message: "data is inserted."
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  client.end;
} ;
exports.updateAllSchool = async (req, res, next) =>{
  try{
    const {name,description,class_id,school_id} = req.body;
    
    await client.query(`update school
                         set
                         
                         class_id='${class_id}',
                         name = '${name}',
                         description = '${description}'
                         where school_id = ${req.params.id}`
)
    res.status(200).json({
      success: true,
      message: "updated school data "
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  client.end;
} ;
exports.getSchoolById = async (req, res, next) => {
  try {
    const allSchool = await client.query(`Select* from school where id=${req.params.id}`);
    res.status(200).json({
      success: true,
      message: "school data by id is retrieved. ",
      data: allSchool.rows[0],
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  client.end;
};
exports.deleteSchoolById = async (req, res, next) => {
    try {
      const allSchool = await client.query (`delete from school where id=${req.params.id}`);
      res.status(200).json({
        success: true,
        message: "data is deleted from school db.",
        //data: allRoles.rows,
      });
    } catch (err) {
      return res.status(400).json({ success: false, message: err.message });
    }
    client.end;
  };
  exports.getClasses = async (req, res, next) => {
    try {
      const allSchool = await client.query(`select school.class_id ,classes.class_name 
      FROM classes
      INNER JOIN school  ON classes.school_id = school.school_id
       
      where school.school_id=${req.params.id}`);
      res.status(200).json({
        success: true,
        message: "9 and 10 classes are retrieved",
        data: allSchool.rows,
      });
    } catch (err) {
      return res.status(400).json({ success: false, message: err.message });
    }
    client.end;
  };