import React, { useState, useEffect } from "react";
import {getMergeSortAnimations} from './sortingAlgo';
import "./SortingVisualizer.css";
const SortingVisualizer = () => {
  const [array, changeArray] = useState([]);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push(randomIntFromInterval(5, 750));
    }

    changeArray(arr);
  };

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const mergeSort = () => {
    const animations = getMergeSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? 'red' : 'turquoise';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 10);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 10);
      }
    }
  };

  const quickSort = () => {};

  const heapSort = () => {};

  const bubbleSort = () => {};

  return (
    <>
      <div className="array-container">
        {array.map((val, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ height: `${val}px` }}
          ></div>
        ))}
      </div>
      <div className="buttonContainer">
        <button className="generateButton" onClick={() => resetArray()}>
          Generate New Array
        </button>
        <button className="generateButton" onClick={() => mergeSort()}>
          Merge Sort
        </button>
        <button className="generateButton" onClick={() => quickSort()}>
          Quick Sort
        </button>
        <button className="generateButton" onClick={() => heapSort()}>
          Heap Sort
        </button>
        <button className="generateButton" onClick={() => bubbleSort()}>
          Bubble Sort
        </button>
      </div>
    </>
  );
};

export default SortingVisualizer;
