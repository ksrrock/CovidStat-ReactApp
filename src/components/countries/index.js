/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'

export const Countries = () => {

  const [countries, setCountries] = useState([]);
  var options = {
    method: 'GET',
    url: 'https://covid-19-statistics.p.rapidapi.com/regions',
    headers: {
      'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com',
      'x-rapidapi-key': 'ec750b870cmsh5f21b8f2186eec6p1a5d72jsnc3872c32d2fb'
    }
  };
  useEffect(() => {
    axios.request(options).then(
        r=>setCountries(r.data.data)
    ).catch(e=>console.log(e))
  }, [])

  console.log(countries[0])
  return (
    <div>
        <h2>List of Countries</h2>
        {
            countries.length===0?<div className="container"><div className="alert alert-primary">Loading....</div></div>:
            countries.map(item=>{
               return <div className="container w-50">
                   <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{item.iso}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{item.name}</h6>
                        <Link className="btn btn-primary" to={`/countries/${item.iso}/provinces`}>View Stat</Link>
                     </div>
                   </div>
                    <br></br>
               </div>
            })
        }
    </div>
  )
}
export default Countries
