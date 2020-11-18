import React from 'react'
import {
  SortableElement
} from "react-sortable-hoc"
import { formatDistance } from 'date-fns'

import { UserShortName } from '../../common';

import './sortableItem.scss'

const SortableItem = SortableElement(({ item }) => <div className='t_sortableItem'>
  <div className='t_sortableItem_Title'>{item.title}</div>
  <div className='t_sortableItemFooter'>
    <UserShortName keyword='Ricardo Merino' />
<div className='t_sortableItemFooter_Due'>Due: { formatDistance(item.due, new Date(2020, 11, 18)) }</div>
  </div>
</div>)

export default SortableItem
