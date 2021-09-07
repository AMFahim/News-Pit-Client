import React, { useState } from 'react';
import './AddArticle.css';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';


const AddArticle = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [imageURL, setImageURL] = useState(null)


  const onSubmit = data => {
    console.log(data)
    const newsData = {
      title: data.title,
      author: data.author,
      description: data.description,
      category: data.category,
      imageURL: imageURL,
    }
    const url = 'http://localhost:5000/addNews';
    fetch(url, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newsData)
    })
    .then(res => console.log('adding new event:', res))
  };

  const handleImageUpload = event =>{
    const imageData = new FormData();
    imageData.set('key', '46ba524bf4d6daba591164d58506f874');
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload', imageData)
    .then(res => setImageURL(res.data.data.display_url))
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="row">
      <div className="col-md-4 pt-4">
        <Sidebar />
      </div>
      <div className="col-md-8 pt-4">
        <form onSubmit={handleSubmit(onSubmit)} className="container">
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
          <input type="file" onChange={handleImageUpload} className="responsive-input" name="exampleRequired" required />
          <br />
          <br />
          <input className="btn btn-secondary submit-btn" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddArticle;