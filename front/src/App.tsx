import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import RenderRoutes from './routes'
import { RecoilRoot } from 'recoil'

function App() {
  return (
    <RecoilRoot>
      <Router>
        <RenderRoutes />
      </Router>
    </RecoilRoot>
  )
}

export default App
