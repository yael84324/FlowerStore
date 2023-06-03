import React, { useState,useContext } from "react";
import { ImageContext } from './ImageContext';
import axios from "axios";

const ImageUploader = (props) => {
    const [preview, setPreview] = useState(null);
    const [error, setError] = useState(null);
    const { image, setImage} = useContext(ImageContext);

    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        setImage(selectedImage);
        if (selectedImage) {
            const reader = new FileReader();
            reader.readAsDataURL(selectedImage);
            reader.onloadend = () => {
            setPreview(reader.result);
        };
        } else {
            setPreview(null);
        }
    };
  
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!image) {
            setError("Please select an image to upload.");
            return;
        }
        const formData = new FormData();
        formData.append("image", image);
        try {
            await axios.post(`/api/users/${props.userId}/image`, formData);

            setError(null);
        } catch (err) {
            setError(err.response.data);
        }
    };
    return (
      <div>
          {error && <p>{error}</p>}
          <form onSubmit={handleSubmit} className="form">
              <div>
                  <label htmlFor="image">Select an image:</label>
                  <input type="file" id="image" name="image" onChange={handleImageChange} />
              </div>
              {preview && (
                  <div>
                      <img src={preview} alt="Preview" style={{ width: "100px" }} />
                  </div>
              )}
          </form>
      </div>
    );
  };
export default ImageUploader;