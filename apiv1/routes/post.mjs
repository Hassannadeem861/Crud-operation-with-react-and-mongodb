//Server error response 500-599 Code

// import express from "express";
// import { nanoid } from "nanoid";
// import { client } from "../../mongodb.mjs";
// import { ObjectId } from "mongodb";

// //Create a database
// const db = client.db("cruddb");
// const col = db.collection("posts");

// let router = express.Router();

// // not recommended at all - server should be stateless
// let posts = [
//   {
//     // id: nanoid(),
//     title: "abc post title",
//     text: "some post text",
//   },
// ];

// // POST    /api/v1/post
// router.post("/post", async (req, res, next) => {
//   console.log("this is signup!", new Date());

//   //Self documented Api
//   if (!req.body.title || !req.body.text) {
//     res.status(403);
//     res.send(`required parameters missing,
//         example request body:
//         {
//             title: "abc post title",
//             text: "some post text"
//         } `);
//     return;
//   }

//   try {
//     // Insert a single document, wait for promise so we can read it back
//     const insertResponse = await col.insertOne({
//       //dataBase id: 7843483438443843748343
//       // id: nanoid(),
//       title: req.body.title,
//       text: req.body.text,
//       createOne: new Date()
//     });

//     console.log("insertResponse: ", insertResponse);

//     res.send("post created");
//   } catch (error) {
//     console.log("Error inserting mongodb: ", error);
//     res.status(500).send("Server error, please try later");
//   }

//   // posts.unshift({
//   //     id: nanoid(),
//   //     title: req.body.title,
//   //     text: req.body.text,
//   // })
// });
// // GET     /api/v1/posts
// router.get("/posts", async (req, res, next) => {
//   const cursor = col.find({}).sort({ _id: -1 }).limit(100);
//   try {
//     let results = await cursor.toArray();

//     console.log("results: ", results);

//     res.send(results);
//   } catch (error) {
//     console.log("Error getting data mongodb: ", error);
//     res.status(500).send("Server error, please try later");
//   }
// });

// // GET     /api/v1/post/:postId
// //GET = SINGLE POST
// router.get("/post/:postId", async (req, res, next) => {
//   console.log("this is signup!", new Date());

//   // if (!req.params.postId) {
//   //   res
//   //     .status(403)
//   //     .send(
//   //       `post id must be a valid number, no alphabet is allowed in post id`
//   //     );
//   // }
//   if (!ObjectId.isValid(req.params.postId)) {
//     res.status(403).send(`Invalid post id`);
//     return;
//   }

//   // const cursor = col.find({});
//   try {
//     //Crytarya
//     let result = await col.findOne({ _id: new ObjectId(req.params.postId) });

//     console.log("result: ", result); //  [{.....}] []
//     res.send(result);
//   } catch (error) {
//     console.log("Error getting data mongodb: ", error);
//     res.status(500).send("Server error, please try later");
//   }

//   // for (let i = 0; i < posts.length; i++) {
//   //   if (posts[i].id === req.params.postId) {
//   //     res.send(posts[i]);
//   //     return;
//   //   }
//   // }
//   // res.send("post not found with id " + req.params.postId);
// });

// // PUT     /api/v1/post/:userId/:postId
// // {
// //     title: "updated title",
// //     text: "updated text"
// // }

// router.put("/post/:postId", async (req, res, next) => {
//   if (!ObjectId.isValid(req.params.postId)) {
//     res.status(403).send(`Invalid post id`);
//     return;
//   }

//   //Self documented Api
//   if (!req.body.text && !req.body.title) {
//     res.status(403)
//       .send(`required parameter missing, atleast one key is required.
//      example put body:
//         PUT     /api/v1/post/:postId
//         {
//             title: "updated title",
//             text: "updated text"
//         }
//         `);
//   }

//   let dataToBeUpdated = {};

//   if (req.body.title) {
//     dataToBeUpdated.title = req.body.title;
//   }
//   if (req.body.text) {
//     dataToBeUpdated.text = req.body.text;
//   }

//   try {
//     // Insert a single document, wait for promise so we can read it back
//     const updateResponse = await col.updateOne(
//       {
//         _id: new ObjectId(req.params.postId),
//       },

//       {
//         $set: dataToBeUpdated,
//       }
//     );

//     console.log("updateResponse: ", updateResponse);

//     res.send("post Updated");
//   } catch (error) {
//     console.log("Error inserting mongodb: ", error);
//     res.status(500).send("Server error, please try later");
//   }
// });

// // DELETE  /api/v1/post/:userId/:postId
// router.delete("/post/:postId", async (req, res, next) => {
//   if (!ObjectId.isValid(req.params.postId)) {
//     res.status(403).send(`Invalid post id`);
//     return;
//   }

//   try {
//     // Insert a single document, wait for promise so we can read it back
//     const deleteResponse = await col.deleteOne({
//       _id: new ObjectId(req.params.postId),
//     });

//     console.log("deleteResponse: ", deleteResponse);

//     res.send("post delete");
//   } catch (error) {
//     console.log("Error deleting mongodb: ", error);
//     res.status(500).send("Server error, please try later");
//   }
// });

// export default router;

// //Server error response 500-599 Code

import express from "express";
// import { nanoid } from "nanoid";
import { client } from "../../mongodb.mjs";
import { ObjectId } from "mongodb";

//Create a database
const db = client.db("cruddb");
const col = db.collection("posts");

let router = express.Router();

// not recommended at all - server should be stateless
let posts = [
  {
    // id: nanoid(),
    title: "abc post title",
    text: "some post text",
  },
];

// POST    /api/v1/post
router.post("/post", async (req, res, next) => {
  console.log("this is signup!", new Date());

  //Self documented Api
  if (!req.body.title || !req.body.text) {
    res.status(403);
    res.send(`required parameters missing, 
        example request body:
        {
            title: "abc post title",
            text: "some post text"
        } `);
    return;
  }

  try {
    // Insert a single document, wait for promise so we can read it back
    const insertResponse = await col.insertOne({
      //dataBase id: 7843483438443843748343
      // id: nanoid(),
      title: req.body.title,
      text: req.body.text,
      createOne: new Date(),
    });

    console.log("insertResponse: ", insertResponse);

    res.send({
      message: "post created"
    });
  } catch (error) {
    console.log("Error inserting mongodb: ", error);
    res.status(500).send("Server error, please try later");
  }

  // posts.unshift({
  //     id: nanoid(),
  //     title: req.body.title,
  //     text: req.body.text,
  // })
});
// GET     /api/v1/posts
router.get("/posts", async (req, res, next) => {
  const cursor = col.find({}).sort({ _id: -1 }).limit(100);
  try {
    let results = await cursor.toArray();

    console.log("results: ", results);

    res.send({
      message: results,
    });
  } catch (error) {
    console.log("Error getting data mongodb: ", error);
    res.status(500).send("Server error, please try later");
  }
});

// GET     /api/v1/post/:postId
//GET = SINGLE POST
router.get("/post/:postId", async (req, res, next) => {
  console.log("this is signup!", new Date());

  // if (!req.params.postId) {
  //   res
  //     .status(403)
  //     .send(
  //       `post id must be a valid number, no alphabet is allowed in post id`
  //     );
  // }
  if (!ObjectId.isValid(req.params.postId)) {
    res.status(403).send(`Invalid post id`);
    return;
  }

  // const cursor = col.find({});
  try {
    //Crytarya
    let result = await col.findOne({ _id: new ObjectId(req.params.postId) });

    console.log("result: ", result); //  [{.....}] []
    res.send(result);
  } catch (error) {
    console.log("Error getting data mongodb: ", error);
    res.status(500).send({
     message:"Server error, please try later"
    });
  }

  // for (let i = 0; i < posts.length; i++) {
  //   if (posts[i].id === req.params.postId) {
  //     res.send(posts[i]);
  //     return;
  //   }
  // }
  // res.send("post not found with id " + req.params.postId);
});

// PUT     /api/v1/post/:userId/:postId
// {
//     title: "updated title",
//     text: "updated text"
// }

router.put("/post/:postId", async (req, res, next) => {
  if (!ObjectId.isValid(req.params.postId)) {
    res.status(403).send(`Invalid post id`);
    return;
  }

  //Self documented Api
  if (!req.body.text && !req.body.title) {
    res.status(403)
      .send(`required parameter missing, atleast one key is required.
     example put body: 
        PUT     /api/v1/post/:postId
        {
            title: "updated title",
            text: "updated text"
        }
        `);
  }

  let dataToBeUpdated = {};

  if (req.body.title) {
    dataToBeUpdated.title = req.body.title;
  }
  if (req.body.text) {
    dataToBeUpdated.text = req.body.text;
  }

  try {
    // Insert a single document, wait for promise so we can read it back
    const updateResponse = await col.updateOne(
      {
        _id: new ObjectId(req.params.postId),
      },

      {
        $set: dataToBeUpdated,
      }
    );

    console.log("updateResponse: ", updateResponse);

    res.send("post Updated");
  } catch (error) {
    console.log("Error inserting mongodb: ", error);
    res.status(500).send("Server error, please try later");
  }
});

// DELETE  /api/v1/post/:userId/:postId
router.delete("/post/:postId", async (req, res, next) => {
  if (!ObjectId.isValid(req.params.postId)) {
    res.status(403).send(`Invalid post id`);
    return;
  }

  try {
    // Insert a single document, wait for promise so we can read it back
    const deleteResponse = await col.deleteOne({
      _id: new ObjectId(req.params.postId),
    });

    console.log("deleteResponse: ", deleteResponse);

    res.send("post delete");
  } catch (error) {
    console.log("Error deleting mongodb: ", error);
    res.status(500).send("Server error, please try later");
  }
});

export default router;
