import React from "react";
import "./Table.css";
import TableRow from "./TableRow";

export default function Table({
  userData,
  filteredUserData,
  searchQuery,
  handleSelectedRow,
  activeRowId,
}) {
  return (
    <>
      <div className="table-wrapper">
        <div className="table-headers">
          <table>
            <thead>
              <tr>
                <th className="column1">Id</th>
                <th className="column2">FirstName</th>
                <th className="column3">LastName</th>
                <th className="column4">Email</th>
                <th className="column5">Phone</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="table-data">
          <table>
            <tbody className="data-body">
              {/* {userData.map((item, index) => (
                <TableRow data={item} index={index} />
              ))} */}
              {filteredUserData.length === 0 && searchQuery === ""
                ? userData.map((item, index) => (
                    <TableRow
                      data={item}
                      index={index}
                      handleSelectedRow={handleSelectedRow}
                      activeRowId={activeRowId}
                    />
                  ))
                : filteredUserData.map((item, index) => (
                    <TableRow
                      data={item}
                      index={index}
                      handleSelectedRow={handleSelectedRow}
                      activeRowId={activeRowId}
                    />
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
