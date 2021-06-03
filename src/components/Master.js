import React from 'react';
import 'Header';
import 'App';
import 'Footer';


class Master extends React.Component {
  render() {
    return (
      <div>
          <Header />
          <App />
          <Footer />
      </div>
    );
  }
}

export default Master;