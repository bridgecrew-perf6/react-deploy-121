import { useState, createContext} from 'react';



const Shipper =  createContext();


function ShipperProvider({children}){

    const [data , setData] = useState([]);
    

    const addData = function(x, y,z){
      const newoj = {x,y,z}
       setData(prev=> {
        const newJobs = [...prev,newoj]

                return newJobs    
      });
    }
    const readd = function(a){
         setData([...a])
    }

    const value = {
         data,
         addData,
         readd
    }
    return(

      <Shipper.Provider value={value}>
       {children}
      </Shipper.Provider>
    )
};
export {Shipper, ShipperProvider}