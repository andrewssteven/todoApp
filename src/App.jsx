import React from 'react'
import Home from './pages/Home'
import { Provider } from 'react-redux';
import store from './JS/store/store';

const App = () => {
  return (
    <div>
      <Provider store={store}>
      <Home/>
      </Provider>
    </div>
  )
}

export default App