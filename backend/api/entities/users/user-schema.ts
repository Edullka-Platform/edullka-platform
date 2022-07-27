import { Schema } from "mongoose";
import { passwordManager } from '../../utils/password-manager';
import { IUser } from './user-types';

export const UserSchema = new Schema<IUser>({
  firstName: {
    type: String,
    required: [true, "first name is required"],
  },
  lastName: {
    type: String,
    required: [true, "last name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    validate: {
      validator: (val: string) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
      message: "invalid email format",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: [8, "min length is 8"],
    validate: {
      validator: (val: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(val),
      message: "invalid password format",
    }
  },
  image: {
    type: String,
    default: '',
  },
  role: {
    type: String,
    default: 'student',
    enum: ['super', 'admin', 'student'],
  }
}, {
  timestamps: true,
});

UserSchema.pre('save', function (next) {
  passwordManager.hashPassword(this.password)
    .then(hash => {
      this.password = hash;
      next();
    })
    .catch(err => {
      next(err);
      // error handling
    })
});

// Login
// EsquemaUsuario.pre('validate', function(next){
//   if(this.password !== this.confirmPassword) {
//       this.invalidate('confirmPassword', 'Las contrasenas no coinciden');
//   }

//   next();
// })

