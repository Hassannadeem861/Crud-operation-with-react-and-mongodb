
// Mini Router setup
// Ak file sa default export ak hi ho sakta hain 
//agar two karna ho to hum karli brases sa export karta hain
//hum na nodejs ka import export sikha hain is ka express sa q reaction nahi
import express from 'express'
const router = express.Router() 
// const router from express.Router() 
// export  const {a}  = express.Router() 
// export const {b}  = express.Router() 


router.post("/login", (req, res, next) => {

    console.log("This is login v2", new Date())

    res.send("This is login v2" + new Date())

})

router.post("/signup", (req, res, next) => {

    console.log("This is signup v2", new Date())

    res.send("This is signup v2" + new Date())

})

export default router