import React, { useEffect, useState } from 'react';
import axios from 'axios';
function DisplayData() {
   const [items, setItems] = useState([]);
   console.log(items, "itemsitemsitemsitems")
   useEffect(() => {
      axios.get('http://localhost:5000/api/displayUser')
         .then(response => {
            console.log("response.data", response.data);
            setItems(response.data);
         })
         .catch(error => {
            console.error('Error fetching data:', error);
         });
   }, []);

   return (
      <div>
         <h1>display data abc</h1>
         <div className="App">
            <h1>Items List</h1>
            <ul>
               {items.data?.map(item =>
                  <li key={item._id}>{item.fname}</li>
               )}
            </ul>
         </div>
      </div>
   )
}

export default DisplayData


