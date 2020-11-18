import React from 'react';
import {
  SortableElement
} from "react-sortable-hoc";

const SortableItem = SortableElement(({ item }) => <div>{item.title}</div>);

export default SortableItem;
