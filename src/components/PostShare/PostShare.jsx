import React, {useState, useRef} from 'react'
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage, uploadPost } from '../../actions/upLoadAction ';

function PostShare() {
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
    const loading = useSelector((state) => state.postReducer.uploading);
    const [image, setImage] = useState(null);
    const imageRef = useRef()
    const desc = useRef()
    const {user} = useSelector((state) => state.authReducer.authData)
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          setImage(img);
        }
      };
const dispatch = useDispatch()

// Reset Post Share
const resetShare = () => {
  setImage(null);
  desc.current.value = "";
};

const handleSubmit = (e) => {
  e.preventDefault()
  const newPost = {
    userId: user._id,
    desc: desc.current.value
  }
  if(image) {
    const data = new FormData()
    const fileName = Date.now() + image.name
    data.append("name", fileName)
    data.append("file", image)
    newPost.image = fileName
    // console.log(newPost);
    try {
      dispatch (uploadImage(data))
    } catch (error) {
      console.log(error);
    }
  }
  dispatch(uploadPost(newPost))
  resetShare()
} 

  return (
   <div className="PostShare">
    <img src={user.coverPicture
              ? serverPublic + user.profilePicture
              : serverPublic + "defaultProfile.png"} alt="" />
   <div>
    <input ref={desc} required type="text" placeholder='what happening' name="" id="" />
   <div className="postOptions">
        <div className="option" style={{ color: "var(--photo)" }}  onClick={()=>imageRef.current.click()}>
            <UilScenery/>
            Photo
        </div>
        <div className="option" style={{ color: "var(--video)" }} onClick={()=>imageRef.current.click()}>
            <UilPlayCircle/>
            Video
        </div>
        <div className="option" style={{ color: "var(--location)" }} onClick={()=>imageRef.current.click()}>
            <UilLocationPoint/>
            Location
        </div>
        <div className="option" style={{ color: "var(--schedule)" }} onClick={()=>imageRef.current.click()}>
            <UilSchedule/>
            Schedule
        </div>
        <button disabled={loading} onClick={handleSubmit} className="button ps-button">
        {loading ? "uploading" : "Share"}
        </button>
        <div style={{ display: "none" }}>
            <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} onClick={(e)=> {e.currentTarget.value = null}}/>
        </div>
   </div>
     {image && (

        <div className="previewImage">
          <UilTimes onClick={()=>setImage(null)}/>
          <img src={URL.createObjectURL(image)} alt="" />
        </div>

      )}
   </div>
   </div>
  )
}

export default PostShare