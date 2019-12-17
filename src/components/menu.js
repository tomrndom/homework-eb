import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary fixed="top" className="app-menu">
          <Menu.Item as={Link} to='/' 
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item as={Link} to='/explore' 
            name='explore'
            active={activeItem === 'explore'}
            onClick={this.handleItemClick}
          />
          <Menu.Item as={Link} to='/new-post' 
            name='newPost'
            active={activeItem === 'newPost'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    )
  }
}