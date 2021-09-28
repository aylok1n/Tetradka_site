import React from "react";
import '../style/imagePicker.scss'
import ImageUploading from "react-images-uploading";

const ImagePicker = ({photo, setPhoto}) => {
  const [images, setImages] = React.useState(photo);
  const maxNumber = 69;
  const onChange = (imageList) => {
    // data for submit
    setImages(imageList);
    setPhoto(imageList)
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default ImagePicker;

  
  