import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import TablesBoooking from './components/views/TablesBooking/TablesBooking';
import TablesEvents from './components/views/TablesEvents/TablesEvents';
import WaiterOrder from './components/views/WaiterOrder/WaiterOrder';
import Kitchen from './components/views/Kitchen/Kitchen';
import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TablesBoooking} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={TablesEvents} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={WaiterOrder} />
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />        
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
