import React from "react";

export default function TableRow({
  data,
  index,
  handleSelectedRow,
  activeRowId,
}) {
  return (
    <tr
      className={`data-row ${activeRowId === data.id ? "active" : ""}`}
      key={index}
      onClick={() => handleSelectedRow(data.id)}
    >
      <td className="column1">{data.id}</td>
      <td className="column2">{data.firstName}</td>
      <td className="column3">{data.lastName}</td>
      <td className="column4">{data.email}</td>
      <td className="column5">{data.phone}</td>
    </tr>
  );
}
