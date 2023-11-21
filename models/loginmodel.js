//llamando a maria db
const mariadb = require('mariadb');

// Database connection
const pool = mariadb.createPool({ 
    host: "localhost", 
    user: "root",
    password: '1234',
    port: "3306", 
    database: "userpoke",
    connectionLimit: 5 
});


const getUsers = async () =>{
    let conn;
    try {
      conn = await pool.getConnection();
      const rows = await conn.query("SELECT * FROM users");
        return rows;
    }catch (error){
    } 
    finally {
      if (conn) conn.release();
    }
    return false
}


const createUser = async (user) => {
  let conn;
  try{
    conn = await pool.getConnection();
    const response = await conn.query(
      `INSERT INTO users(name, playerName) VALUE(?, ?)`,
      [user.name, user.playerName]
    );
    return { id: parseInt(response.insertId), ...user };
  }catch(error){
    console.log(error);
  } finally {
    if (conn) conn.release(); //release to pool
  }
  return false;
};


const  getUser = async (name) => {
    let conn;
    try{
      conn = await pool.getConnection();
      const response = await conn.query(
        `SELECT id, name, playerName, pokeF FROM users WHERE name=? and playerName=?`,
        [name.name, name.playerName]
      );
      return response[0]

    }catch(error){
      console.log(error)

    }finally{
      if (conn) conn.release();
    }
    return false
}


 const UpdateUser = async (playerName, poke) =>{
  let conn;
  try{
    conn = await pool.getConnection();
    await conn.query(
      `UPDATE users SET pokeF=? WHERE playerName=?`,
      [poke.pokeF, playerName]
    );
      return true
  }catch(error){
    console.log(error)
  }finally{
    if (conn) conn.release(); //release to pool
  }
  return false
}
  
 


module.exports = {
    getUsers,
    getUser,
    createUser,
    UpdateUser
}