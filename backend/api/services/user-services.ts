import { UserModel } from '../entities/users/user-model';
import { CreateUserType } from '../entities/users/user-types';

export const createUserService = async (user: CreateUserType) => {
  try {
    const newUser = new UserModel(user);
    return await newUser.save();
  } catch (error: any) {
    throw new Error(error);
  }
}
