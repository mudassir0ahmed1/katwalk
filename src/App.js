
import { Route, Switch } from 'react-router-dom';
import './App.css'
import DesignerDetail from './pages/DesignerDetail';
import Landing from './pages/Landing'
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import WhatsNew from './pages/WhatsNew';
import CheckOut from './pages/CheckOut'

function App() {
  return (
   <>
   <Switch>
     <Route exact path='/' component={Landing}/>
     <Route  path='/whats-new' component={WhatsNew}/>
     <Route  path='/designer-detail' component={DesignerDetail}/>
     <Route  path='/login' component={Login}/>
     <Route  path='/product_details' component={ProductDetails}/>
     <Route  path='/check_out' component={CheckOut}/>
   </Switch>
  </>
  );
}

export default App;
