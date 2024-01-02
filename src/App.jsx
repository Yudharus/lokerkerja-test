import React from 'react'
import CardListCoffe from './components/organisms/CardListCoffe.organisms'
import CardCart from './components/organisms/CardCart.organisms'
import store from './configs/store.config'
import { Provider } from 'react-redux'




const App = () => {
  return (
    <Provider store={store}>
      <div className='flex justify-between bg-white--primary h-screen'>
        <CardListCoffe />
        <CardCart />
      </div>
    </Provider>
  )
}

export default App