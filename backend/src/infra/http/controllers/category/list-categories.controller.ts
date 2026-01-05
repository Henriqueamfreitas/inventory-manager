import { Request, Response } from "express";
import { CategoryRepository } from "../../../db/typeorm/repositories/category.repository";
import { ListCategoriesUseCase } from "../../../../application/use-cases/category/list-categories.usecase";

export class ListCategoriesController {
  async handle(req: Request, res: Response) {
    const useCase = new ListCategoriesUseCase(new CategoryRepository());
    const categories = await useCase.execute();
    return res.json(categories);
  }
}
