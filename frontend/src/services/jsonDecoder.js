import jwt_decode from "jwt-decode";

export const jsonDecoder = ({ token }) => {
  var decoded = jwt_decode(token);
  return decoded;
};
