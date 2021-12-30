import '../App.css';
import React from 'react';

function NotFoundPage() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-column text-center">
        <h1 className="not-found-header">404</h1>
        <p className="not-found-text">
          The requested page could not be found.
        </p>
      </div>
    </>
  );
}

export default NotFoundPage;
