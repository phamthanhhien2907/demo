import TabsVerticel from "./TabsVerticel"
import header_gif from "../assets/header_gif.gif"

const HomePage = () => {
  return (
    <div className="w-full">
        <div className="bg-black fixed top-0 z-50 h-[60px] flex items-center px-4 gap-4 overflow-hidden w-full">
            <img src={header_gif} className="h-[45px]" alt="header_gif" />
             <div className="flex w-full items-end gap-4 justify-end">
                <button className="w-[90px] h-[35px] bg-[#91EF11] rounded-full text-[10px]">Tải xuống</button>
             </div>
        </div>
        <TabsVerticel/>
    </div>
  )
}

export default HomePage