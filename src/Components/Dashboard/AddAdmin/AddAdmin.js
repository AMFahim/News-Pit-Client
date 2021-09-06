import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddAdmin = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <Sidebar/>
      </div>
      <div className="col-md-8">
        <h1>This is add admin page</h1>
      </div>
    </div>
  );
};

export default AddAdmin;