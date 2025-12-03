import { SafeUser, User } from "../entities/user";

export interface IUserRepository {
  create(data: Partial<User>): Promise<SafeUser>;
  findByEmail(email: string): Promise<User | null>;
}