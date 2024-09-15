import React from "react";
export default function Loading() {
  return (
    <>
      <div
        id="loadingScreen"
        className="vh-100 d-flex justify-content-center align-items-center "
      >
        <i className="fas fa-spinner fa-spin fa-2x text-primary"></i>
      </div>
    </>
  );
}
