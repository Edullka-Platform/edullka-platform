import bcrypt from 'bcrypt';

export const passwordManager = {
  hashPassword: async (password: string): Promise<string> => {
    return await bcrypt.hash(password, 10);
  },
  comparePassword: async (password: string, hash: string): Promise<boolean> => {
    return await bcrypt.compare(password, hash);
  },
};
