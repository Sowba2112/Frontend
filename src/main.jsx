// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import Sow from './Sow.jsx'

// import State from "./State.jsx"
// // import SlamBook from './Slambook.jsx'




// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//      <App /> 
//     {/* <State/> */}
//     {/* <Sow/> */}
    
//   </StrictMode>,
// )




import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Apps from './Apps.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Apps/>
  </StrictMode>,
)