'use server'

import { userModel } from "@/models/user.model";
import { conn } from "../db";
import { User, updatedUserInterface } from "@/types";
import { revalidatePath } from "next/cache";

export async function createUser(user: User) {
  try {
    await conn();

    const newUser = await userModel.create(user);
    return JSON.parse(JSON.stringify(user));

  } catch (error) {
      console.log(error);
  }
}

export async function getUserById(clerkId: string) {
  try {
    await conn();

    const user = await userModel.findOne({ clerkId: clerkId });
    if(!user) {
      throw new Error('User not found');
    }
    return JSON.parse(JSON.stringify(user));

  } catch (error) {
      console.log(error); 
  }
}

export async function updateUser(clerkId: string, user: updatedUserInterface) {
  try {
    await conn();

    const updatedUser = await userModel.findOneAndUpdate({ clerkId: clerkId }, user, { new: true });

    if(!updatedUser) {
      throw new Error('User update failed');
    }

    return JSON.parse(JSON.stringify(updatedUser));

  } catch (error) {
      console.log(error); 
  }
}

export async function deleteUser(clerkId: string) {
  try {
    await conn();

    const deletedUser = await userModel.findOneAndDelete({ clerkId: clerkId });

    revalidatePath('/');
    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;

  } catch (error) {
      console.log(error);  
  }
}
