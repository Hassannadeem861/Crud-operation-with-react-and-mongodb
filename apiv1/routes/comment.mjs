
// Mini Router setup
// Ak file sa default export ak hi ho sakta hain 
//agar two karna ho to hum karli brases sa export karta hain
//hum na nodejs ka import export sikha hain is ka express sa q reaction nahi
import express from 'express'
const router = express.Router()
// export  const {a}  = express.Router() 
// export const {b}  = express.Router() 


// GET     /api/v1/comment /: postId /: commentId
//SIngle Post
router.get("/comment/:postId/:commentId", (req, res, next) => {

    console.log("req.params: ", req.params)

    console.log("This is signup", new Date())

    res.send('All COMMENTS IS HERE ')

})


// GET     /api/v1/comments/:postId
//Multiple Post get
router.get("/comments/:postId", (req, res, next) => {

    console.log("This is signup", new Date())

    res.send('Post Created')

})

// PUT     /api/v1/comment/:postId/:commentId
// Single Comment get
router.put("/comment/:postId/:commentId", (req, res, next) => {

    console.log("This is signup", new Date())

    res.send('Post Created')

})

// DELETE  /api/v1/comment/:postId/:commentId
// Single Comment get
router.delete("/comment/:postId/:commentId", (req, res, next) => {

    console.log("This is signup", new Date())

    res.send('Post Created')

})

export default router