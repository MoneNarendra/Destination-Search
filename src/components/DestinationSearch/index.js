import {Component} from 'react'
import Destinationltem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="serch-container">
          <div>
            <h1 className="main-heading">Destination Search</h1>
            <div className="input-container">
              <input
                type="search"
                className="input-ele"
                placeholder="Search"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
                className="search-img"
                alt="search icon"
              />
            </div>
          </div>
        </div>
        <ul className="search-results">
          {searchResults.map(eachDestination => (
            <Destinationltem
              eachDestination={eachDestination}
              key={eachDestination.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
