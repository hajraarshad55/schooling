const client = require("../../connection");

exports.getSchoolData = async (req, res, next) => {
  try {
    const allSchool = await client.query(`Select* from abc.schools`);
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
exports.postDataIntoSchools = async (req, res, next) =>{
  try{
    const {name,c_id} = req.body;
    await client.query(`insert into abc.schools(name,c_id) 
    values('${name}','${c_id}')`)
    res.status(200).json({
      success: true,
      message: "data is inserted."
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  client.end;
} ;
exports.updateSchoolData = async (req, res, next) =>{
  try{
    const {name,c_id} = req.body;
    
    await client.query(`update abc.schools
                         set
                         name = '${name}',
                         c_id = '${c_id}'
                         where id = ${req.params.id}`
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
exports.getSchoolDataById = async (req, res, next) => {
  try {
    const allSchool = await client.query(`Select* from abc.schools where id=${req.params.id}`);
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
exports.deleteSchoolDataById = async (req, res, next) => {
    try {
      const allSchool = await client.query (`delete from abc.schools where id=${req.params.id}`);
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
 
  