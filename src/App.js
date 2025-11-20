import React from "react";
import "./App.css";
import { categories, heroCourses, trustedCompanies } from "./data";

export default function App() {
  return (
    <div className="container">
      {/* Top Banner */}
      <div className="top-banner">
        <span className="banner-text">
          New-learner offer | Courses from ₹958.99, Click button to see savings.
        </span>
        <span className="banner-timer">Ends in 5h 56m 33s.</span>
        <button className="banner-btn">Click to redeem</button>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Udemy</h2>
        <input className="search" placeholder="Search for anything" />
        <div className="navbar-buttons">
          <button className="login-btn">Log In</button>
          <button className="signup-btn">Sign up</button>
        </div>
      </nav>

      {/* Categories */}
      <div className="categories">
        {categories.map((cat) => (
          <span key={cat.id}>{cat.title}</span>
        ))}
      </div>

      {/* AI Hero Section */}
      <div className="ai-hero">
        <div className="ai-content">
          <h1>Reimagine your career in the AI era</h1>
          <p>
            Future-proof your skills with Personal Plan. Get access to a variety
            of fresh content from real-world experts.
          </p>

          <div className="ai-features">
            <div className="feature">
              <span className="checkmark">✓</span>
              <span>Learn AI and more</span>
            </div>
            <div className="feature">
              <span className="checkmark">✓</span>
              <span>Prepare for a certification</span>
            </div>
            <div className="feature">
              <span className="checkmark">✓</span>
              <span>Practice with AI coaching</span>
            </div>
            <div className="feature">
              <span className="checkmark">✓</span>
              <span>Advance your career</span>
            </div>
          </div>

          <div className="ai-cta">
            <button className="learn-more-btn">Learn more</button>
            <div className="pricing">Starting at ₹9204.00/month</div>
          </div>
        </div>
      </div>

      {/* Main Courses Section */}
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

      {/* Learning Section */}
      <div className="learning-section">
        <div className="learning-content">
          <h2>Jump into learning — for less</h2>
          <p>
            If you're new to Udemy, we've got good news: For a limited time,
            courses start at just ₹958.99 for new learners!
          </p>
          <button className="signup-now-btn">Sign up now</button>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h2>Learn essential career and life skills</h2>
        <p>
          Udemy helps you build in-demand skills fast and advance your career in
          a changing job market.
        </p>

        <div className="skills-grid">
          <div className="skill-item">Generative AI</div>
          <div className="skill-item">Plans & Pricing</div>
          <div className="skill-item">Udemy Business</div>
          <div className="skill-item">Teach on Udemy</div>
          <div className="skill-item">IT Certifications</div>
          <div className="skill-item">Data Science</div>
        </div>
      </div>

      {/* Trusted Companies Section */}
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
