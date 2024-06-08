import { useEffect, useState } from "react";
import { APIS, useAPI } from "../apis/config";
import Header from "../components/header";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  const { setIsLoggedIn } = props;
  const user = localStorage.getItem("user");
  const parsed_user = JSON.parse(user);

  const [allRecipes, setAllRecipes] = useState([]);

  const [get_all_recipes, loading] = useAPI(APIS.get_all_recipes);

  async function getAllRecipes() {
    try {
      const { data } = await get_all_recipes();
      console.log(data);
      setAllRecipes(data.recipes);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllRecipes();
  }, []);

  return (
    <div>
      <Header setIsLoggedIn={setIsLoggedIn} />
      <div style={{ margin: "auto", width: "80%" }}>
        <h1>Welcome {parsed_user.firstName}!</h1>

        <section>
          {allRecipes.map((item, index) => (
            <div
              key={index}
              style={{
                height: 140,
                borderRadius: 4,
                overflow: "hidden",
                display: "flex",
                margin: "12px 0",
                border: "1px solid #dcdcdc",
              }}
            >
              <img
                src={item.image}
                style={{ height: "100%", objectFit: "cover" }}
              />

              <div>
                <Link to={{ pathname: `/recipe/${item.id}` }}>
                  <button>View details</button>
                </Link>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
