import jwt_decode from "jwt-decode";

export const jsonDecoder = (token) => {
  if (token) {
    try {
      var decoded = jwt_decode(token);
      return decoded;
    } catch (error) {}
  }
};
