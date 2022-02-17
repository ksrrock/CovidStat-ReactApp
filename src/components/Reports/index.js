import React from 'react'
import { useState } from 'react';
import axios from 'axios'

export const Reports = () => {

  const [date, setDate] = useState("");
  const [report ,setReport]=useState({"data":{}});
  const [loadState,setLoadState]=useState(false);

  const handleClick=() => {
    setLoadState(true);
    var options={
        method:'GET',
        url: 'https://covid-19-statistics.p.rapidapi.com/reports/total',
        params:{date:date},
        headers:{
            'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com',
            'x-rapidapi-key': 'ec750b870cmsh5f21b8f2186eec6p1a5d72jsnc3872c32d2fb'
        }
    };
    axios.request(options).then(
        (r)=>{
            setReport(r.data)
        }
    ).catch(
        e=>console.log(e)
    );

  };

  return (
      <div className="container">
          <br></br>
           <div class="input-group w-50" style={{marginInlineStart:'300px'}}>
                <input type="text" class="form-control" 
                placeholder="YYYY-MM-DD" 
                onChange={(e)=>{setLoadState(false); setDate(e.target.value)}}
                 />
                <button class="btn btn-outline-secondary" type="submit" id="button-addon2" onClick={()=>handleClick()}>Find</button>
            </div>

            <div>
              {
                loadState?
                Object.keys(report.data).length===0 || report.data.date!==date?<div>Loading....  (Date must be lie within corona virus period)</div>:
                <>
                <br></br><br></br>
                <div className="card text-center">
                <div className="card-header">
                    Date: {report.data.date}
                </div>
                <div className="card-body">
                    <h5 className="card-title">Total Deaths: {report.data.deaths}</h5>
                    <p>Active Cases: {report.data.active}</p>
                    <p>Recovered: {report.data.recovered}</p>
                    <p>Fatality Rate: {report.data.fatality_rate}</p>
                </div>
                <div class="card-footer text-muted">
                    Last Update: {report.data.last_update}
                </div>
                </div>
                </>
                :<div></div>
              }
              
            </div>
      </div>
      
  )
}
export default Reports;
