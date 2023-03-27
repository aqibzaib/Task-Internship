import { Search } from "@mui/icons-material";
import "./App.css";
import EmployeAttadance from "./layout/EmployeAttadance";

import Header from "./layout/Header";
import SearchTool from "./layout/SearchTool";
function App() {
  return (
    <div>
      <Header />
      <SearchTool />
      <EmployeAttadance />
    </div>
  );
}

export default App;
