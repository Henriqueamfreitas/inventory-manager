import { User } from "../entities/user";

export interface IUserRepository {
  create(data: Partial<User>): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}