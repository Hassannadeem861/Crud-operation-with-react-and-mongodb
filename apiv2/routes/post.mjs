
// Mini Router setup
// Ak file sa default export ak hi ho sakta hain 
//agar two karna ho to hum karli brases sa export karta hain
//hum na nodejs ka import export sikha hain is ka express sa q reaction nahi
import express from 'express'
const router = express.Router()
// export  const {a}  = express.Router() 
// export const {b}  = express.Router() 

// GET     /api/v1/post/:userId/:postId
// Single Post
router.get("/post/:userId/:postId", (req, res, next) => {

    console.log("This is signup", new Date())

    res.send('Post Created')

})

// GET     /api/v1/posts/:userId
//Multiple Post 
router.get("/posts/:userId", (req, res, next) => {

    console.log("This is signup", new Date())

    res.send('Post Created')

})


// POST    /api/v1/post

router.post("/post", (req, res, next) => {

    console.log("This is signup", new Date())

    res.send('Post Created')

})

// PUT     /api/v1/post/:userId/:postId

router.put("/post/:userId/:postId", (req, res, next) => {

    console.log("This is signup", new Date())

    res.send('Post Created')

})


// DELETE  /api/v1/post/:userId/:postId

router.delete("/post/:userId/:postId", (req, res, next) => {

    console.log("This is signup", new Date())

    res.send('Post Created')

})

export default router