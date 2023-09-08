
import express from 'express'
const router = express.Router()

import authRouter from './routes/auth.mjs'
import commentRouter from './routes/comment.mjs'
import postRouter from './routes/post.mjs'
import feedRouter from './routes/feed.mjs'


// /api/v1/login
router.use(authRouter)

//ak standard express ka server asa hi hota hain
//MiddleWare function
router.use((req, res, next) => {

    const token = "valid"
    if (token === "valid") {

        next();

    } else {
        res.status(401).send({
            message: "invalid token"
        })
    }
})

// router.use(commentRouter)
router.use(postRouter) // Secure Apis
// router.use(feedRouter)

router.post("/weather", (req, res, next) => {

    console.log("req.body", req.body)

    res.send({

        message: "Weather is normal",
        apiVersion: "v1",
        temp: 32,
        min: 20,
    });
})

export default router