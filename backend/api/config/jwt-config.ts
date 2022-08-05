import dotenv from 'dotenv';

dotenv.config();

export const JWT_KEY = process.env.JWT_KEY!;