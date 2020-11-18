import React from 'react'
import {
  SortableContainer
} from "react-sortable-hoc"

import { SortableItem } from '../sortableItem'

import './sortableList.scss'

const SortableList = SortableContainer(
  ({ setIsHovering, collections }) => (
    <div className='t_SortableList'>
      {
        collections.map(collection => (<div className='bg-light t_SortableListColumn'
          key={collection.key}
          onMouseEnter={() => setIsHovering(collection.key)}
          onMouseLeave={() => setIsHovering('')}
        >
          <div className='t_SortableListColumn_Title'>{collection.name}</div>
          {collection.items.map((item, index) => (
            <SortableItem
              key={`${collection.key}-${index}`}
              index={index}
              item={item}
              collection={collection.key}
            />
          ))}
        </div>))
      }
    </div>
  )
)

export default SortableList;
