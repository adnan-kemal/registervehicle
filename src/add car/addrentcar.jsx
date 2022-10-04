import React, { useState } from 'react';
import 'antd/dist/antd.css';


import {
  Form,
  Input,  
  Checkbox,
  
} from 'antd';


const FormDisabledDemo = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);

  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };

  return (
    <>
      <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        If the Vehicle is rented uncheck the box to fill the form
      </Checkbox>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 2,
        }}
        layout="vertical"
        onValuesChange={onFormLayoutChange}
        disabled={componentDisabled}
        
      >
        <Form.Item
          
        >
        <Input 
         className="tw-w-[300px] tw-mt-3"
        placeholder="sd">


        </Input>

        </Form.Item>
      
      </Form>
    </>
  );
};

export default () => <FormDisabledDemo />;