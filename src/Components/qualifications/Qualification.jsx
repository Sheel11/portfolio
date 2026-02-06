import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaPaintBrush,
  FaCalendarAlt,
} from "react-icons/fa";
import "./qualification.css";

const data = {
  experience: [
    {
      id: 1,
      category: "job",
      date: "2023 - Present",
      title: "Freelancing",
      org: "CodeByPriyanshu.in (Remote)",
      desc: "Delivering scalable web services integrated with custom machine learning solutions.",
    },
    {
      id: 2,
      category: "Intern",
      date: "2023 - 2024",
      title: "SDE Intern",
      org: "Indian Oil Cooperation Limited",
      desc: "Engineered a full-stack GPS tracking platform using MERN Stack and performed data analytics using Python libraries",
    },
    {
      id: 3,
      category: "job",
      date: "2023 - 2025",
      title: "Hackathon Winner & Finalist",
      org: "National & Institutional Level",
      desc: "Winner of Smart India Hackathon 2023. Secured top ranks in IIST Internal, Codekshera, and Prayatana 2.0 hackathons.",
    },
  ],
  education: [
    {
      id: 1,
      category: "education",
      date: "2025 - 2027",
      title: "M.Tech in Information Technology",
      desc: "Pursuing Master of Technology with a current CGPA of 8.8.",
    },
    {
      id: 2,
      category: "education",
      date: "2021 - 2025",
      title: "B.Tech in Computer Science",
      desc: "Graduated with 8.16 CGPA.",
    },
    {
      id: 3,
      category: "education",
      date: "2020 - 2021",
      title: "Senior Secondary (12th)",
      desc: "Completed Higher Secondary education specializing in Science & Mathematics.",
    },
  ],
};

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("education");

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="section qualification" id="qualification">
      <div className="container">
        {/* Header */}
        <div className="section__header">
          <h2 className="section__title">Qualification</h2>
          <span className="section__subtitle">My personal journey</span>
        </div>

        {/* Tab Switcher */}
        <div className="qualification__tabs">
          <div
            className={`qualification__button button--flex ${activeTab === "experience" ? "qualification__active" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            {/* <FaBriefcase className="qualification__icon" /> */}
            
          </div>
          <div
            className={`qualification__button button--flex ${activeTab === "Education" ? "qualification__active" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            <FaCode className="qualification__icon" />
            Education
          </div>
        </div>

        {/* Dynamic Content Area */}
        <div className="qualification__container">
          <AnimatePresence mode="wait">
            {/* Experience View */}
            {activeTab === "experience" && (
              <motion.div
                key="experience"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20 }}
                className="qualification__content"
              >
                {data.experience.map((item) => (
                  <motion.div
                    variants={itemVariants}
                    key={item.id}
                    className="qualification__card"
                  >
                    <div className="qualification__card-header">
                      <div className="qualification__icon-box">
                        {item.category === "education" ? (
                          <FaGraduationCap />
                        ) : (
                          <FaBriefcase />
                        )}
                      </div>
                      <span className="qualification__date">
                        <FaCalendarAlt style={{ marginRight: "0.3rem" }} />{" "}
                        {item.date}
                      </span>
                    </div>
                    <h3 className="qualification__card-title">{}</h3>
                    <h4 className="qualification__card-subtitle">{}</h4>
                    <p className="qualification__card-desc">{}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Education View */}
            {activeTab === "education" && (
              <motion.div
                key="education"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20 }}
                className="qualification__content"
              >
                {data.education.map((item) => (
                  <motion.div
                    variants={itemVariants}
                    key={item.id}
                    className="qualification__card"
                  >
                    <div className="qualification__card-header">
                      <div className="qualification__icon-box">
                        {item.category === "education" ? (
                          <FaGraduationCap />
                        ) : (
                          <FaBriefcase />
                        )}
                      </div>
                      <span className="qualification__date">
                        <FaCalendarAlt style={{ marginRight: "0.3rem" }} />{" "}
                        {item.date}
                      </span>
                    </div>
                    <h3 className="qualification__card-title">{item.title}</h3>
                    <h4 className="qualification__card-subtitle">{item.org}</h4>
                    <p className="qualification__card-desc">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
