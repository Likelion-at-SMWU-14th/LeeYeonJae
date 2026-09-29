export interface Recipe {
  id: string;
  title: string;
  ingredients: string;
  instructions: string;
}

export type CreateRecipeRequest = Omit<Recipe, "id">;

export type RecipeContent = Pick<
  Recipe,
  "title" | "ingredients" | "instructions"
>;

export type UpdateRecipeContentRequest = Partial<RecipeContent>;
