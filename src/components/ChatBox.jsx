import { useTheme } from "./theme-provider";

const ChatBox = () => {
  const {  theme } = useTheme();
  return (
    <>
        {theme === "light" ? <div className="flex flex-col gap-2 h-[790px] overflow-scroll scrollbar-hide w-full">
        <div className="flex flex-col h-full mx-auto w-full border rounded-sm shadow-lg">
            <div className="bg-blue-500 text-white p-4 rounded-t-sm">
                <h2 className="text-lg font-semibold text-center">Trò chuyện</h2>
            </div>
            <div className="flex-1 p-4 overflow-y-auto bg-white">
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Quản trị viên Dimas:</span>
                <span className="ml-2 text-sm">Xin chào mọi người... chào mừng bạn đến với JALALIVE, phát trực tuyến miễn phí mà không phải trả tiền, chất lượng tốt nhất và không có quảng cáo!</span>
                </div>
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Dexx..R:</span>
                <span className="ml-2 text-sm">Năm tới, người ta nói rằng khuôn mặt của người dẫn chương trình sẽ xuất hiện, chị Mochi?</span>
                </div>
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Rully:</span>
                <span className="ml-2 text-sm">Chúng ta chọn màu gì đây anh bạn?</span>
                </div>
                {/* Thêm nhiều tin nhắn ở đây */}
            </div>
            <div className="flex p-4 bg-white rounded-b-sm">
                <input
                type="text"
                className="flex-1 p-2 border border-gray-200 rounded-l-sm focus:outline-none text-black border-r-0"
                placeholder="Nhập ý kiến"
                />
                <button className="bg-white border border-gray-200 text-blue-500 p-2 border-l-0  rounded-r-sm  ">
                Gửi
                </button>
            </div>
        </div>
     </div> : <div className="flex flex-col gap-2 h-[790px] overflow-scroll scrollbar-hide w-full">
        <div className="flex flex-col h-full mx-auto w-full border rounded-sm shadow-lg">
            <div className="bg-gray-800 text-white p-4 rounded-t-sm">
                <h2 className="text-lg font-semibold text-center">Trò chuyện</h2>
            </div>
            <div className="flex-1 p-4 overflow-y-auto bg-[#16181a]">
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Quản trị viên Dimas:</span>
                <span className="ml-2 text-sm">Xin chào mọi người... chào mừng bạn đến với JALALIVE, phát trực tuyến miễn phí mà không phải trả tiền, chất lượng tốt nhất và không có quảng cáo!</span>
                </div>
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Dexx..R:</span>
                <span className="ml-2 text-sm">Năm tới, người ta nói rằng khuôn mặt của người dẫn chương trình sẽ xuất hiện, chị Mochi?</span>
                </div>
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Rully:</span>
                <span className="ml-2 text-sm">Chúng ta chọn màu gì đây anh bạn?</span>
                </div>
                {/* Thêm nhiều tin nhắn ở đây */}
            </div>
            <div className="flex p-4 bg-[#16181a] rounded-b-sm">
                <input
                type="text"
                className="flex-1 p-2 border border-gray-400 rounded-l-sm focus:outline-none text-black"
                placeholder="Nhập ý kiến"
                />
                <button className="bg-blue-500 text-white p-2 rounded-r-sm hover:bg-blue-600">
                Gửi
                </button>
            </div>
        </div>
     </div>}
    </>
  );
};

export default ChatBox;