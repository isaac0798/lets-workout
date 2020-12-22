const translateGoogleProfile = (googleProfile) => {
  return {
    'display_name': googleProfile.displayName,
    'first_name': googleProfile.name.givenName,
    'last_name': googleProfile.name.familyName,
    'email': googleProfile.emails[0].value,
    'profile_pic_url': googleProfile.photos[0].value
  }
}

module.exports = translateGoogleProfile;
