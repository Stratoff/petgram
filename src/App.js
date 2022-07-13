import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { Logo } from './components/Logo'
import { GlobalStyle } from './GlobalStyles'
import { ListOfPhotoCards } from './ListOfPhotoCards'

export const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </>
)
