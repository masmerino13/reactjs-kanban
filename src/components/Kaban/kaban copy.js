import React, { useState, useEffect } from "react";
import {
  SortableContainer,
  SortableElement
} from "react-sortable-hoc";
import arrayMove from 'array-move';

const SortableItem = SortableElement(({ value }) => <div>{value}</div>);

const SortableList = SortableContainer(
  ({ numbers, letters, isDragging, setIsHoveringNumbers, setIsHoveringLetters }) => (
    <div>
      <div
        onMouseEnter={() => setIsHoveringNumbers(true)}
        onMouseLeave={() => setIsHoveringNumbers(false)}
      >
        {numbers.map((value, index) => (
          <SortableItem
            key={`numbers-${index}`}
            index={index}
            value={value}
            collection={"numbers"}
          />
        ))}
      </div>
      <hr />
      <div
        onMouseEnter={() => setIsHoveringLetters(true)}
        onMouseLeave={() => setIsHoveringLetters(false)}
      >
        {letters.map((value, index) => (
          <SortableItem
            key={`item-${index}`}
            index={index}
            value={value}
            collection={"letters"}
          />
        ))}
      </div>
    </div>
  )
);

const SortableComponent = props => {
  const [numbers, setNumbers] = useState(["1", "2", "3", "4", "5", "6"]);
  const [letters, setLetters] = useState(["7", "8", "9", "D", "E", "F"]);
  const [isHoveringNumbers, setIsHoveringNumbers] = useState(false);
  const [isHoveringLetters, setIsHoveringLetters] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [collections, setCollection] = useState([])

  useEffect(() => {
    setCollection([
      {
        name: 'to-do',
        items: ['A', 'B', 'C']
      },
      {
        name: 'in-progress',
        items: ['D', 'E', 'F']
      },
      {
        name: 'done',
        items: ['G', 'H', 'I']
      }
    ])
  })

  const onSortEnd = ({ oldIndex, newIndex, collection }) => {
    const allItems = numbers.concat(letters);
    const currentItem = allItems[oldIndex];

    console.log('isHoveringNumbers', isHoveringNumbers, collection)
    console.log('isHoveringLetters', isHoveringLetters)

    if (isHoveringNumbers) {
      if (numbers.includes(currentItem)) {
        console.log('includes N', oldIndex, newIndex, currentItem)
        setNumbers(arrayMove(numbers, oldIndex, newIndex));
      } else {
        numbers.splice(newIndex, 0, currentItem);
        letters.splice(letters.indexOf(currentItem), 1);
        setNumbers([...numbers]);
        setLetters([...letters]);
      }
    }

    if (isHoveringLetters) {
      console.log('letters', currentItem)

      if (letters.includes(currentItem)) {
        const nArray = arrayMove(letters, oldIndex, newIndex);
        setLetters(nArray);

        console.log('includes ixd', oldIndex, newIndex, currentItem)

        console.log('nArray letters', nArray, letters)
      } else if (collection === 'letters') {
        console.log('includes ixd', oldIndex, newIndex, currentItem)
        const nArray = arrayMove(letters, oldIndex, newIndex);
        setLetters(nArray);
      } else {
        console.log('includes nah letters', newIndex, currentItem)
        letters.splice(newIndex, 0, currentItem);
        numbers.splice(letters.indexOf(currentItem), 1);
        setLetters([...letters]);
        setNumbers([...numbers]);
      }
    }

    setIsDragging(false);
  };

  const updateBeforeSortStart = () => {
    setIsDragging(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SortableList
        collections={collections}
        numbers={numbers}
        letters={letters}
        updateBeforeSortStart={updateBeforeSortStart}
        isDragging={isDragging}
        onSortEnd={onSortEnd}
        setIsHoveringNumbers={setIsHoveringNumbers}
        setIsHoveringLetters={setIsHoveringLetters}
      />
    </div>
  );
};

export default SortableComponent;
