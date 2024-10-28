import React from 'react'
import Body from './Components/Body'
import { Provider } from 'react-redux'
import AppStore from './Components/Utils/AppStore'



const App = () => {
  return (
    <Provider store={AppStore}>
      <Body />
    </Provider>
  )
}

export default App






