import TopBar from "../global/topBar/TopBar"
export default function Layout({ children }) {
    return (
      <>
        <TopBar />
        <main>{children}</main>
      </>
    )
  }