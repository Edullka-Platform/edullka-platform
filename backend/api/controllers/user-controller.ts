import { NextFunction, Request, Response } from 'express';
import { CreateUserType, IUser } from '../entities/users/user-types';
import { UserModel } from '../entities/users/user-model';
import { createUserService } from '../services/user-services';
import bcrypt from 'bcrypt';
import JWTService from '../services/jwt-services';

export const signupUser = async (req: Request<{}, {}, CreateUserType>, res: Response, next: NextFunction) => {
  try {
    const newUser = await createUserService(req.body);
    const token = JWTService.sign(
      {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        userId: newUser.id,
      });
    console.log(token);
    res.status(201).json({ token: token });
  } catch (error: any) {
    throw new Error(error);
  }
}

// export const signupUser = async (req: Request<{}, {}, CreateUserType>, res: Response, next: NextFunction) => {
//   const { firstName, lastName, email, password } = req.body;

//   try {
//     const existingUser = await UserModel.findOne({ email });
//     if (existingUser) return res.status(422).json({ message: 'Email Already Exist!' });

//     const hashedPassword = await bcrypt.hash(password, 8);
//     const user = new UserModel({ firstName, lastName, email, password: hashedPassword });

//     await user.save();

//     res.json({ message: "User Created" });
//   } catch (error: any) {
//     throw new Error(error);
//   }
// };

export const signinUser = async (req: Request<{}, {}, CreateUserType>, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  try {
    //Check if email or password is missing (Angel U)
    if (!email || !password) {
      return res.status(400).json({ message: 'Please enter your email and password' });
    }

    const user = await UserModel.findOne({ email });
    if (!user) return res.status(404).json({ message: 'Invalid email or password' });

    const isValidPassword = await bcrypt.compare(password, user.password);
    
    if (!isValidPassword)
      return res.status(401).json({ message: 'Invalid email or password' });

    const token = JWTService.sign(
      {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        userId: user.id,
      });

    res.json({ token: token });
  } catch (error: any) {
    throw new Error(error);
  }
}

