import React, {useState} from 'react'
import './RightSide.css'
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSignOutAlt  } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from '../ShareModal/ShareModel';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/AuthAction';

function RightSide() {
  const dispatch = useDispatch()
    const [modalOpened, setModalOpened] = useState(false);
    const hanldeLogout = () => {
      dispatch(logout())
    }
  return (
    <div className="RightSide">
        <div className="navIcons">
          <Link to = "/auth">
        <img src={Home} alt="" />
          </Link>
        <Link to = '../chat'>
        <img src={Comment} alt="" />
        </Link>
        <div style={{cursor:"pointer"}} onClick={hanldeLogout}>
        <UilSignOutAlt />
        </div>
      </div>
      <TrendCard/>
      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  )
}

export default RightSide