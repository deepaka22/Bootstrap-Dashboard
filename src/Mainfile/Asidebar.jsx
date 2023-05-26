
import Navbar from './Navbar';
import Dashingboard from './Dashingboard';
import EarningCharts from './EarningCharts';
import LineChart from './LineChart';
import Projects from './Projects';
import Footer from './Footer';

import './Asidebar.css';

 function Asidebar (){


    return(
        <div >
    <div id='nav-btn' class="bg-primary" >

        <button type="button" class="btn btn-lg btn-primary text-center border-bottom" id='img-size'> 
        <div id='side-bar'><i class="fa-regular fa-face-smile-wink fa-2xl " ></i> </div> </button>
        <button type="button" class="btn btn-lg btn-primary text-center border-bottom"> 
        <div id='side-bar'><i class="fa-solid fa-gauge-high fa-2xl"></i> </div>
        <div id="text-size"> Dashboard</div> </button>
        <button type="button" class="btn btn-lg btn-primary text-center border-bottom"> 
        <div id='side-bar'><i class="fa-solid fa-computer fa-2xl"></i></div>
        <div id="text-size"> Components</div> </button>
        <button type="button" class="btn btn-lg btn-primary text-center border-bottom"> 
        <div id='side-bar'><i class="fa-solid fa-chart-column fa-2xl"></i></div>
        <div id="text-size"> Charts</div> </button>
        <button type="button" class="btn btn-lg btn-primary text-center border-bottom"> 
        <div id='side-bar'><i class="fa-solid fa-wrench fa-2xl"></i></div>
        <div id="text-size"> Charts</div> </button>

        <button type="button" class="btn btn-lg btn-primary text-center border-bottom"> 
        <div id='side-bar'><i class="fa-solid fa-angle-right fa-2xl"></i></div>
        <div id="text-size"> Expand More</div></button>

        

    </div>

        <div className="content" id="bg-color">

            <Navbar/>
            <Dashingboard/>
            <EarningCharts/>
            <Projects/>
            <Footer/>
        </div>


    </div>

    
    )

}

export default Asidebar;