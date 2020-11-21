import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import _debounce from 'lodash/debounce'
import _isEmpty from 'lodash/isEmpty'
import { useStoreState, useStoreActions } from 'easy-peasy'
import MaterialIcon from 'material-icons-react'

import './kabanActions.scss'

const KabanActions = () => {
  const list = useStoreState((state) => state.collections.list)
  const setSearchState = useStoreActions(actions => actions.collections.setResults)
  const [selectedTag, setSelectedTag] = useState('')

  const debouncedSearchBox = _debounce(({ target }) => {
    const value = target.value

    const result = list.map(co => {
      return {
        ...co,
        items: co.items.filter(item => item.title.includes(value))
      }
    })

    setSearchState(result)
  }, 500)

  const debouncedSearchTag = _debounce(({ target }) => {
    const value = target.value

    if (_isEmpty(value)) {
      setSearchState(list)
      return
    }

    setSelectedTag(value)

    const result = list.map(co => {
      return {
        ...co,
        items: co.items.filter(item => item.tag === value)
      }
    })

    setSearchState(result)
  }, 500)

  const resetFilters = () => {
    setSelectedTag('')
    setSearchState(list)
  }

  return (
    <div className='t_KabanActions'>
      <Form.Group controlId="formBasicEmail">
        <Form.Control onChange={debouncedSearchBox} type="text" placeholder="Search by title" />
      </Form.Group>
      <Form.Group className='t_KabanActions_Tag'>
        Filter by
        <Form.Control as="select" onChange={debouncedSearchTag} defaultValue={selectedTag}>
          <option value="">Show All</option>
          <option value="seo-article">SEO article</option>
          <option value="long-form">Long form</option>
          <option value="blog-post">Blog post</option>
        </Form.Control>
      </Form.Group>
      <Form.Group className='t_KabanActions_RefreshFilters' onClick={() => resetFilters(list)}>
        <MaterialIcon icon="refresh" />
      </Form.Group>
    </div>
  )
}

export default KabanActions
