import React, { Component } from 'react';
import axios from 'axios';

const BOOK_URL = `https://interview-booking-api.herokuapp.com/api/booking-snapshot`;

class RoomDetails extends Component{

  constructor(props){
     super(props);
     this.state= { num:'Loading ...' };
 }

 componentDidMount(){
   const{rtype}= this.props;
   axios.get(`${BOOK_URL}`)
  .then( (response) => {
         var num;
         if ( rtype === 'a' ) num =response.data.availableRooms;
         if ( rtype === 'r' ) num =response.data.reservedRooms;
         if ( rtype === 'c' ) num =response.data.checkedIn;
         this.setState({num});
     });
  }

   render(){
     const{rtype}= this.props;
     var type;
     if ( rtype === 'a' ) type = 'Rooms avilable';
     if ( rtype === 'r' ) type = 'Reserved rooms';
     if ( rtype === 'c' ) type = 'Checked in';
     return(
       <div className="room_details">
             <span className="room-num">{this.state.num}</span><br />
             {type}
       </div>
     );
   }
 }

export default RoomDetails;
