import b2cauth from "react-azure-adb2c";
import decodeJWT from "jwt-decode";
import swal from "sweetalert";

class Auth {
  isLoggedIn() {
    if (b2cauth.getAccessToken()) {
      return true;
    }

    return false;
  }

  logout() {
    swal({
      title: "Are you sure you want to log out?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((logout) => {
      if (logout) {
        swal("You have been logged out!");
        b2cauth.signOut();
      } else {
        swal("You have not been logged out!");
      }
    });
  }

  getToken() {
    return b2cauth.getAccessToken();
  }

  currentUser() {
    const decoded = decodeJWT(b2cauth.getAccessToken());
    return {
      given_name: decoded.given_name,
      family_name: decoded.family_name,
      emails: decoded.emails,
      sub: decoded.sub,
      newUser: decoded.newUser,
    };
  }
}

export default Auth;
