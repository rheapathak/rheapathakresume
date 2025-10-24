import React from 'react';
import SplitText from './SplitText';

function Resume() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <div
      style={{
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: '40px',
        borderRadius: '15px',
        minHeight: '100vh',
        boxSizing: 'border-box',
        color: 'white',
        fontFamily: 'sans-serif',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '10px', textAlign: 'center' }}>
        <SplitText
          text="Rhea Pathak"
          delay={100}
          duration={0.6}
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </h1>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>
        (614)-929-8629 | pathak20@purdue.edu |{' '}
        <a
          href="https://www.linkedin.com/in/rhea-pathak1/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#FFD700' }}
        >
          LinkedIn
        </a>
      </p>

      {/* Education */}
      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ borderBottom: '1px solid #FFD700', paddingBottom: '5px' }}>Education</h2>
        <p>
          <strong>Purdue University, West Lafayette, IN</strong> — B.S. in Computer Engineering
          <br />
          Concentrations: AI/ML and Software Engineering
          <br />
          Certificate: Collaborative Leadership
          <br />
          Relevant Coursework: Applied Algorithms, Data Structures, Advanced C Programming, Digital System Design, Signals and Systems, Probabilistic Methods, Optimization Research
          <br />
          Dates: August 2022 – Present
          <br />
          Activities: Women in Electrical and Computer Engineering (WECE) Director of Outreach, Media, and Marketing; EPICS
        </p>

        <p>
          <strong>Upper Arlington High School, Upper Arlington, OH</strong>
          <br />
          Honors Diplomas: High School Honors Diploma, International Baccalaureate Diploma
          <br />
          GPA: 4.28/4.0 (3.95 Unweighted), Summa Cum Laude
          <br />
          Dates: August 2018 – May 2022
        </p>
      </section>

      {/* Technical Skills */}
      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ borderBottom: '1px solid #FFD700', paddingBottom: '5px' }}>Technical Skills</h2>
        <p>
          <strong>Programming Languages & Tools:</strong> C++, Java, C, Python, JavaScript, HTML/CSS, C#, SystemVerilog, SQL
          <br />
          <strong>Data & Cloud:</strong> AWS Machine Learning, Azure, PowerBI, Microsoft Fabric, Databases, OSIsoft PI, Aveva Pi System, Azure SQL
          <br />
          <strong>Software Development:</strong> Git, Scrum, Agile, Kanban, TDD, DevOps, React.js, Angular, Kubernetes, Flask, Node.js, Docker, Jira, Rest APIs
          <br />
          <strong>Embedded Systems & Hardware:</strong> Altium, Fusion360, Arduino, Raspberry Pi, KiCad, Microcontrollers, PCB Design
          <br />
          <strong>Industrial Systems:</strong> Ignition Systems, SCADA, HMIS
        </p>
      </section>

      {/* Experience */}
      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ borderBottom: '1px solid #FFD700', paddingBottom: '5px' }}>Experience</h2>
        <p>
          <strong>Flexware Innovation | Systems Integration Intern | Indianapolis, IN</strong>
          <br />
          Designed, developed, and implemented a time-series machine PLC data pipeline for dynamic data visualization.
          <br />
          Technologies: Ignition, C#, Python, Aveva Pi System, Azure SQL, Microsoft Fabric, PowerBI
          <br />
          Volunteered at Shepherd Community Center of Indianapolis
          <br />
          Dates: May 2025 – August 2025
        </p>

        <p>
          <strong>Ohio Manufacturing Innovation Center (OMIC) | Computer Engineering Intern | Hilliard, OH</strong>
          <br />
          Developed an embedded systems robotics project in C# for robotic boat pollution monitoring
          <br />
          Designed PCB schematics using Altium; soldered components; trained on pick & place machines
          <br />
          Mentored high school students in Raspberry Pi programming
          <br />
          Dates: May 2024 – August 2024
        </p>

        <p>
          <strong>EPICS | Software Leader & Project Partner Liaison | Purdue University</strong>
          <br />
          Coded a specialized tuner for visually impaired students; implemented Fourier transformation-based filtering algorithms
          <br />
          Dates: August 2022 – May 2023
        </p>

        <p>
          <strong>Arlington Consulting Group | Founder | Columbus, OH</strong>
          <br />
          Founded consulting company; delivered App Development, Marketing, SEO projects
          <br />
          Led interns and weekly project meetings
          <br />
          Dates: January 2022 – March 2022
        </p>

        <p>
          <strong>CoolTechGirls | Mentor & Communications Lead | Columbus, OH</strong>
          <br />
          Managed communications and mentored middle school girls in techno-fashion projects
          <br />
          Dates: February 2022 – May 2023
        </p>
      </section>

      {/* Additional Info */}
      <section>
        <h2 style={{ borderBottom: '1px solid #FFD700', paddingBottom: '5px' }}>Additional Information</h2>
        <p>
          Languages: English (Native), Marathi (Proficient), French (Fluent—Global Language Scholar Award in 2022)
          <br />
          Interests: Software Engineering, AI/ML, Embedded Systems, Robotics, Microcontrollers, PCB design, Entrepreneurship, Data Engineering & Analytics
        </p>
      </section>
    </div>
  );
}

export default Resume;
