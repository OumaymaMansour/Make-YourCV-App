const express = require("express");
// const itemRoutes = require('./routes/item.routes')
const cors =  require ("cors")
// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
 const {db} = require('./database-mysql');
const { register ,login,getAll, deleteOneUser,addToCv,getCv} = require("./controllers/item.controller");
// const db = require('./database-mongo');

const app = express();
const PORT = process.env.PORT || 3000

app.use(cors())


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

// app.use("/api", itemRoutes);

app.post('/api/register', async (req,res) => {

try {   

const user = await register (req.body.username,req.body.email,req.body.password)
res.status(201).send(user)

}

catch (err)
 {
  console.log(err)
  res.status(500).send(err)}
})

app.delete('/api/login/:username', async (req,res) => {
  console.log(req.params.username)
  try {  
  const user = await deleteOneUser (req.params.username) ;
    res.status(201).json(user[0]) }

  catch (err)
   {
    console.log(err)
    res.status(500).send(err)}
  })


app.post('/api/login/:username', async (req,res) => {
  console.log(req.params.username,req.body.password)
  try {  
  const user = await login (req.params.username,req.body.password) ;


  if (user[0].length === 0) { 
    res.status(404).send("Not Found")
}
  else if (req.body.password === user[0][0].password) {
    console.log (user[0][0])
    res.status(201).json(user[0][0]) }

    else {
    res.status(401).send("wrong password")
   
  }

  }

  catch (err)
   {
    console.log(err)
    res.status(500).send(err)}
  })


  app.get('/api/users', async (req,res) => {

    try {   
    
    const users = await getAll ()
    res.status(200).send(users[0])
    
    }
    
    catch (err)
     {
      console.log(err)
      res.status(500).send(err)}
    })


    app.post('/api/cv/:id', async (req,res) => {

      try {   
   
        const info = await addToCv (req.body.fullname,req.body.mobile,req.body.dateofbirth,req.body.description,req.body.email,req.body.education,req.body.skills,req.body.languages,req.params.id)
        
        res.status(200).send(info)
        
        }
        
        catch (err)
         {
          console.log(err)
          res.status(500).send(err)}
        })

        app.get('/api/cv/:id', async (req,res) => {

          try {   
          
          const cv = await getCv (req.params.id)
          res.status(200).send(cv[0])
          
          }
          
          catch (err)
           {
            console.log(err)
            res.status(500).send(err)}
          })
 

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
