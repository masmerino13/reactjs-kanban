import React, { useState, useEffect, useCallback } from "react"
import arrayMove from 'array-move'
import _isEmpty from 'lodash/isEmpty'
import { useStoreState, useStoreActions } from 'easy-peasy'

import { SortableList } from './sortableList'
import { KabanActions } from './kabanActions'

const SortableComponent = () => {
  const [isHovering, setIsHovering] = useState('')
  const [collections, setCollection] = useState([])
  const list = useStoreState((state) => state.collections.results)
  const updateTask = useStoreActions(actions => actions.tasks.updateTask)

  useEffect(() => {
    setCollection(list)
  })

  const handleTaskUpdate = useCallback(task => {
    updateTask({
      data: {
        order: task.order,
        collection: task.collection
      },
      id: task.id
    })
  }, [])

  const onSortEnd = ({ oldIndex, newIndex, collection }) => {
    const hoveredCollection = collections.find(co => { return co.key === isHovering})
    const parentCollection = collections.find(co => { return co.key === collection})

    if (!_isEmpty(isHovering)) {
      // If is moving cards in the same collection
      if (collection === isHovering) {
        const newCollectionsSet = collections.map(co => {
          if (co.key === isHovering) {
            co.items = arrayMove(co.items, oldIndex, newIndex)
            co.items[newIndex] = {...co.items[newIndex], order: newIndex}

            handleTaskUpdate(co.items[newIndex])
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

      hoveredItems.splice(newIndex, 0, currentItem)
      parentItems.splice(oldIndex, 1)

      const newCollectionsSet = collections.map(co => {
        if (co.key === collection) {
          co.items = parentItems
        } else if (co.key === isHovering) {
          co.items = hoveredItems
          co.items[newIndex] = {...co.items[newIndex], order: newIndex, collection: co.id}

          handleTaskUpdate(co.items[newIndex])
        }

        return co
      })

      setCollection(newCollectionsSet)
    }
  }

  return (
    <>
    <KabanActions searchResult={setCollection} dataset={collections}  />
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SortableList
        collections={collections}
        onSortEnd={onSortEnd}
        setIsHovering={setIsHovering}
        isHovering={isHovering}
      />
    </div>
    </>
  )
}

export default React.memo(SortableComponent)
