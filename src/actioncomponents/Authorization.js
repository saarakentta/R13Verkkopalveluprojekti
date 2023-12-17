import Login from './Login';
import CustomerInfo from './CustomerInfo';
import { jwtToken } from '../components/signals/TokenSignal';

 function Authorization() {
  return (
    <div>
      {/* Jos token on tyhjä, näytetään Login-komponentti. Jos token löytyy, näytetään CustomerInfo-komponentti. */}
      {jwtToken.value === '' ?
        <Login/> :
        <CustomerInfo/>       
      }
    </div>
  );
}

export default Authorization;