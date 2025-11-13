import { User } from "./user.entity.ts";

export interface UserRepository {
  createUser(user: User): Promise<void>;
  findOneUser(userId): Promise<User>;
  updateUser(userId: number, user: User): Promise<User>;
  deleteUser(userId: number): Promise<User>;
}
