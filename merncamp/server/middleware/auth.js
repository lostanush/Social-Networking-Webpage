import { expressjwt } from "express-jwt";

export const requireSignin = expressjwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  userProperty: 'auth', // This sets the property name in req object where decoded token is attached
});
