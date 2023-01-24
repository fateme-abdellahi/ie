import './DHCP&web&email.css';

import ItemsContainer from "../components/ItemsContainer";
import PageName from "../components/PageName";

const WebservicesPage=()=>{
    return <>
    <PageName name='Web services'/>
    <ItemsContainer className='items-container'>
        <p>you can choose to start, stop or watch the status of webservice.</p>
        <div className="buttons-container">
            <button>start</button>
            <button>stop</button>
            <button>status</button>
        </div>
        <div>
            <input placeholder='enter home dir' className='services-input'/>
            <button className='change-button'>change</button>
        </div>
    </ItemsContainer>
    </>
}
export default WebservicesPage;