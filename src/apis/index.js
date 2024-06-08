import { baseModule } from "./config";

const APIS = {
  login: (body) => {
    return baseModule.post("/auth/login", body);
  },
  register: (body) => {
    return baseModule.post("/auth/register", body);
  },
  get_all_recipes: () => {
    return baseModule.get("/recipes");
  },
  get_recipe_by_id: (receipeId) => {
    return baseModule.get(`/recipes/${receipeId}`);
  },
};

export default APIS;
