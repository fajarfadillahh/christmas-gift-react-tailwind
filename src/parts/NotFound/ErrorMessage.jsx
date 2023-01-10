import React from "react";
import { Link } from "react-router-dom";

export default function ErrorMessage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="pb-4 text-[28px] font-bold text-gray-900">
          404 NOT FOUND
        </h1>
        <p className="pb-8 text-[15px] text-gray-600">
          The page you're looking for is not found
        </p>
        <Link to="/" className="button inline-flex">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
