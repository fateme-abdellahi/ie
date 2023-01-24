import './DHCP&web&email.css';

import ItemsContainer from "../components/ItemsContainer";
import PageName from "../components/PageName";

const EmailServicesPage=()=>{
    return <>
    <PageName name='Email services'/>
    <ItemsContainer className='items-container'>
        <p>you can choose to start, stop or watch the status of Email service.</p>
        <div className="buttons-container">
            <button>start</button>
            <button>stop</button>
            <button>status</button>
        </div>
    </ItemsContainer>
    </>
}
export default EmailServicesPage;