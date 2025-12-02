import { ICreateUserDTO } from "../dtos/create-user.dto";
import { IUserRepository } from "../../domain/repositories/user.repository";
import bcrypt from "bcryptjs";
import { User } from "../../domain/entities/user";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: ICreateUserDTO): Promise<User> {
    const exists = await this.userRepository.findByEmail(data.email);
    if (exists) {
      throw new Error("Email already registered");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const newUser = await this.userRepository.create({
      ...data,
      password: hashedPassword,
    });

    return newUser;
  }
}
