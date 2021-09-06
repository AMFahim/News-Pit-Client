import React from 'react';
import './AddArticle.css';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";


const AddArticle = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div className="row">
      <div className="col-md-4 pt-4">
        <Sidebar />
      </div>
      <div className="col-md-8 pt-4">
        <form className="container">
          <p>Title:-</p>
          <input style={{ maxWidth: "400px" }} className="form-control responsive-input" placeholder="Title" {...register("title")} required />
          <br />
          <p>Author Name:-</p>
          <input style={{ maxWidth: "400px" }} className="form-control responsive-input" placeholder="Author" type="text" {...register("author")} required />
          <br />
          <p>Description:-</p>
          <textarea style={{ maxWidth: "400px" }} className="form-control responsive-input" placeholder="Description" {...register("description")} required />
          <br />
          <p>Select Category:-</p>
          <select style={{ maxWidth: "400px" }} className="box form-control responsive-input" {...register("category")} required>
            <option disabled={true} value="Not set">Select Category</option>
            <option value="Business">Business</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Politics">Politics</option>
            <option value="Sports">Sports</option>
            <option value="International">International</option>
            <option value="Not set">Other</option>
          </select>
          <br />
          <p>Image:-</p>
          <input type="file" className="responsive-input" name="exampleRequired" required />
          <br />
          <br />
          <input className="btn btn-warning submit-btn" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddArticle;