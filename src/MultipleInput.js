import { useState } from "react";
import "./App.css";
const authorization = "f2bc0c85-b373-468a-9fd3-d1a2f2782609";
function MultipleInput(props) {
  const [formFields, setFormFields] = useState([{}]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index] = event.target.value;
    setFormFields(data);
  };

  const addFields = (e) => {
    e.preventDefault();
    let string = "";
    props.setItems([...formFields]);
    setFormFields([...formFields, string]);
  };

  // const removeFields = (index) => {
  //   let data = [...formFields];
  //   data.splice(index, 1);
  //   setFormFields(data);
  // };


  

  


  return (
    <div className="App">
      {formFields.map((form, index) => {
        return (
          <div key={index}>
            <input
              // name="description"
              placeholder="items"
              onChange={(event) => handleFormChange(event, index)}
              // value={form.description}
            />

            {/* <button onClick={() => removeFields(index)}>Remove</button> */}
          </div>
        );
      })}

      <button onClick={addFields}>Add More..</button>
   
     
       
      <br />
    </div>
  );
}

export default MultipleInput;
