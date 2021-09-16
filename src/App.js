import './index.css'
import { Navbar } from './components/navbar.js'
import { OnlineBar } from './components/online-bar.js'
import { Feed } from './components/feed.js'
import { Leaderboard } from './components/leaderboard.js'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="inner-container flex py-3 px-8">

        <Feed/>
        <OnlineBar/>

      </div>
    </div>
  );
}

export default App;
