import TopBar from "../global/topBar/TopBar"
import Footer from "../global/footer/Footer"
import MobileTopBar from "./Mobile/topbar/MobileTopBar"
import Announcement from "./topBar/Announcement"
export default function Layout({ children }) {
    return (
      <div className="flex flex-col items-center overflow-hidden bg-whiteBg text-primaryText">
        <Announcement />
        <TopBar />
        <MobileTopBar />
        <main >{children}</main>
        <Footer />
      </div>
    )
  }