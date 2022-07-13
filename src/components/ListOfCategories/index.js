import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'

const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const URL = 'https://petgram-server-javier-alpha.vercel.app/categories'
  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(resp => { setCategories(resp); setLoading(false) })
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      newShowFixed !== showFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <Item><Category /></Item>
          : categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )

  return (
    <>
      {renderList()} {showFixed && renderList(true)}
    </>
  )
}
