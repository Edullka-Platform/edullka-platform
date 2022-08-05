import jwt from 'jsonwebtoken';
import { JWT_KEY } from '../config/jwt-config';

class JWTService {
  static sign(payload: any) {
    return jwt.sign(payload, JWT_KEY, {expiresIn: '1d'} );
    // Verificate time expiration
  }
  static verify(token: string) {
    return jwt.verify(token, JWT_KEY);
  }
}

export default JWTService;