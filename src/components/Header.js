import React, { Component } from 'react';
import RoomDetails from './RoomDetails';

class Header extends Component{

  renderTable(){
    return(
         <table className="rooms-table">
            <tbody>
               <tr>
                 <td><RoomDetails rtype='a'/></td>
                 <td><RoomDetails rtype='r'/></td>
                 <td><RoomDetails rtype='c'/></td>
               </tr>
            </tbody>
         </table>
    );
  }

   render(){
     return(
       <div className="header">
          {this.renderTable()}
       </div>
     );
   }
 }

export default Header;
