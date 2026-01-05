import { Request, Response } from "express";
import { CategoryRepository } from "../../../db/typeorm/repositories/category.repository";
import { UpdateCategoryUseCase } from "../../../../application/use-cases/category/update-category.usecase";
import { updateCategorySchema } from "../../validators/category/update-category.schema";
import { categoryIdSchema } from "../../validators/category/category-id.schema";

export class UpdateCategoryController {
  async handle(req: Request, res: Response) {
    const data = updateCategorySchema.parse(req.body);
    const { id } = categoryIdSchema.parse(req.params);
    const useCase = new UpdateCategoryUseCase(new CategoryRepository());
    const category = await useCase.execute({
      id,
      ...data,
    });
    return res.json(category);
  }
}