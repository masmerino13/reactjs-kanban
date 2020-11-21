import React from 'react'
import {
  SortableContainer
} from "react-sortable-hoc"
import { Badge } from 'react-bootstrap'

import { SortableItem } from '../sortableItem'

import './sortableList.scss'

const SortableList = SortableContainer(
  ({ setIsHovering, collections }) => {
    const setBadgeVarian = key => {
      switch (key) {
        case 'to-do':
          return 'warning'
        case 'in-progress':
          return 'primary'
        case 'done':
          return 'success'
        default:
          return 'dark'
      }
    }

    return (
      <div className='t_SortableList'>
        {
          collections.map(collection => {
            return (
              <div className='bg-light t_SortableListColumn'
                key={collection.key}
                onMouseEnter={() => setIsHovering(collection.key)}
                onMouseLeave={() => setIsHovering('')}
              >
                <div className='t_SortableListColumn_Title'>{collection.title} <Badge className='t_SortableListColumn_Badge' variant={setBadgeVarian(collection.key)}>{collection.items.length}</Badge></div>
                {collection.items.map((item, index) => (
                  <SortableItem
                    key={`${collection.key}-${index}`}
                    index={index}
                    item={item}
                    collection={collection.key}
                  />
                ))}
              </div>
            )
          })
        }
      </div>
    )
  }
)

export default SortableList;
