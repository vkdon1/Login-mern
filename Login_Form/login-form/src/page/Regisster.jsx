import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    const response = await fetch("https://2s3rq2-3000.csb.app/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    console.log("response data : ", response);
  };

  const Submit = () => {
    alert("Data submitted");
  };

  const containerStyle = {
    minHeight: "100vh",
    backgroundColor: "#1a1a1a",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "20px",
  };

  const formContainerStyle = {
    backgroundColor: "#2d2d2d",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
  };

  const inputStyle = {
    marginTop: "10px",
    width: "100%",
    backgroundColor: "#3d3d3d",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    outline: "none",
  };

  const buttonStyle = {
    width: "100%",
    backgroundColor: "#805ad5",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    marginTop: "20px",
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out",
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    transform: "scale(1.05)",
  };

  return (
    <div style={containerStyle}>
      <div style={{ width: "90%", maxWidth: "800px" }}>
        <header style={headerStyle}>
          <h1 style={{ fontSize: "2.5rem", color: "#805ad5" }}>VD LearnNest</h1>
        </header>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Left Section (Image) */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPFh5cy-mY_5ypQLdIr63K-nSD4bfTADQ9dg&s"
              alt="Registration Illustration"
              style={{ width: "100%", maxWidth: "300px", borderRadius: "10px" }}
            />
          </div>

          {/* Right Section (Form) */}
          <div style={formContainerStyle}>
            <h2
              style={{
                fontSize: "1.8rem",
                color: "#805ad5",
                marginBottom: "20px",
              }}>
              Registration Form
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Username */}
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  style={inputStyle}
                  placeholder="Enter your username"
                  value={user.username}
                  onChange={handleInput}
                />
              </div>
              {/* Email */}
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  style={inputStyle}
                  placeholder="Enter your email"
                  value={user.email}
                  onChange={handleInput}
                />
              </div>
              {/* Phone */}
              <div>
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  style={inputStyle}
                  placeholder="Enter your phone number"
                  value={user.phone}
                  onChange={handleInput}
                />
              </div>
              {/* Password */}
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  style={inputStyle}
                  placeholder="Enter your password"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                style={buttonStyle}
                onMouseOver={(e) => (e.target.style = buttonHoverStyle)}
                onMouseOut={(e) => (e.target.style = buttonStyle)}
                onClick={Submit}>
                Register Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
