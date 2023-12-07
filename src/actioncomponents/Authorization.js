import Login from './login';
import CustomerInfo from './CustomerInfo';
import { jwtToken } from '../components/signals/TokenSignal';

 function Authorization() {
  return (
    <div>
      {jwtToken.value === '' ?
        <Login/> :
        <CustomerInfo/>       
      }
    </div>
  );
}

export default Authorization;