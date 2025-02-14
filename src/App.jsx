import './app.css';

function App() {
  
  const arr = [1, 2, 3, 4, 5, 6, 7, 8]; 

  return (
    <>

    <div className="app-container">
      
      {/*-  The Input box that receives input for the number of elements should be in an array.
         - when clicked the enter button will display the 'Elements Container'
      */}
      <div className="n-container">
        <input type="number" placeholder='Enter the Number of Elements'/>
        <button>Enter</button>
      </div>

      {/* - The Input box that receives input for the elements, the input box should receive and store the element in an array till 'n' times
          - after 'n' times, when the enter button is clicked will display the 'Target Container' and 'Search button'
      */}
      <div className="element-container">
        <input type="number" placeholder='Enter the elements'/>
        <button>Enter</button>
      </div>

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
        {arr.map((item, index) => (
          <div key={index} className='box'>{item}</div>
        ))}
      </div>
    </>
  )
}

export default App
