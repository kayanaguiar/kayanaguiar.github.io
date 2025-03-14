import './App.css'
import Footer from './components/layout/footer/footer.components'
import Navigation from './components/layout/navigation/navigation.component'
import SignMsg from './components/common/signMsg/signMsg.component'
import AppRoutes from './routes/routes'
import { BrowserRouter as Router } from "react-router-dom";

function App() {

  return (
    <Router>
      <header>
        <SignMsg/>
        <Navigation></Navigation>
      </header>
      <main>
        <AppRoutes></AppRoutes>
      </main>
      <Footer></Footer>
    </Router>
  )
}

export default App
