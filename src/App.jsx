import React from "react"
import DrinkList from "./components/DrinkList"
import Title from "./components/Title"
import DrinkDetail from "./components/DrinkDetail"

function App() {

  return (
    <body className="bg-[#FFFFFF] w-screen">
      <div className="container px-5 pt-5 mx-auto my-5 border-none rounded-xl drop-shadow-2xl min-h-screen bg-[#F1F8FF] w-[90vw]">
        <Title />
        <DrinkDetail />
        <DrinkList />
      </div>
    </body>
  )
}

export default App
