import { useState } from 'react';
import Dialog from './components/Dialog';
import './App.css';

function App() {
  const [show, setShow] = useState(false);

  const closeDialog = () => {
    setShow(false);
  };

  return (
    <div className='app-container'>
      <h1>Welcome to My App</h1>
      <p>
        This is a simple React app demonstrating the use of a dialog component.
        Click the button below to open the dialog!
      </p>
      <button className='dialog-toggle-button' onClick={() => setShow(true)}>
        Show Dialog
      </button>
      {show && (
        <Dialog onClose={closeDialog}>
          <h1>Dialog Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            sapiente aspernatur enim! Saepe nam tenetur itaque ipsa nesciunt
            mollitia repudiandae fuga delectus fugiat doloremque quidem dolores
            necessitatibus, quos atque voluptates.
          </p>
        </Dialog>
      )}
      <footer className='app-footer'>
        <p>&copy; 2025 My App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
