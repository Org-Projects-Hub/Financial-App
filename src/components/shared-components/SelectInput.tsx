import React from 'react';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';

const SelectInput = ({arr, action, name, required, style}: any):JSX.Element=>
                                    (<Select native name={name} style={style} onChange={action} defaultValue={"Random"}
                                        input={<Input className="blue-txt" />}>
                                        {!required?
                                        <option  value= "" /> : null}
                                        {arr.map((data: any,index: any)=><option className="blue-txt" key={index} value={data}>{data}</option>)}
                                       </Select>);
 export default SelectInput;
