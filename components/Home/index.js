import './index.css'
import Header from '../Header'

const Home = () => (
  <div className="container">
    <Header />
    <div className="img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="img-home"
      />
    </div>
  </div>
)
export default Home
