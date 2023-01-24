import {
	Route,
	Routes
} from 'react-router-dom';

import AuthorizationPage from './pages/AuthorizationPage'
import DHCPPage from './pages/DHCPPage';
import EmailServicesPage from './pages/EmailServicesPage';
import LogPage from './pages/LogPage';
import WebservicesPage from './pages/WebservicesPage';

function App() {
  return (
    <div>
    <Routes>
      <Route exact path='/dhcp' element={<DHCPPage/>}></Route>
      <Route exact path='/webservices' element={<WebservicesPage/>}></Route>
      <Route exact path='/email-services' element={<EmailServicesPage/>}></Route>
      <Route exact path='/auth' element={<AuthorizationPage/>}></Route>
      <Route exact path='/logs' element={<LogPage/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
