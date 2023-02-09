import React from 'react'
import { Link } from 'react-router-dom';
const ForgotPasswordSection = () => {
  return (
    <div className="flex justify-between items-center text-sm mt-6">
      <div>
        <label className="flex items-center gap-3">
          <input type="checkbox" />
          <span>Remember me</span>
        </label>
      </div>
      <Link to="/" className="text-d-blue underline">
        Forgot password
      </Link>
    </div>
  );
}

export default ForgotPasswordSection