import { useEffect } from "react";
import { APIS, useAPI } from "../apis/config";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const params = useParams();

  const [get_recipe_by_id, loading] = useAPI(APIS.get_recipe_by_id);

  useEffect(() => {
    get_recipe_by_id(params.id)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>RecipeDetail</h1>
    </div>
  );
};

export default RecipeDetail;
