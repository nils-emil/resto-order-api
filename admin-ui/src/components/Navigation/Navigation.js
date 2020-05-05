import React from 'react'

import './styles.scss'
import { Cog, Home, Map, Portfolio } from '../../resources/icons_index'
import { Link } from 'react-router-dom'
import IconButton from '../IconButton/IconButton'

export const pages = {
  HOME: 'HOME',
  MENU: 'MENU',
  SETTINGS: 'SETTINGS',
  STATISTICS: 'STATISTICS'
}

function Navigation(props) {

  const { currentPage } = props

  const links = [
    {
      page: pages.HOME,
      icon: Home,
      linkTo: '/'
    },
    {
      page: pages.MENU,
      icon: Map,
      linkTo: '/menu-list'
    }
  ]

  const otherLinks = [
    {
      page: pages.SETTINGS,
      icon: Cog,
      linkTo: '/settings'
    },
    {
      page: pages.STATISTICS,
      icon: Portfolio,
      linkTo: '/statistics'
    }
  ]

  return links.filter(link => link.page !== currentPage).map(link => (
    <Link to={link.linkTo} key={link.page}>
      <IconButton Icon={link.icon}/>
    </Link>
  ))
}

export default Navigation
