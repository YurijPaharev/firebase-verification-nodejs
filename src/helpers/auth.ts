import { adminFireAuth } from "../firebase";

export const validateAuth = async (req, res, next) => {
  // Check that the request contains a token
  if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
      // Validate the token
      const token = req.headers.authorization.split(" ")[1];
      try {
        const result = await adminFireAuth.verifyIdToken(token);
        req.user = result;
        next();
      } catch (error) {
        res.status(401).send({errorCode: 410, errorMessage: "Token has expired"})
      }
  } else {
      // If there is no token, respond appropriately
      res.status(401).send({errorCode: 410, errorMessage: "No token provided."})
  }
}