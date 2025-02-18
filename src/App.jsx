import { useState } from 'react';
import './app.css';

function App() {

  const [n, setN] = useState(); //State to store the number of elements
  const [arr, setArray] = useState([]); // State to store the generated array
  const [elements, setElements] = useState([]); //State to store the entered elements
  const [currentElement, setCurrentElement] = useState(''); //State to to store the current elements being entered
  const [target, setTarget] = useState(''); //State for target element
  const [isLoading, setIsLoading] = useState(false); //Loading state for search element
  const [error, setError] = useState(''); //Error state for empty target input
  
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

  //Handling the search when target is provided
  const handleTargetChange = (e) => {
    setTarget(e.target.value); //setting the target value
    setError(''); //Resetting the error message if input is updated;
  }

  // Executing the search when the target is provided
  const handleSearch = () => {
    if (target === '') {
      setError('Please enter a valid target element.');
      return;
    }
    setIsLoading(true); //set loading to true
    setTimeout(() => {
      setIsLoading(false); //set loading to false after a brief delay
    }, 2000); // Simulating a delay of 2 seconds for 'search'
  }


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

      {/* I will be cool it will take loading a few seconds to load, there should be a loading message displaying the following message
            "Loading... (This is just to look cool, the algorithm doesn't take time to execute)."
        */}

      <div className="target-container">
        <input type="number" placeholder='Enter the target' value={target} onChange={handleTargetChange}/>
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Error message for target input */}
      {error && <p style={{color: 'red'}}>{error}</p>}

      {/* Search execution with loading state */}
      <div className="search">
        {isLoading ? (
          <p>Loading... (This is just to look cool, the algorithm doesn't take much time to execute).</p>
        ):(
          <p>Search Completed.</p>
        )}
      </div>
    </div>

    {/* ------------- This is the code display the arrays ------------- */}
      <div className="arr-container">
        {arr.length > 0 && (
          <div>
            <h3>Generated Array: </h3>
            <div className="array-box">{arr.join(', ')}</div>
          </div>
        )}
      </div>

      <div className="entered-elements">
        <h3>Entered Elements: </h3>
        <ul>
          {elements.map((element, index) => (
            <li key = {index}>{element}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
