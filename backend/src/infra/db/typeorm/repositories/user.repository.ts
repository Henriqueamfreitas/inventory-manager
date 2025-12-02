import { IUserRepository } from "../../../../domain/repositories/user.repository";
import { UserEntity } from "../entities/user.entity";
import { AppDataSource } from "../database";
import { User } from "../../../../domain/entities/user";

export class UserRepository implements IUserRepository {
  private ormRepo = AppDataSource.getRepository(UserEntity);

  async findByEmail(email: string): Promise<User | null> {
    return await this.ormRepo.findOne({ where: { email } });
  }

  async create(data: Partial<User>): Promise<User> {
    const user = this.ormRepo.create(data);
    await this.ormRepo.save(user);
    return user;
  }
}
