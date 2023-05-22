
import './Dashboard-comp/Earnings.css'
import Earnings from './Dashboard-comp/Earnings';

import Annuals from './Dashboard-comp/Annuals';
import  './Dashboard-comp/Annuals.css';

import Tasks from './Dashboard-comp/Tasks';
import './Dashboard-comp/Tasks.css';

import Pendings from './Dashboard-comp/Pendings';
import './Dashboard-comp/Pendings.css';

import './Dashingboard.css'

const Dashingboard =  ()=>{

    return (
        <div className='mt-4 bg-dark-subtle'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-10'>
                <h3 id='padding-for'>Dashboard</h3>
            </div>
            <div className='col-2'id='btn-type' >
                <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                <i className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>

            <div className='mt-4' id='Dashboard-elements'>
            <Earnings />
            <Annuals/>
            <Tasks/>
            <Pendings/>
                </div>
            </div>
            </div>

            </div>
            
    )
    
}

export default Dashingboard;
