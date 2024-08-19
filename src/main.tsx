import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// import './index.css'


// const domNode = document.getElementById("root");
// const root = createRoot(domNode!);

// //element
// root.render(<Hello />);

// //Document Fragment
// root.render(<>Hiii</>);

// //element
// root.render(<div>Hiii</div>);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
