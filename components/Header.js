import React from 'react'
import { Link } from 'react-router'
import { func, string } from 'prop-types'

class Header extends React.Component {
  render () {
    return (
      <header>
        <h1>
          <Link to='/'>
            Movie Prime
          </Link>
        </h1>
        <input onChange={this.props.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='Search' />
      </header>
    )
  }
}

Header.propTypes = {
  handleSearchTermChange: func,
  searchTerm: string
}

export default Header