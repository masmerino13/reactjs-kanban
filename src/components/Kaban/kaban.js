import React, { useState, useEffect } from "react";
import arrayMove from 'array-move';
import _isEmpty from 'lodash/isEmpty';

import { SortableList } from './sortableList';

const SortableComponent = () => {
  const [isHovering, setIsHovering] = useState('');
  const [collections, setCollection] = useState([
    {
      key: 'to-do',
      name: 'To Do',
      items: [
        {
          id: 1,
          title: 'Create initial setup for Kaban list',
          description: 'Loremp ipsum sit ammet',
          assignee: 'Ricardo Merino',
          tags: ['tag 1', 'tag 2'],
          due: Date.now()
        }
      ]
    },
    {
      key: 'in-progress',
      name: 'In Progress',
      items: [
        {
          id: 2,
          title: 'Task 2',
          description: 'Loremp ipsum sit ammet',
          assignee: 'Ricardo Merino',
          tags: ['tag 1', 'tag 2'],
          due: Date.now()
        }
      ]
    },
    {
      key: 'done',
      name: 'Done',
      items: [
        {
          id: 3,
          title: 'Task 3',
          description: 'Loremp ipsum sit ammet',
          assignee: 'Ricardo Merino',
          tags: ['tag 1', 'tag 2'],
          due: Date.now()
        },
        {
          id: 4,
          title: 'Task 4',
          description: 'Loremp ipsum sit ammet',
          assignee: 'Ricardo Merino',
          tags: ['tag 1', 'tag 2'],
          due: Date.now()
        }
      ]
    }
  ])

  const onSortEnd = ({ oldIndex, newIndex, collection }) => {
    const hoveredCollection = collections.find(co => { return co.key === isHovering})
    const parentCollection = collections.find(co => { return co.key === collection})

    if (!_isEmpty(isHovering)) {
      // If is moving cards in the same collection
      if (collection === isHovering) {
        const newCollectionsSet = collections.map(co => {
          if (co.key === isHovering) {
            co.items = arrayMove(co.items, oldIndex, newIndex)
          }
  
          return co
        })

        setCollection(newCollectionsSet)

        return
      }

      // If the card is moved to another collection
      const parentItems = parentCollection.items
      const hoveredItems = hoveredCollection.items
      const currentItem = parentItems[oldIndex]

      parentItems.splice(newIndex, 1)
      hoveredItems.splice(newIndex, 0, currentItem);

      const newCollectionsSet = collections.map(co => {
        if (co.key === collection) {
          co.items = parentItems
        } else if (co.key === isHovering) {
          co.items = hoveredItems
        }

        return co
      })

      setCollection(newCollectionsSet)
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SortableList
        collections={collections}
        onSortEnd={onSortEnd}
        setIsHovering={setIsHovering}
        isHovering={isHovering}
      />
    </div>
  );
};

export default SortableComponent;
