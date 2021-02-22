import express from 'express';

const app = express();

// http://localhost:3333/
app.get("/",(req,res)=>{
  return res.json({ message:"Hello word nlw04" });
});

app.post("/",(req,res) =>{
  return res.json({ message:"Os dados foram salvos com sucesso!" });
});

app.listen(3333,()=>console.log("Server is run"));