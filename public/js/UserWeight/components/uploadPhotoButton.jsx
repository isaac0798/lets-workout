import React from 'react';
import ReactDom from 'react-dom';

export const uploadPhotoButton = () => {
  console.log('hellooooo');
  ReactDom.render(uploadPhoto(), document.getElementById("photoUpload"));
}

const uploadPhoto = () => {
  return (
    <div id="uploadSection">
      <input id="dateInput" type="date" />
      <input type="file" />
      <button id="uploadButton" onClick={photoUpload}>Upload</button>
    </div>
  );
}

const photoUpload = () => {
  console.log('uploadd');  
  var upload = document.getElementById("uploadButton");
  upload.setAttribute("type", "file");
}
