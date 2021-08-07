

import Footer from './Footer';

import Header from './Header';
import Todo from './Todo';

function App() {
//   const [title, setTitle] = useState('')
//   const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
//     /* check pressing enter key here */
    
//   }
//   const addtask = () => { 
//     console.log(title)

// }

  return (
    <div>

      {/* header section */}
      <Header></Header>

      {/* todo section */}
      <Todo></Todo>
      {/* <div className='mx-auto max-w-4xl'> */}

        {/* task input and add button */}
        {/* <div className='flex space-x-1'>
          <input  onChange={event => setTitle(event.target.value)} className='border border-gray-400 w-full text-2xl'
            onKeyDown={onKeyDownCallback} ></input>
          <button className='border border-gray-400 w-8 font-bold' onClick={addtask} >+</button>
        </div> */}

        {/* tasks section */}
        {/* <div> */}
          {/* task example */}
          {/* Please convert this into a task component */}
          {/* <div
            className="flex justify-between h-8 items-center py-6 border-b"
          >
            <span className="text-2xl"> I am a task </span>
            <div className="flex space-x-1 items-center">
              <button className="bg-green-400 w-24 text-2xl" >Done</button>
              <button className="bg-red-400 w-24 text-2xl" >Delete</button>
            </div>
          </div> */}

          {/* another task example */}
          {/* <div
            className="flex justify-between h-8 items-center py-6 border-b"
          >
            <span className="text-2xl"> I am another task </span>
            <div className="flex space-x-1 items-center">
              <button className="bg-green-400 w-24 text-2xl" >Done</button>
              <button className="bg-red-400 w-24 text-2xl" >Delete</button>
            </div>
          </div>

        </div>
      </div> */}

      {/* footer section */}
      <Footer></Footer>
    </div>
  );
}

export default App;
