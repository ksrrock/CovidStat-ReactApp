/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useParams } from 'react-router'
import { useEffect ,useState} from 'react';
import axios from 'axios';


export const ProviceReport = () => {
  const params=useParams();
  const [reportProvince, setReportProvince] = useState({});
  console.log(params)
  var options = {
    method: 'GET',
    url: 'https://covid-19-statistics.p.rapidapi.com/reports',
    params: {
      region_province: params.province,
    },
    headers: {
      'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com',
      'x-rapidapi-key': 'ec750b870cmsh5f21b8f2186eec6p1a5d72jsnc3872c32d2fb'
    }
  };
  useEffect(() => {
    axios.request(options).then(function (response) {
        setReportProvince(response.data);
    }).catch(function (error) {
        console.error(error);
    });
  },[])


  const list=reportProvince.data
  console.log(list)
  return (
   Object.keys(reportProvince).length>0  && reportProvince.data.length>0? 
    <div className='container w-50'>
      <br></br>
        <div class="card">
            <div class="card-body bg-light">
                <h4>Report of {params.province} province of {params.country} country code</h4>
                <hr></hr>
                <h5 class="text-primary">Confirmed Cases:
                {reportProvince.data[0].confirmed}</h5>
                <h5 class="text-danger">Deaths: {reportProvince.data[0].deaths}</h5>
                <h5 class="text-success">Recovered: {reportProvince.data[0].recovered}</h5>
                <h5 class="text-warning">Confirmed Difference: {reportProvince.data[0].confirmed_diff}</h5>
                <h5 class="text-info">Deaths Difference: {reportProvince.data[0].deaths_diff}</h5>
                <h5 class="text-primary">Active Cases: {reportProvince.data[0].active}</h5>
                <h5 class="text-secondary">Active Difference: {reportProvince.data[0].active_diff}</h5>
                <h5 class="text-danger">Fatality Rate: {reportProvince.data[0].fatality_rate}</h5>
            </div>
        </div>
        </div>
        :
        <div><br></br>Loading...  ( Item may not be present if it loads for too long)</div>

  )
}
