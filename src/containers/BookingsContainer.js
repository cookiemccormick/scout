import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import BookingInput from '../components/BookingInput';
import Bookings from '../components/Bookings';

class BookingsContainer extends React.Component {
  render() {
    return (
      <div>
        <BookingInput model={this.props.model} />
        <Bookings bookings={this.props.model && this.props.model.bookings} />
      </div>
    );
  }
}


export default connect(null)(BookingsContainer);



// render() {
//   return (
//     <div>
//       <Switch>
//         <Route path='/models/new' component={ModelInput} />
//         <Route path='/models/:id' render={(routerProps) => <Model {...routerProps} models={this.props.models} />} />
//         <Route path='/models' render={(routerProps) => <Models {...routerProps} models={this.props.models} />} />
//     </Switch>
//     </div>
//   );
// }