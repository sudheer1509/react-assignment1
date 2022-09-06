import React from "react";
import "./Details.css";
export default function Details({ data }) {
  return (
    data && (
      <div className="info-wrapper">
        <h1>Details</h1>
        <p>Click on a table item to get detailed information</p>
        <div className="info-content">
          <div>
            <b>User selected:</b>
            <span>
              {data.firstName} {data.lastName}
            </span>
          </div>
          <div>
            <b>Description: </b>
            <textarea
              cols="50"
              rows="5"
              readOnly
              value={data.description}
            ></textarea>
          </div>

          <div>
            <b>Address:</b>
            <span>{data.address.streetAddress}</span>
          </div>
          <div>
            <b>City:</b>
            <span>{data.address.city}</span>
          </div>
          <div>
            <b>State:</b>
            <span>{data.address.state}</span>
          </div>
          <div>
            <b>Zip:</b>
            <span>{data.address.zip}</span>
          </div>
        </div>
      </div>
    )
  );
}
