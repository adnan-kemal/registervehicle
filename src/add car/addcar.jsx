import { useState } from 'react'
import "antd/dist/antd.css";
import { Form,Input,Button, Select, DatePicker,Upload, message, Checkbox,Switch} from "antd";

const{RangePicker}=DatePicker;
function addcar() {

  const[toggle,setToggle]=useState(false);
  
   
  const toggler=()=>{
    toggle ? setToggle(false): setToggle(true);
  }
 
  return (
    <div className="App">
        <Form
        name='vehicle registration'
        layout='inline'
        className="relative left-0 top-3 lg:w-[100%] " 
        onFinish={(values)=>{
            console.log(values)
           }
    
          }
    
        >
            <Form.Item 
        
                name="vehiclename"
               className="tw-w-[300px] mt-2 " 
        
              rules={[
               {
                  required: true,
                  message:"please enter your vehicle's name"
                },
          
                   ]}
            hasFeedback
        >
          <Input 
          placeholder="vehicle's name"
          name="vehiclename"
          className="mt-12"
          />

          
                </Form.Item>
                <Form.Item 
        
        name="vehiclemodel"
       className="tw-w-[300px] mt-2 " 

      rules={[
       {
          required: true,
          message:"vehicle's model "
        },
  
           ]}
    hasFeedback
>
  <Input 
  placeholder="enter  vehicle's model here"
  name="vehiclemodel"
  className="mt-12"
  />

  
        </Form.Item>
       
                
    <Form.Item 
        
        name="number of seats available"
       className="tw-w-[300px] mt-2 " 

      rules={[
       {
          required: true,
          message:"number of seats is required "
        },
  
           ]}
    hasFeedback
      >
  <Input 
  placeholder="number of seats available"
  name="number of seats"
  
  />

  </Form.Item>

  <Form.Item
     name="plate number"
     className="tw-w-[300px] mt-2 " 

     rules={
        [
            {
                required:true,
                message:"plate number should be registered"
            },
        ]
     }
     hasFeedback >

        <Input
        placeholder='plate number'
        ></Input>
     </Form.Item>
     <Form.Item
     name="manufacture year"
     className="tw-w-[300px] mt-2 " 

     rules={
        [
            {
                required:true,
                message:"year of maufacture must be registered"
            },
        ]
     }
     hasFeedback >

          <DatePicker picker='year'></DatePicker>
     </Form.Item>

     <Form.Item
     name="Normalization value"
     className="tw-w-[300px] mt-2 " 

     rules={
        [
            {
                required:true,
                message:"Normalization value should be registered"
            },
        ]
     }
     hasFeedback >
        <Input
        placeholder='Normalization value'>
        
        </Input>
    

     </Form.Item>     
   <p> Toggle if vehicle is Rental </p>

   <>            
   <Switch 
   className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
   onClick={toggler} />
        { toggle ? 
        <div>                  
           <Form.Item
           name="Owner name"
           className="tw-w-[300px] mt-2 " 
      
           rules={
              [
                  {
                      required:true,
                      message:"For Rental vehicle owner name is required"
                  },
              ]
           }
           hasFeedback>
              <Input 
              placeholder="Owner's name "></Input>
           </Form.Item>
             
              

           <Form.Item
            name="date record"
            className="tw-w-[300px] mt-2 " 
       
            rules={
               [
                   {
                       required:true,
                       message:"the start and ending date of the rent is required"
                   },
               ]
            }
            hasFeedback >
              <RangePicker />


           </Form.Item>
                
                
                
                
                </div>:<span></span> 
                  }

  </>
  
  <Button
     type='primary'
     htmlType='submit'

     >Register</Button>


                
        
      
               
   
     
     





        </Form>
     
    </div>
  )
}

export default addcar;
