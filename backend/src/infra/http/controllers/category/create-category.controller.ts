import { Request, Response } from "express";
import { CategoryRepository } from "../../../db/typeorm/repositories/category.repository";
import { CreateCategoryUseCase } from "../../../../application/use-cases/category/create-category.usecase";
import { createCategorySchema } from "../../validators/category/create-category.schema";

export class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const data = createCategorySchema.parse(req.body);
    const useCase = new CreateCategoryUseCase(new CategoryRepository());
    const category = await useCase.execute(data);
    return res.status(201).json(category);
  }
}