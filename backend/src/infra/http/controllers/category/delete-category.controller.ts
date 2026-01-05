import { Request, Response } from "express";
import { CategoryRepository } from "../../../db/typeorm/repositories/category.repository";
import { DeleteCategoryUseCase } from "../../../../application/use-cases/category/delete-category.usecase";
import { categoryIdSchema } from "../../validators/category/category-id.schema";

export class DeleteCategoryController {
  async handle(req: Request, res: Response) {

    const useCase = new DeleteCategoryUseCase(new CategoryRepository());
    const data = categoryIdSchema.parse(req.params);

    await useCase.execute(data.id);
    return res.status(204).send();
  }
}