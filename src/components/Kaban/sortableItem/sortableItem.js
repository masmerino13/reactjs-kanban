import React from 'react'
import {
  SortableElement
} from "react-sortable-hoc"
import { Badge } from 'react-bootstrap'

import { UserShortName } from '../../common';

import './sortableItem.scss'

const SortableItem = SortableElement(({ item }) => <div className='t_sortableItem'>
  <div className='t_sortableItem_Title'>{item.title}</div>
  <div className='t_sortableItem_Tag'>
    <Badge pill variant="info">{item.tag}</Badge>
  </div>
  <div className='t_sortableItemFooter'>
    <UserShortName keyword={item.assignee} />
<div className='t_sortableItemFooter_Due'>Due date: { item.due }</div>
  </div>
</div>)

export default SortableItem
