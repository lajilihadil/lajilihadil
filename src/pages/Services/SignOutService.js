// SignOutService.js
import http from './axiosContext';

const signOut = () => {
  return http.get("/auth/logout");
}

export default {
  signOut,
};
