import React, { Component } from 'react';

class Employee extends Component{

   render(){
     return(
       <tr className="employee">
          <td><img className="avatar" src={this.props.details.profileImageUrl} alt="Avatar" /></td>
          <td className="employee-name">{this.props.details.firstName} {this.props.details.lastName.substr(0,1)+"."}</td>
          <td>{this.props.details.time*24} hours</td>
       </tr>
     );
   }
 }

export default Employee;
