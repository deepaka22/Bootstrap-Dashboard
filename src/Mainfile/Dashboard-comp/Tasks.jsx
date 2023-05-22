import { Slider } from "@mui/material";
import './Tasks.css'

const Tasks = ()=>{
   
      
    return(
        <div className='border row  ' id='spacingss'>
        
         <div className='col-9 '>    
        <div id='wordings'><span id='colors-spansss'>TASKS</span>
        <div id='font-sizing'>50% </div> <Slider defaultValue={50} disabled id="color-range"></Slider></div>
        
        </div>

        
       <div className='col-3 '>
            <div id='images-board'>
            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
         </div>
        </div>
        </div>
    )

}

export default Tasks;