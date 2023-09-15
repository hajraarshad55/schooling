const client = require("../../connection");

exports.getBooksData = async (req, res, next) => {
  try {
    const allUsers = await client.query(`Select* from abc.books`);
    res.status(200).json({
      success: true,
      message: "books data id given as:",
      data: allUsers.rows,
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  client.end;
};
exports.postBooksData = async (req, res, next) =>{
  try{
    const {name,c_id,allbooks} = req.body;
    await client.query(`insert into abc.books(name,c_id,allbooks) 
    values('${name}','${c_id}','${allbooks})`)
    res.status(200).json({
      success: true,
      message: "new data is inserted into boooks database."
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  client.end;
} ;
exports.updateBooksData = async (req, res, next) =>{
  try{
    const {name,c_id} = req.body;
    await client.query(`update abc.books
                         set 
                         name = '${name}',
                         c_id = '${c_id}'
                         where id = ${req.params.id}`
)
    res.status(200).json({
      success: true,
      message: "updated books database. "
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  client.end;
} ;
exports.getBooksDataById = async (req, res, next) => {
  try {
    const allUsers = await client.query(`Select* from abc.books where id=${req.params.id}`);
    res.status(200).json({
      success: true,
      message: "the specfic id data from books table is: ",
      data: allUsers.rows,
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  client.end;
};
exports.deleteBooksDataById = async (req, res, next) => {
    try {
      const allUsers = await client.query (`delete from abc.books where id=${req.params.id}`);
      res.status(200).json({
        success: true,
        message: "the data is deleted"
      });
    } catch (err) {
      return res.status(400).json({ success: false, message: err.message });
    }
    client.end;
  };
  exports.getBooksOfNinthClass = async (req, res, next) => {
    try {
      const allClasses = await client.query(`select books.name,classes.name, books.c_id 
      from abc.books
      inner join abc.classes ON books.c_id = classes.id
   
      where books.c_id = ${req.params.id}`);
      res.status(200).json({
        success: true,
        message: "books of ninth class are given as:",
        data: allClasses.rows,
      });
    } catch (err) {
      return res.status(400).json({ success: false, message: err.message });
    }
    client.end;
  };