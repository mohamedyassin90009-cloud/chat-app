import AppError from "../util/appError.js";
import catchAsync from "../util/catchAsync.js";
import jwt from "jsonwebtoken";
import { promisify } from "util";
import User from "../models/userModel.js";

const protectRoute = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(
      new AppError("You are not logged in! Please log in to get access.", 401)
    );
  }
  // Verify token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  // Check if user still exists
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      new AppError("The user belonging to this token does no loger exist.", 401)
    );
  }
  req.user = currentUser;
  next();
});

export default protectRoute;
