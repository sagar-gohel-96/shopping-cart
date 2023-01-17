import './App.css';
import Navbar from './components/Navbar';
import './index.css';
import Routing from './routing/Routing';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='container '>
      <Navbar />
      <Routing />
      <ToastContainer
        autoClose={1000}
        theme='dark'
        hideProgressBar={true}
        position='bottom-right'
        toastStyle={{ backgroundColor: "crimson" }}
        
      />
    </div>
  );
}

export default App;
