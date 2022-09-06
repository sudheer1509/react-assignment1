import Search from "./Components/Search";
import Table from "./Components/Table";
import Details from "./Components/Details";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [userData, setUserData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUserData, setFilteredUserData] = useState([]);
  const [activeRowData, setActiveRowData] = useState(null);
  const [activeRowId, setActiveRowId] = useState("");
  useEffect(() => {
    axios
      .get("https://admin-panel-data-edyoda-sourav.herokuapp.com/admin/data")
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const getFilteredData = (e) => {
    let filteredUsers = userData.filter(
      (user) =>
        user.firstName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        user.lastName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        user.email.toLowerCase().includes(e.target.value.toLowerCase()) ||
        user.phone.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredUserData(filteredUsers);
    setSearchQuery(e.target.value);
  };
  const handleSelectedRow = (id) => {
    let selectedRowRecord = userData.findIndex((user) => user.id === id);

    setActiveRowId(id);
    setActiveRowData(userData[selectedRowRecord]);
  };
  return (
    <div className="main-section">
      <div className="section">
        <Search searchQuery={searchQuery} getFilteredData={getFilteredData} />
        <Table
          userData={userData}
          filteredUserData={filteredUserData}
          searchQuery={searchQuery}
          handleSelectedRow={handleSelectedRow}
          activeRowId={activeRowId}
        />
      </div>
      <Details data={activeRowData} />
    </div>
  );
}

export default App;
