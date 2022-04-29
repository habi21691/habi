

import Layout from './component/layout/Loyout'

import { Routes,Route} from 'react-router-dom';
 
import AllMeetupPage from "./page/AllMeetUp";
import FavouritePage from "./page/Favourit";
import NewMeetUppage from "./page/NewMeetup";

function App() {
  return (
    <Layout>

      <Routes>
      <Route  path='/' element={<AllMeetupPage/>}/>
   <Route path='/new-meetup' element={<NewMeetUppage/>}/>
   <Route path='/favourit'  element={<FavouritePage/>} />
      </Routes>
   
       
   
    
    </Layout>
  );
}

export default App;
