import { Request, Response } from "express";
import { UserRepository } from "../../../db/typeorm/repositories/user.repository";
import { FindUserByEmailUseCase } from "../../../../application/use-cases/user/find-user-by-email.usecase";

export class FindUserByEmailController {
  async handle(req: Request, res: Response) {
    const useCase = new FindUserByEmailUseCase(new UserRepository());

    const result = await useCase.execute({ email: req.query.email?.toString() ?? "" });

    return res.status(200).json(result);
  }
}
