import { ICreateUserDTO } from "../../dtos/user/create-user.dto";
import { IUserRepository } from "../../../domain/repositories/user.repository";
import bcrypt from "bcryptjs";
import { SafeUser } from "../../../domain/entities/user";
import { EmailAlreadyExistsError } from "../../../domain/errors/EmailAlreadyExistsError";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) { }

  async execute(data: ICreateUserDTO): Promise<SafeUser> {
    const exists = await this.userRepository.findByEmail(data.email);
    if (exists) {
      throw new EmailAlreadyExistsError();
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const newUser = await this.userRepository.create({
      ...data,
      password: hashedPassword,
    });

    return newUser;
  }
}
