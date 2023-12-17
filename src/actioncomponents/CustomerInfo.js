import { customerData } from "../components/signals/CustomerSignal";
import { jwtToken } from "../components/signals/TokenSignal";

function CustomerInfo(){
    return(
            <div>
                {customerData.value === null ? <h2>No authorized personal data</h2>:
                    <div>
                        <h2>Tervetuloa ostoksille {customerData.value.fname + " " +  customerData.value.lname}</h2>
                        <button onClick={()=> jwtToken.value = ''}>Logout</button>
                        {/* Tyhjennetään token kun painetaan logout-buttonia */}
                    
                    </div> 
                }
            </div>
        )
}

export default CustomerInfo;