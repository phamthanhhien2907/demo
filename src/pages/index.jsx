import VideoCustom from "@/components/video-custom"
import LeftBar from "../components/LeftBar"
import demo from "../assets/demo.jpg"
import VideoList from "@/components/video-list"
import { Link } from "react-router-dom"
import path from "@/utils/path"
const Home = () => {
  return (
    <>
      <div className="fixed left-0">
        <LeftBar/>
      </div>
      <div className="w-[100%] pl-[12.5%] flex flex-col gap-16">
      <div className="flex gap-4">
        <VideoCustom/>
       <div className="flex flex-col gap-2 h-[620px] overflow-scroll scrollbar-hide">
      <Link to={path.MATCH}>
      <div className="w-[340px] h-[170px] cursor-pointer">
          <img src={demo} alt="demo" className="w-full h-full" />
        </div></Link>
        <Link to={path}>
      <div className="w-[340px] h-[170px] cursor-pointer">
          <img src={demo} alt="demo" className="w-full h-full" />
        </div></Link>
        <Link to={path}>
      <div className="w-[340px] h-[170px] cursor-pointer">
          <img src={demo} alt="demo" className="w-full h-full" />
        </div></Link>
        <Link to={path}>
      <div className="w-[340px] h-[170px] cursor-pointer">
          <img src={demo} alt="demo" className="w-full h-full" />
        </div></Link>
        <Link to={path}>
      <div className="w-[340px] h-[170px] cursor-pointer">
          <img src={demo} alt="demo" className="w-full h-full" />
        </div></Link>
       </div>
      </div>
      <VideoList/>
      </div>
    </>
  )
}

export default Home