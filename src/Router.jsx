import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Room from './pages/Room';

function Router(){

  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/room' element={ <Room /> } />
    </Routes>
  )
}

export default Router;