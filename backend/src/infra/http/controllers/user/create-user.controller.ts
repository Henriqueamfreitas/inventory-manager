import { Request, Response } from "express";
import { UserRepository } from "../../../db/typeorm/repositories/user.repository";
import { CreateUserUseCase } from "../../../../application/use-cases/create-user.usecase";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const useCase = new CreateUserUseCase(new UserRepository());

    const result = await useCase.execute(req.body);

    return res.status(201).json(result);
  }
}
