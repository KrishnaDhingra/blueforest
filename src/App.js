import './index.css'
import React, { useState, createContext, useContext} from 'react'
import { Navbar } from './components/navbar.js'
import { OnlineBar } from './components/online-bar.js'
import { Feed } from './components/feed.js'
import { Leaderboard } from './components/leaderboard.js'
import { NavButtonText } from './components/basic-components'

export const MyContext = createContext()

export let App = () => {
  const [showFeed, setFeed] = useState(true)
  const [showLeaderboard, setLeaderboard] = useState(false)
  
  return (
    <MyContext.Provider value={{feed: [showFeed, setFeed], leaderboard: [showLeaderboard, setLeaderboard]}}>
      <div className="App">
        <Navbar/>
        <div className="inner-container flex py-3 px-8">

          {showFeed && <Feed/>}
          <OnlineBar/>

        </div>
      </div>
    </MyContext.Provider>
  );
}

export let NavButton = (props) => {
  return (
    <button className="bg-blue-100 rounded-3xl shadow-md px-12 py-1 border-none">
      <NavButtonText text={props.text}/>
    </button>
  )
}

