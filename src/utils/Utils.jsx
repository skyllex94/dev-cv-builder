import React from "react";

export const HorizontalLine = () => (
  <hr
    style={{
      color: "gray",
      height: 0.1,
    }}
  />
);

export const HorizontalLineWtLabel = ({ label }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginBottom: "0.5rem",
    }}
  >
    <div
      style={{
        flex: 1,
        height: "1px",
        backgroundColor: "gray",
      }}
    />

    <div>
      <p style={{ width: "40px", paddingTop: "10px", textAlign: "center" }}>
        {label}
      </p>
    </div>

    <div
      style={{
        flex: 1,
        height: "0.5px",
        backgroundColor: "gray",
      }}
    />
  </div>
);
