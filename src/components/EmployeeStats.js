import React, { Component } from 'react';
import axios from 'axios';
import Employee from './Employee.js';
import _ from 'lodash';

const BOOK_URL = `https://interview-booking-api.herokuapp.com/api/bookings`;

class EmployeeStats extends Component{

   constructor(props){
    super(props);
    this.state= { emp:{} };
   }


 componentDidMount(){
   var emp={};
   axios.get(`${BOOK_URL}`)
  .then( (response) => {
           response.data.map( (res) =>{
                if( res.employee != null){
                  var date1= this.getDate(res.checkInDate);
                  var date2=this.getDate(res.checkOutDate);
                  var diff= Math.floor(( Date.parse(date2) - Date.parse(date1) ) / 86400000);
                  if ( emp[res.employee.id] != null){
                        emp[res.employee.id].time += diff;
                  }else{
                    emp[res.employee.id] = {
                       'id':res.employee.id,
                       'firstName' : res.employee.firstName,
                       'lastName' : res.employee.lastName,
                       'profileImageUrl' : res.employee.profileImageUrl,
                       'time' : diff,
                      }
                  }
               }
           });
           this.setState({emp});
     });
  }

  getDate(date){
    return date.substr(3, 2)+"/"+date.substr(0, 2)+"/"+date.substr(6, 2);
  }

   renderEmployee(){
     if( _.isEmpty(this.state.emp) ){
           return <div>Loading...</div>;
         }
     var empArray = Object.values(this.state.emp);
     empArray = empArray.sort((a, b) => parseFloat(a.time) - parseFloat(b.time));
     var len = empArray.length;
         return(
               <div>
                   <table className="employee_table">
                      <tbody>
                         <Employee details={empArray[len-1]}/>
                         <Employee details={empArray[len-2]}/>
                         <Employee details={empArray[len-3]}/>
                      </tbody>
                   </table>
              </div>
         );
   }

   render(){
     return(
       <div className="employee_stats">
         {this.renderEmployee()}
       </div>
     );

   }
 }


export default EmployeeStats;
