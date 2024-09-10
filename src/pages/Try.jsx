// components/TryCom.js
import React, { useState, useEffect } from 'react';
import { fetchDataFromCollection } from '../function/firestoreUtils.js';
 

const TryCom = () => {
    const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchDataFromCollection('typeofQuiz'); 
        setData(result);
      
        console.log(result[0].IndianAirForce, "Fetched data");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>hhhh</h1>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={index}>
            <p>{JSON.stringify(item.IndianAirForce)}</p>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default TryCom;
