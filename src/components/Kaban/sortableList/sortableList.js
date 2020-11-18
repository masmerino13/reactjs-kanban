import React from 'react';
import {
  SortableContainer
} from "react-sortable-hoc";

import { SortableItem } from '../sortableItem';

const SortableList = SortableContainer(
  ({ setIsHovering, isHovering, collections }) => (
    <div>
      {
        collections.map(collection => (<div
          key={collection.key}
          onMouseEnter={() => setIsHovering(collection.key)}
          onMouseLeave={() => setIsHovering('')}
        >
          <p>{collection.name}</p>
          {collection.items.map((item, index) => (
            <SortableItem
              key={`${collection.key}-${index}`}
              index={index}
              item={item}
              collection={collection.key}
            />
          ))}
          <hr />
        </div>))
      }
    </div>
  )
);

export default SortableList;
