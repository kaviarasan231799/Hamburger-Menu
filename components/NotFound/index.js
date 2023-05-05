import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="not-container">
    <Header />
    <div className="not-img">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
        alt="not found"
        className="not-found"
      />
      <h1 className="head-lost">Lost Your Way?</h1>
      <p className="sorry-para">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </div>
)

export default NotFound
