import LineChart from "./LineChart";
import './EarningCharts.css';

import Piechart from "./Piechart";

const EarningCharts=()=>{
    return(
        <div className="px-4">
            <div className="row">
        <div className="col-xl-8 col-lg-7 ">
            <div className="card shadow ">
        <div className="card-header py-3  d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                                    <div className="dropdown no-arrow">
                                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                                            <div className="dropdown-header">Dropdown Header:</div>
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="card-body">
                                    <LineChart/>

                                </div>
                                </div>
                                </div>
                                <div className="col-xl-4 col-lg-5" id="pie-chart-spacing"> 
                                <div className="card shadow ">
        <div className="card-header py-3  d-flex flex-row align-items-center justify-content-between" >
                                    <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                                    <div className="dropdown no-arrow">
                                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
            
                                    </div>
                                </div>
                                <div>

                                    <Piechart/>
                                   
                                </div>                   
                                </div>                   
                                </div>
                                </div>
                                </div>
                                )
}

export default EarningCharts;