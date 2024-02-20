import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        'https://media.istockphoto.com/id/1026502058/pt/vetorial/avatar.jpg?s=612x612&w=0&k=20&c=JTMJyth8R6eutiAtAj9DVi41Tcf6qa3hl4FOpFXx_58=',
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
