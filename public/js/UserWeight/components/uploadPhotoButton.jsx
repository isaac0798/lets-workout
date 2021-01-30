import React from 'react';
import ReactDom from 'react-dom';

export const uploadPhotoButton = () => {
  ReactDom.render(uploadPhoto(), document.getElementById("photoUpload"));
}

const uploadPhoto = async () => {
  const response = await fetch(`${window.location.origin}/webapi/weight/image`,{
    credentials: 'include'
  });
  
  console.log(response);
  return (
    <div id="uploadSection">
      <input id="imageDate" type="date" />
      <input id="photoFile" name="photo" type="file" />
      <button id="uploadButton" onClick={photoUpload}>Upload</button>
    </div>
  );
}

const photoUpload = () => {
  var upload = document.getElementById("photoFile");
  const photo = upload.files[0];
  if (photo.type !== "image/jpeg" && photo.type !== "image/png") {
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    var fd = new FormData();
    fd.append('photo', photo);
    const options = {
      method: 'POST',
      credentials: 'include',
      body: fd
    }
    //delete options.headers['Content-Type'];

    fetch(`${window.location.origin}/webapi/weight/image`, options)
	};
	reader.onerror = function(e) {
		// error occurred
		console.log('Error : ' + e.type);
	};
	reader.readAsDataURL(photo);
}
