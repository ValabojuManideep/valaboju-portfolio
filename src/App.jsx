import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import './App.css';

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Valaboju Manideep</h1>
        <p>Aspiring Software Engineer | Cloud Enthusiast</p>
        <div className="icons">
          <a href="mailto:valabojumanideep123@gmail.com"><FaEnvelope /></a>
          <a href="tel:+917075119809"><FaPhone /></a>
          <a href="https://linkedin.com/in/valaboju-manideep-6983752a0/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
      </header>

      <section>
        <h2>About Me</h2>
        <p>Seeking an entry-level engineering position to leverage my technical skills in software development, cloud technologies, and logical thinking, while continuously learning and adding value to the organization.</p>
        <p><strong>Languages:</strong> Telugu (Native), English (Highly Proficient), Hindi (Highly Proficient) </p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>Java, Python, SQL, C++, C</li>
          <li>Cloud Computing (AWS basics, Virtualization, SaaS/PaaS/IaaS)</li>
          <li>HTML, CSS, JavaScript, Django, React</li>
          <li>SQL, MongoDB, PowerBI, Excel</li>
          <li>Git, VS Code, DSA, OOPs</li>
          <li>Problem-solving, Logical Thinking, Teamwork</li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <h3>Cloud-Based Chat Application</h3>
        <p>Developed a real-time chat platform using WebSockets with instant synchronization.</p>
        <p><small>React, Node.js, Express, Socket.io, Vercel, Render</small></p>
      </section>

      <section>
        <h2>Experience</h2>
        <h3>Intern @ Eduskills Hyderabad (Apr 2024 – Jun 2024)</h3>
        <p>Worked on ML models using TensorFlow & Google Object Detection API in Android Studio for real-time visual search features.</p>
      </section>

      <section>
        <h2>Education</h2>
        <ul>
          <li><strong>B.Tech (CSE - Data Science)</strong> – Geethanjali College, CGPA: 8.49 (Expected 2026)</li>
          <li>MPC – Trividya Junior College (2020–2022) 98.1% </li>
          <li>SSC – Sai Siddhartha High School</li>
        </ul>
      </section>

      <section>
        <h2>Certifications</h2>
        <ul>
          <li>PCEP – Certified Entry-Level Python Programmer</li>
          <li>AWS Certified Cloud Practitioner</li>
          <li>Java Fundamentals – Oracle Academy</li>
          <li>ML with Java – Oracle Academy</li>
          <li>SQL Basic & Intermediate – HackerRank</li>
        </ul>
      </section>

      <footer>
        © 2025 Valaboju Manideep. All rights reserved.
      </footer>
    </div>
  );
}
