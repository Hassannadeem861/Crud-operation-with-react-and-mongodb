
// Mini Router setup
// Ak file sa default export ak hi ho sakta hain 
//agar two karna ho to hum karli brases sa export karta hain
//hum na nodejs ka import export sikha hain is ka express sa q reaction nahi
import express from 'express'
const router = express.Router() 
// export  const {a}  = express.Router() 
// export const {b}  = express.Router() 



// GET     /api/v1/feed/:userId

router.get("/feed/:userId", (req, res, next) => {

    console.log("This is signup", new Date())

    res.send('Post Created')

})

export default router