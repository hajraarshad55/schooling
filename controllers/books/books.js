const client = require("../../connection");

exports.getBooks = async (req, res, next) => {
  try {
    const allUsers = await client.query(`Select* from books`);
    res.status(200).json({
      success: true,
      message: "the books are:",
      data: allUsers.rows,
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  client.end;
};
exports.postBooks = async (req, res, next) =>{
  try{
    const {id,name,description,c_id,is_active} = req.body;
    await client.query(`insert into books(id,name,description,c_id) 
    values('${id}','${name}','${description}','${c_id}')`)
    res.status(200).json({
      success: true,
      message: "new data is inserted"
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  client.end;
} ;
exports.updateBooks = async (req, res, next) =>{
  try{
    const {name,description,c_id} = req.body;
    await client.query(`update books
                         set 
                         name = '${name}',
                         description = '${description}',
                         c_id = '${c_id}'
                         where id = ${req.params.id}`
)
    res.status(200).json({
      success: true,
      message: "updated books data "
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  client.end;
} ;
exports.getBooksById = async (req, res, next) => {
  try {
    const allUsers = await client.query(`Select* from books where id=${req.params.id}`);
    res.status(200).json({
      success: true,
      message: "the specfic id data is: ",
      data: allUsers.rows,
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  client.end;
};
exports.deleteBooksById = async (req, res, next) => {
    try {
      const allUsers = await client.query (`delete from books where id=${req.params.id}`);
      res.status(200).json({
        success: true,
        message: "the data is deleted"
      });
    } catch (err) {
      return res.status(400).json({ success: false, message: err.message });
    }
    client.end;
  };