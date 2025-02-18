import { useState } from 'react';
import './app.css';

function App() {

  const [n, setN] = useState(); //State to store the number of elements
  const [arr, setArray] = useState([]); // State to store the generated array
  const [elements, setElements] = useState(); //State to store the entered elements
  const [currentElement, setCurrentElement] = useState(''); //State to to store the current elements being entered

  // for (let i = 0; i < n; i++) {
  //   arr[i] = i;
  // } // const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  

  //Handling input change;
  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    setN(value) //setting the number of elements in 'n';
  };

  const handleElements = (e) => {
    setCurrentElement(e.target.value); //setting the current elements being entered;
  }

  const addElement = () => {
    if (elements.length < n) {
      setElements([...elements, parseInt(currentElement)]);
      setCurrentElement(''); //clearing the input panel for the next element to be entered
    }
  }

  //Generating a new array (or) Entering a new element whenever user enters it.
  const generateArray = () => {
    const newArr  = Array.from({ length: n}, (_, index) => index);
    // for (let i = 0; i < n; i++) {
    //   newArr.push(i);
    // }
    setArray(newArr);
  };


  return (
    <>

    <div className="app-container">
      
      {/*-  The Input box that receives input for the number of elements should be in an array.
         - when clicked the enter button will display the 'Elements Container'
      */}
      <div className="n-container">
        <input type="number" value={n} placeholder='Enter the No. of Elements' onChange={handleInputChange}/>
        <button onClick={generateArray}>Enter</button>
      </div>

      {/* - The Input box that receives input for the elements, the input box should receive and store the element in an array till 'n' times
          - after 'n' times, when the enter button is clicked will display the 'Target Container' and 'Search button'
      */}
      <div className="element-container">
        <input type="number" placeholder='Enter the elements' value={currentElement} onChange={handleElements} disabled={elements.length >= n}/> 
        <button onClick={addElement} disabled={elements.length >= n}>Enter</button>
      </div>

      {/* <div className="generatedArray">
        <h3>Generated Array</h3>
        <pre>{JSON.stringify(arr, null, 2)}</pre>
      </div> */}

      {/* - The Input box that receives the input for the target number
          - when target element is not null then clicked on search then it will execute the searching algorithm in the backend.
          - When the target element input is null. then it should through an error message in the screen saying certain error message.
      */}

      <div className="target-container">
        <input type="number" placeholder='Enter the target'/>
        <button>Enter</button>
      </div>

      <div className="search">
        <button>Execute</button>

        {/* I will be cool it will take loading a few seconds to load, there should be a loading message displaying the following message
            "Loading... (This is just to look cool, the algorithm doesn't take time to execute)."
        */}

      </div>

    </div>

    {/* ------------- This is the code display the arrays ------------- */}
      <div className="arr-container">
        {arr.map((arr, index) => (
          <div key={index} className='box'>{arr}</div>
        ))}
      </div>
    </>
  )
}

export default App
