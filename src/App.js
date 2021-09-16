import './index.css'
import { Navbar } from './components/navbar.js'
import { OnlineBar } from './components/online-bar.js'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="inner-container flex items-center justify-center py-3 px-8 border-2 border-red-300">

        {/* <OnlineBar/> */}
      </div>
    </div>
  );
}

export default App;
