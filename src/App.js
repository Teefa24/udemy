import React from "react";
import "./App.css";
import { categories, heroCourses, trustedCompanies } from "./data";

export default function App() {
  return (
    <div className="container">

      <nav className="navbar">
        <h2 className="logo">Udemy</h2>
        <input className="search" placeholder="Search for anything" />
        <button className="login-btn">Log In</button>
      </nav>

      <div className="categories">
        {categories.map((cat) => (
          <span key={cat.id}>{cat.title}</span>
        ))}
      </div>

      <div className="hero">
        <h1>Expand your career opportunities with Udemy</h1>
        <p>Courses taught by real-world experts.</p>

        <div className="course-list">
          {heroCourses.map((course) => (
            <div className="course-card" key={course.id}>
              <img src={course.image} alt={course.title} />
              <h3>{course.title}</h3>
              <p className="instructor">{course.instructor}</p>
              <p>⭐ {course.rating}</p>
              <strong>${course.price}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className="trusted">
        <h2>Trusted by companies of all sizes</h2>

        <div className="company-list">
          {trustedCompanies.map((company, index) => (
            <span key={index}>{company}</span>
          ))}
        </div>
      </div>
    </div>
  );
}