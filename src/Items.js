// import React, { useState } from "react";
// const authorization = "f2bc0c85-b373-468a-9fd3-d1a2f2782609";
// const Items = (props) => {
//   const [description, setdescription] = useState([]);

//   const descriptionHandler = (event) => {
//     setdescription(event.target.value);
    
//   };

 
//   const submit = (event) => {
//     event.preventDefault();

//     props.onadd(description);
//     setdescription(description)

     
    
//   };

//   function addHandler  (todolistId) {
  
//     fetch(`http://localhost:3000/todos/${todolistId}/items`, {
//       method: "POST",
//       body: JSON.stringify(),
//       headers: {
//         "Content-type": "application/json",
//         Authorization: authorization,
//       },
//     }).then((result) => {
//       setdescription(description);
//       console.log(result);
//     });
//   };
   
 


//   return (
//     <form onSubmit={submit}>
//       <label>description</label>
//       <div>
//         <input type="text" onChange={descriptionHandler} value={description} />
//       </div>
//       <button onClick={addHandler}> List</button>
//     </form>
//   );
// };

// export default Items;
