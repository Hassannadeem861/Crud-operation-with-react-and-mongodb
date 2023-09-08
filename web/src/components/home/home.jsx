import axios from "axios";
//Hook hum in things ko khata hain go humari UI sai connected ho
//state local variable hota hain
import { useState, useRef, useEffect } from "react";
import "./home.css";
// import WeatherCard from "../weatherWidget/weatherWidget";

//Busniess Logic Complete
const CreatePost = () => {
  // console.log("CreatePost: ", CreatePost)
  const baseUrl = "http://localhost:5001";
  // console.log("allPosts: ", allPosts)
  const postTitleInputRef = useRef(null);
  const postTextInputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [editAlert, setEditAlert] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const [toggleRefresh, setToggleRefresh] = useState(false);

 
  // DATABASE READ FUNCTION 

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${baseUrl}/api/v1/posts`);
        console.log("response: ", response.data);
        setIsLoading(false);
        setAllPosts(response.data);
        setToggleRefresh(!toggleRefresh);
        //CreatePost()
      } catch (error) {
        console.log("error: ", error.data);
        setIsLoading(false);
      }
    };
    fetchData();
    // return () => {
    //   //CleanUp Function
    // };
  }, [toggleRefresh]);


  // DATABASE CREATE POST FUNCTION

  const SubmitPost = async (event) => {
    event.preventDefault();
    // console.log("Function is Running: ", SubmitPost);
    try {
      setIsLoading(true);
      const response = await axios.post(`${baseUrl}/api/v1/post`, {
        title: postTitleInputRef.current.value,
        text: postTextInputRef.current.value,
      });
      console.log("response: ", response.data);
      setAlert(response.data.message);
      setIsLoading(false);
    } catch (error) {
      console.log("error: ", error?.data);
      setIsLoading(false);
    }
  };
};

//      DELETE POST FUNCTION

const deletePost = async (_id) => {
  console.log("deletePost: ", _id);

  try {
    setIsLoading(true);
    const response = await axios.delete(`${baseUrl}/api/v1/post/${_id}`, {

      // title: postTitleInputRef.current.value,
      // text: postTextInputRef.current.value,

    });
    setIsLoading(false);
    console.log("response: ", response.data);
    setAlert(response.data.message);
    setToggleRefresh(!toggleRefresh)
  } catch (error) {
    console.log("error: ", error?.data);
    setIsLoading(false);
  }
};


//Edit Function
const editSaveSubmitHandler = async (e) => {
e.preventDefault()
const id = e.target.element[0].value;
const title = e.target.element[1].value;
const text = e.target.element[2].value;

try {
  setIsLoading(true);
  const response = await axios.put(`${baseUrl}/api/v1/post/${_id}`, {
    title: title,
    text: text,
  });
  setIsLoading(false);
  console.log("response: ", response.data);
  setAlert(response?.data?.message);
  setToggleRefresh(!toggleRefresh)
} catch (error) {
  console.log("error: ", error?.data);
  setIsLoading(false);
}

}




return ( 
   <div>
    <form id="form" onSubmit={SubmitPost}>
      <label htmlFor="postTitleInputRef">PostTitle:</label>
      <input
        type="text"
        id="postTitleInputRef"
        maxLength={20}
        minLength={2}
        placeholder="Enter Your PostTitle"
        required
        ref={postTitleInputRef}
      />

      <br />

      <label htmlFor="postTextInputRef">PostText:</label>
      <textarea
        type="text"
        id="postTextInputRef"
        maxLength={1000}
        minLength={5}
        placeholder="Enter Your PostText"
        required
        ref={postTextInputRef}
      />
      <br />
      <button type="submit" id="btn">
        Publish Post
      </button>
    <span>
    {alert && alert }
    {isLoading && "Loading..." }
    </span>
    </form>

    

    <br />  
     <div>
        {allPosts.map((post, index) => (
        <div key={post._id} className='post'>
          { (post.isEdit) ? 
          <form className={post} id="editForm">
          <input value={post._id} type="text" disabled hidden id="" placeholder="Edit Title" required />
          <input defaultValue={post.title} type="text" id="editInput" placeholder="Edit Title" required />
          <br />
          <textarea defaultValue={post.text} type="text" id="editInput" placeholder="Edit Text" required />
          <br />
          <button type="submit" onSubmit={editSaveSubmitHandler}>Edit</button>

          <button type="button" onClick={ () => {
            post.isEdit = false;
            setAllPosts([...allPosts]);  

          }}>cancel</button>
          <span>
          {editAlert && editAlert }
          {isLoading && "Loading..." }
          </span>
        </form>  
          : 
          <div>
          <h2>{post.title}</h2> 
          <p>{post.text}</p>
         <button type="click" id="edit-post" onClick={(e) => {
          allPosts[index].isEdit = true
          setAllPosts([...allPosts])
        }}
        >Edit Post</button>
         <button 
         type="click"
          id="del-post"
          onClick={(e) =>{
          deletePost(post._id)
        }}
        >
        Delete Post
        </button>
        </div>
   }


        </div>
     ))}
  </div> 


  </div>
);
export default CreatePost;

// import axios from "axios";
// import { useState, useRef } from "react";
// // import WeatherCard from "../weatherWidget/weatherWidget";

// //Busniess Logic Complete
// const CreatePost = () => {

//   const postTitleInputRef = useRef(null)
//   const postTextInputRef = useRef(null)

//   const [weatherData, setWeatherData] = useState([])

//    const SubmitPost = async (event) => {
//     event.preventDefault();
//     // console.log("Function is Running: ", SubmitPost);

//     // console.log(`Weatheris getting of ${cityNameRef.current.value }...`);

//     let API_KEY = "9a2fa1d23bd03f187e478c39b3ea14d4";
//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${cityNameRef.current.value}&appid=${API_KEY}&units=metric`
//       );
//       console.log("response: ", response.data);
//       // setWeatherData(response.data)
//       setWeatherData([response.data, ...weatherData])
//     } catch (error) {

//       console.log("error: ", error);
//     }
//   };

//   // const changeHandler = (e) => {
//   //   e.preventDefault()
//   //   setCityName(e.target.value)
//   //   console.log("changeHandler: ", e.target.value);

//   // }

//   return (
//     <div>
//       <h1 className="App">
//         <strong>Weather App</strong>
//       </h1>
//       <br />
//       {/* onSubmit={getWeather} */}
//       <form id="form" onSubmit={SubmitPost}>
//         <label htmlFor="postTitleInput">PostTitle:</label>
//         <input
//           type="text"
//           id="postTitleInput"
//           maxLength={20}
//           minLength={2}
//           placeholder="Enter Your PostTitle"
//           required
//           ref={postTitleInputRef}
//         />

//         <br />

//         <label htmlFor="postTitleInput">PostText:</label>
//         <input
//           type="text"
//           id="postTextInput"
//           maxLength={1000}
//           minLength={5}
//           placeholder="Enter Your PostText"
//           required
//           ref={postTextInputRef}>
//           </input>
//           <br />
//         <button type="submit" id="btn">Get Weather</button>
//       </form>

//       <br />

//       <hr />

//       <br />

//   {/* Conditional Code */}
//    {weatherData.length ? (

//    weatherData.map((eachweatherData, index) => {
//      return <WeatherCard key={index} weatherData={eachweatherData}/>;
//    })

//   ) : (

//   <div>No Data</div>

//   )}

//  </div>

//   );
// };

// export default CreatePost;
