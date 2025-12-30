import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaSass,
  FaGit,
  FaGithub,
  FaReact,
  FaCss3,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiFigma,
} from 'react-icons/si';
import './skills.css';

import { useInView } from '../hooks/useInView';

import { FcSmartphoneTablet } from 'react-icons/fc';
import { FcOrgUnit } from 'react-icons/fc';
import { FcIdea } from 'react-icons/fc';
import { FcDatabase } from 'react-icons/fc';
const skills = [
  { icon: <FaReact color="#61DAFB" />, name: 'React' },
  { icon: <SiNodedotjs color="#339933" />, name: 'Node Js' },
  { icon: <SiJavascript color="#F7DF1E" />, name: 'JavaScript' },
  { icon: <SiMysql color="#4479A1" />, name: 'MySQL' },
  { icon: <SiExpress color="#000000" />, name: 'Express' },
  { icon: <FaHtml5 color="#E34F26" />, name: 'HTML5' },
  { icon: <SiJavascript color="#F7DF1E" />, name: 'ES6' },
  { icon: <SiTypescript color="#3178C6" />, name: 'TypeScript' },
  { icon: <FcOrgUnit color="#1572B6" />, name: 'Flexbox' },
  { icon: <FaGit color="#F05032" />, name: 'Git/GitHub' },
  { icon: <FaSass color="#CC6699" />, name: 'SASS' },
  { icon: <FaBootstrap color="#7D2AE8" />, name: 'Bootstrap' },
  { icon: <FaCss3 color="#1572B6" />, name: 'CSS3' },
  { icon: <FcDatabase color="#1572B6" />, name: 'Grid' },
  { icon: <FcSmartphoneTablet color="#1572B6" />, name: 'Responsive' },
  { icon: <SiFigma color="#F24E1E" />, name: 'Figma' },
  { icon: <span style={{ fontSize: '2rem' }}>🌀</span>, name: 'Agile/SCRUM' },
];

export const Skills = () => {
  const [sectionRef, inView] = useInView({ threshold: 0.15, once: true });

  return (
    <section
      className="section-skills  text-center d-flex flex-column py-4"
      id="skills"
      ref={sectionRef}
    >
      <h3 className=" mt-5">Skills</h3>
      <div className="linea-lateral-rosa"></div>
      <div className="container">
        <Row className="mt-4 justify-content-center align-items-center">
          {skills.map((skill, index) => (
            <Col
              key={index}
              xs={6}
              sm={4}
              md={3}
              lg={2}
              className={`mb-4 d-flex flex-column justify-content-center align-items-center skill-item ${
                inView ? 'in-view' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div style={{ fontSize: '2rem' }}>{skill.icon}</div>
              <span className="mt-2">{skill.name}</span>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};
