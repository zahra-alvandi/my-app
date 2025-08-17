import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from "./Footer/Footer"
import Header from "./Header/header"

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//       <Footer></Footer>
//     </>
//   )
// }

function App() {
  return (
    <div>
      <div className="nav-background">
        <div className="nav-container">
          <header className='nav-header'>
            <h1><a href="#" className='nav-logo'>SabzLearn</a></h1>
          </header>
          <nav>
            <ul className='nav-ul'>
              <li>
                <a href="#" className='nav-link active-link'>Home</a>
              </li>
              <li>
                <a href="#" className='nav-link'>News</a>
              </li>
              <li>
                <a href="#" className='nav-link'>Contact Us</a>
              </li>
              <li>
                <a href="#" className='nav-link'>About Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
export default App
