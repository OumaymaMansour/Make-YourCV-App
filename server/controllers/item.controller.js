// DELETE THIS LINE


// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const {db,connection } = require("../database-mysql");
// const Item = require('../database-mongo/Item.model.js');

const register = async (username,email,password) => {

    try {
           return connection.query("Insert into user (username,email,password) values (?,?,?)", [username,email,password])
          
    }
    
    catch(err){
        console.log(err)
    }
};


const login = async (username) => {

try {
    return connection.query(`Select * from user where username ="${username}" `) 
}

catch(err){
 console.log(err)
}
};

const getAll = async () => {

    try {
        return connection.query("Select * from user") 
    }
    
    catch(err){
     console.log(err)
    }
    };

 const deleteOneUser = async (username) => { 
    try {
    return connection.query(`delete from user where username = "${username}"`) 
}

catch(err){
 console.log(err)
}}   


module.exports = { register ,login,getAll,deleteOneUser};
