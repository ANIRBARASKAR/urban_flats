import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

const FacebookLoginComponent = () => {
  const [accessToken, setAccessToken] = useState(null);

  const responseFacebook = (response) => {
    if (response.accessToken) {
      setAccessToken(response.accessToken);
      getFacebookPhotos(response.accessToken);
    }
  };

  const getFacebookPhotos = (accessToken) => {
    fetch(`https://graph.facebook.com/v13.0/me/photos?access_token=${accessToken}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle the photos data here
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <h1>Facebook Login</h1>
      <FacebookLogin
        appId="1107891783507263"   //anyone
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
      />
    </div>
  );
};

export default FacebookLoginComponent;
