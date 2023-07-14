"use client"
import Header from "./components/Header"
import AsideMenu from "./components/AsideMenu"
import { useState } from "react"
import Agent from "./subPages/Agent"

const Home = () => {
  const [currentMenu, setCurrentMenu] = useState<string>("agent")

  const onMenuChange = (menu: string) => {
    setCurrentMenu(menu)
  }

  return (
      <div className="home-container flex flex-col w-full h-screen bg-slate-300">
        <div className="header h-24 w-full border bg-white ">
          <Header />
        </div>
        <div className="content-container flex w-full h-full mt-4 mr-10 px-20">
          <AsideMenu onChange={onMenuChange} />
          <div className="content w-full h-full ml-4 bg-white rounded-sm p-10">
            {currentMenu === "agent" ? (
              <Agent />
            ) : (
              <>
                <h3>Setting: ToDo</h3>
              </>
            )}
          </div>
        </div>
      </div>
  )
}

export default Home
