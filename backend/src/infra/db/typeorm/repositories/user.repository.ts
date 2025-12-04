import { IUserRepository } from "../../../../domain/repositories/user.repository";
import { UserEntity } from "../entities/user.entity";
import { AppDataSource } from "../database";
import { SafeUser, User } from "../../../../domain/entities/user";
import { removePassword } from "../utils/removePassword";

export class UserRepository implements IUserRepository {
  private ormRepo = AppDataSource.getRepository(UserEntity);

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.ormRepo.findOne({ where: { email } });
    return user;
  }

  async create(data: Partial<User>): Promise<User> {
    const user = this.ormRepo.create(data);
    const saved = await this.ormRepo.save(user);
    return saved;
  }
}
