import React from 'react'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router'
import axios from 'axios';
import {Link} from 'react-router-dom'

export const Provinces = () => {
  const {country}=useParams();
  const [provinces, setProvinces] = useState([]);

  var options = {
    method: 'GET',
    url: 'https://covid-19-statistics.p.rapidapi.com/provinces',
    params: {iso: country},
    headers: {
      'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com',
      'x-rapidapi-key': 'ec750b870cmsh5f21b8f2186eec6p1a5d72jsnc3872c32d2fb'
    }
  };
  useEffect(() => {
    axios.request(options).then(function (response) {
      const provinceList=response.data.data;
      console.log(provinceList)
      const newProvinces=provinceList.filter(item=> item.province && item.province.indexOf(' ')<0)
      console.log(newProvinces)
      setProvinces(newProvinces)
    }).catch(function (error) {
      console.error(error);
    });

    

  }, []);
  
  return (
    <div>
      <br></br>
       <h4>List of all Provinces in Country with ISO Code: {country}</h4>
       <br></br>
      {
        provinces.length>0?
          <div>
            {
              provinces.map(item=>{
                return  <div className="container w-50">
                <div class="card">
                 <div class="card-body">
                     <h5 class="card-title">{item.province}</h5>
                     <h6 class="card-subtitle mb-2 text-muted">{item.name}</h6>
                     <h6 class="card-subtitle mb-2 text-muted">{item.iso}</h6>
                     <Link className="btn btn-primary" to={`/countries/${item.iso}/provinces/${item.province}/report`}>View Stat</Link>
                  </div>
                </div>
                 <br></br>
            </div>

              })
            }

          </div>
        :
          <div className="container">
            <div class="alert alert-primary" role="alert">
          Loading...
        </div>
        </div>
      }


    </div>

       
  )
}
export default Provinces



{/* {
    
    provinces.length>0?
    {
      provinces.map(item=>{
        return item.province && item.province.indexOf(' ')<0?
        <div className="container w-50">
            <div class="card">
             <div class="card-body">
                 <h5 class="card-title">{item.province}</h5>
                 <h6 class="card-subtitle mb-2 text-muted">{item.name}</h6>
                 <h6 class="card-subtitle mb-2 text-muted">{item.iso}</h6>
                 <Link className="btn btn-primary" to={`/countries/${item.iso}/provinces/${item.province}/report`}>View Stat</Link>
              </div>
            </div>
             <br></br>
        </div>
      })
    }
    :
      <div className="container">
         <div class="alert alert-danger" role="alert">
        No Provinces
      </div>
      </div>
  }
    </div>
) */}