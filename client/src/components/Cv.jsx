import React, { useEffect, useState } from 'react';
import PersonalInfo from './PersonalInfo.jsx';

const Cv = ({ getCv, setView ,selected}) => {
  const [cv, setCv] = useState(null);
  const [dummy, setDummy] = useState(false);
  
  const fetchCv = async (id) => {
    try {
      const fetchedCv = await getCv(id); 
     
    } catch (err) {
      console.log('Error fetching CV:', err);
    }
  };
  useEffect(() => {
    console.log(selected)
  }, [dummy]);

  return (
    <div>
      <header>
        <h1>CV Information</h1>
      </header>

       
        <div>
          <h1>{selected.fullName}</h1>
          <p>{selected.desc}</p>
          <h2>Email: {selected.email}</h2>
          <h3>Mobile: {selected.mobile}</h3>
          <h3>Date of Birth: {selected.datebir}</h3>
        </div>
      

      
    </div>
  );
};

export default Cv;