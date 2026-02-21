/**
 * AcademicPal - User Model
 * Mongoose schema for user accounts with name, email, and password
 */
import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model('User', UserSchema);

