import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["active", "complete"],
      default: "active",
    }
  },
  {
    timestamps: true, // createdAt và updatedAt tự động thêm vào
  }
);

const User = mongoose.model("User", userSchema);
export default User;
