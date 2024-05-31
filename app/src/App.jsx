import { useEffect, useState } from "react";
import SearchResult from "./components/SearchResult";
export const Base_URL = "http://localhost:9000";

const App = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const [search, setsearch] = useState("");
  const [filterType, setFilterType] = useState("All");

  useEffect(() => {
    const fetchdata = async () => {
      setloading(true);
      try {
        const response = await fetch(Base_URL);
        const json = await response.json();
        setdata(json);
        setloading(false);
      } catch (error) {
        seterror("Unable to fetch data;");
      }
    };
    fetchdata();
  }, []);

  const handleFilter = (type) => {
    setFilterType(type);
  };

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading....</div>;

  return (
    <div>
      
      <div className="main">
        <div className="logo">
          <img src="./Foody Zone.png" alt="logo" />
        </div>
        <div className="search">
          <input
            value={search}
            onChange={(e) => {
              setsearch(e.target.value);
            }}
            type="text"
            placeholder="Search food...."
          />
        </div>
      </div>
      <div className="filter">
        <button onClick={() => handleFilter("All")}>All</button>
        <button onClick={() => handleFilter("breakfast")}>Breakfast</button>
        <button onClick={() => handleFilter("lunch")}>Lunch</button>
        <button onClick={() => handleFilter("dinner")}>Dinner</button>
      </div>
      <SearchResult data={data} search={search} filterType={filterType} />
    </div>
  );
};

export default App;
