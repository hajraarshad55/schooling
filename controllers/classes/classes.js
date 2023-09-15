const client = require("../../connection");

exports.getClassesData = async (req, res, next) => {
  try {
    const allClasses = await client.query(`Select* from abc.classes`);
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
exports.postClassesData = async (req, res, next) =>{
  try{
    const {name,s_id} = req.body;
    await client.query(`insert into abc.classes(name,s_id) 
    values('${name}','${s_id}')`)
    res.status(200).json({
      success: true,
      message: "new data is inserted"
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  client.end;
} ;
exports.updateClassesData = async (req, res, next) =>{
  try{
    const {name,s_id} = req.body;
    
    await client.query(`update abc.classes
                         set
                         name = '${name}',
                         s_id = '${s_id}'
                         where id = ${req.params.id}`
)
    res.status(200).json({
      success: true,
      message: "classes data is  updated "
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  client.end;
} ;
exports.getClassesDataById = async (req, res, next) => {
  try {
    const allUsers = await client.query(`Select* from abc.classes where id=${req.params.id}`);
    res.status(200).json({
      success: true,
      message: "data of specific id: ",
      data: allUsers.rows[0],
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  client.end;
};
exports.deleteClassesById = async (req, res, next) => {
    try {
      const allClasses = await client.query (`delete from abc.classes where id=${req.params.id}`);
      res.status(200).json({
        success: true,
        message: "data is deleted from classes database",
        //data: allRoles.rows,
      });
    } catch (err) {
      return res.status(400).json({ success: false, message: err.message });
    }
    client.end;
  };
  exports.getEightAndNinthClassData = async (req, res, next) => {
    try {
      
      const allSchool = await client.query(`   SELECT *
      FROM abc.classes
      WHERE name IN ('eight class','ninth class')`);
      res.status(200).json({
        success: true,
        message: "8 and 9 classes data is retrieved",
        data: allSchool.rows,
      });
    } catch (err) {
      return res.status(400).json({ success: false, message: err.message });
    }
    client.end;
  };