import bcrypt from 'bcrypt';

export const passwordManager = {
  hashPassword: async (password: string) => {
    return await bcrypt.hash(password, 10);
  },
  comparePassword: (password: string, hash: string) => {
    return bcrypt.compare(password, hash);
  },
};
