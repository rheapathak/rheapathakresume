// PurdueCourses.jsx
import React from 'react';
import './PurdueCourses.css';
import SplashCursor from './SplashCursor';

function PurdueCourses() {
  const semesters = [
    {
      term: 'Fall 2022',
      note: 'Started my First Year of Engineering',
      courses: [
        'ENGL 10600 – First-Year Composition',
        'ENGR 13300 – Trans Ideas To Innov EPICS',
        'EPCS 11100 – First Yr Participation EPICS I',
        'MA 16500 – Analytic Geometry & Calculus I',
        'PHYS 17200 – Modern Mechanics',
      ],
    },
    {
      term: 'Spring 2023',
      note: 'Continuation of FYE',
      courses: [
        'CHM 11500 – General Chemistry',
        'CS 15900 – C Programming',
        'EDPS 31500 – Collaborative Leadership: Interpersonal',
        'EPCS 12100 – First Yr Participation EPICS II',
        'MA 16600 – Analytic Geometry & Calculus II',
      ],
    },
    {
      term: 'Summer 2023',
      note: '',
      courses: [
        'ECE 20875 – Python for Data Science',
        'MA 26100 – Multivariate Calculus',
      ],
    },
    {
      term: 'Fall 2023',
      note: 'Medical leave, withdrew from all courses.',
      courses: [],
    },
    {
      term: 'Spring 2024',
      note: 'Only took two courses while recovering.',
      courses: [
        'MA 26500 – Linear Algebra',
        'SLHS 22700 – Elements of Linguistics',
      ],
    },
    {
      term: 'Fall 2024',
      note: 'Returned fully healthy and ready to take a normal course load.',
      courses: [
        'ECE 20001 – Electrical Engr Fundamentals I',
        'ECE 20007 – Electrical Engr Fundamentals I Lab',
        'ECE 36900 – Discrete Math for Comp Eng',
        'EDPS 31600 – Leadership: Cross-Cultural',
      ],
    },
    {
      term: 'Spring 2025',
      note: '',
      courses: [
        'ECE 20002 – Electrical Engr Fundamentals II',
        'ECE 26400 – Advanced C Programming',
        'ECE 27000 – Intro Digital Systems Design',
        'ECE 29401 – ECE Sophomore Seminar',
        'IE 33500 – Operations Research: Optimization',
        'MA 26600 – Ordinary Differential Equations',
      ],
    },
    {
      term: 'Summer 2025',
      note: '',
      courses: ['ECE 36800 – Data Structures'],
    },
    {
      term: 'Fall 2025',
      note: 'Current courses in progress.',
      courses: [
        'ECE 30100 – Signals and Systems',
        'ECE 30200 – Probabilistic Methods',
        'ECE 30864 – Software Engineering Tools',
        'ECE 39595 – Communication & Collaboration',
        'ECE 51220 – Applied Algorithms',
        'EDPS 31700 – Leadership: Mentoring',
      ],
    },
  ];

  return (
    <div className="timeline-container">
      <h1 className="timeline-title">Purdue University Coursework</h1>
      {semesters.map((sem, index) => (
        <div key={index} className="semester">
          <h2 className="semester-term">{sem.term}</h2>
          {sem.note && <p className="semester-note">{sem.note}</p>}
          {sem.courses.length > 0 ? (
            <ul className="course-list">
              {sem.courses.map((course, idx) => (
                <li key={idx}>{course}</li>
              ))}
            </ul>
          ) : (
            <p className="semester-note">No courses taken this semester.</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default PurdueCourses;
