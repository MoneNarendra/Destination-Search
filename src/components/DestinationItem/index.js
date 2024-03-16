import {Component} from 'react'
import './index.css'

class Destinationltem extends Component {
  render() {
    const {eachDestination} = this.props
    const {name, imgUrl} = eachDestination
    return (
      <li className="search-result">
        <img src={imgUrl} className="images" alt={name} />
        <p className="image-name">{name}</p>
      </li>
    )
  }
}

export default Destinationltem
