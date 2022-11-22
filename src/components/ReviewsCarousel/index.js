import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    presentIndex: 0,
  }

  onClickingLeftArrow = () => {
    const {presentIndex} = this.state
    const {reviewsList} = this.props

    if (presentIndex > 0) {
      this.setState(prevState => ({presentIndex: prevState.presentIndex - 1}))
    }
  }

  onClickingRightArrow = () => {
    const {presentIndex} = this.state
    const {reviewsList} = this.props

    if (reviewsList.length - 1 > presentIndex) {
      this.setState(prevState => ({
        presentIndex: prevState.presentIndex + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {presentIndex} = this.state
    const {imgUrl, companyName, username, description} = reviewsList[
      presentIndex
    ]

    return (
      <div className="main-background-container">
        <div className="bg-cont">
          <h1 className="head">Reviews</h1>
          <div className="img-cont">
            <img src={imgUrl} className="image" alt={username} />
          </div>
          <div className="arrows-name-cont">
            <button
              type="button"
              className="btn"
              testId="leftArrow"
              onClick={this.onClickingLeftArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="left-arrow"
              />
            </button>
            <p className="name">{username}</p>
            <button
              type="button"
              className="btn"
              testId="rightArrow"
              onClick={this.onClickingRightArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="right-arrow"
              />
            </button>
          </div>
          <p className="para1">{companyName}</p>
          <p className="para2">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
