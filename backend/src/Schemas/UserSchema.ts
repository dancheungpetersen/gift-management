// Schemas/UserSchema.ts
import { Schema, model } from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  phone: string;
  age: number;
  role: 'department_user' | 'department_head' | 'cpro_department_admin';
  password: string;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  age: { type: Number, required: true },
  role: { 
    type: String, 
    enum: ['department_user', 'department_head', 'cpro_department_admin'],
    required: true 
  },
  password: { type: String, required: true }
});

export const UserModel = model<IUser>('User', UserSchema, 'users');