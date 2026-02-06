import React, { useState } from "react";
import {
  projectsData,
} from "./Data";
import "./PortfolioCard.css";

const PortfolioCard = () => {
  const [activeCategory, setActiveCategory] = useState("Projects");
  const [visibleItems, setVisibleItems] = useState(6);
  const [activeModal, setActiveModal] = useState(null);

  // Combine all data with their categories
  const allData = [
    ...projectsData.map((item) => ({ ...item, dataType: "projects" })),
  ];

  const toggleModal = (id, dataType) => {
    const cardKey = `${dataType}-${id}`;
    setActiveModal(activeModal === cardKey ? null : cardKey);
  };

  const filteredData =
    activeCategory === "All"
      ? allData
      : allData.filter(
          (item) =>
            item.dataType === activeCategory.toLowerCase() ||
            (activeCategory === "Research" && item.dataType === "research") ||
            (activeCategory === "Problem Solving" &&
              item.dataType === "problemSolving")
        );

  const loadMore = () => setVisibleItems((prev) => prev + 6);

  const renderModalContent = (item) => {
    switch (item.dataType) {
      case "projects":
        return (
          <>
            <div className="portfolio__modal-actions">
              {item.githubLink && (
                <a
                  href={item.githubLink}
                  className="portfolio__modal-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="uil uil-github"></i> View Code
                </a>
              )}
              {item.deploymentLink && (
                <a
                  href={item.deploymentLink}
                  className="portfolio__modal-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="uil uil-external-link-alt"></i> Live Demo
                </a>
              )}
            </div>
          </>
        );

      case "hackathons":
        return (
          <>
            <div className="portfolio__modal-details">
              <div className="detail-row">
                <span className="detail-label">Title :</span>
                <span className="detail-value">{item.title}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Position:</span>
                <span className="detail-value">{item.position}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Key Learnings:</span>
                <span className="detail-value">{item.keyLearning}</span>
              </div>
            </div>
          </>
        );

      case "certificates":
        return (
          <>
            <div className="portfolio__modal-details">
              <div className="detail-row">
                <span className="detail-label">Key Learnings:</span>
                <span className="detail-value">{item.keyLearning}</span>
              </div>
            </div>
            <div className="portfolio__modal-actions">
              <a
                href={item.pdfLink}
                className="portfolio__modal-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="uil uil-file-download"></i> View Certificate
              </a>
            </div>
          </>
        );

      case "research":
        return (
          <>
            <div className="portfolio__modal-details">
              <div className="detail-row">
                <span className="detail-label">Published In:</span>
                <span className="detail-value">{item.publishedIn}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Key Research:</span>
                <span className="detail-value">{item.keyResearch}</span>
              </div>
            </div>
            <div className="portfolio__modal-actions">
              <a
                href={item.paperLink}
                className="portfolio__modal-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="uil uil-book-open"></i> Read Paper
              </a>
            </div>
          </>
        );

      case "problemSolving":
        return (
          <div className="problem-solving-container">
            <div className="stats-container">
              <h4 className="stats-title">My Coding Stats</h4>
              <div className="stats-grid">
                {item.stats.leetcodeSolved && (
                  <div className="stat-card leetcode">
                    <div className="stat-icon">
                      <i className="uil uil-star"></i>
                    </div>
                    <div className="stat-content">
                      <span className="stat-platform">LeetCode</span>
                      <span className="stat-value">
                        {item.stats.leetcodeSolved}
                      </span>
                      <span className="stat-label">Problems Solved</span>
                    </div>
                  </div>
                )}

                {item.stats.gfgScore && (
                  <div className="stat-card gfg">
                    <div className="stat-icon">
                      <i className="uil uil-award"></i>
                    </div>
                    <div className="stat-content">
                      <span className="stat-platform">GeeksforGeeks</span>
                      <span className="stat-value">{item.stats.gfgScore}</span>
                      <span className="stat-label">Coding Score</span>
                    </div>
                  </div>
                )}

                {item.stats.codeforcesRating && (
                  <div className="stat-card codeforces">
                    <div className="stat-icon">
                      <i className="uil uil-chart-line"></i>
                    </div>
                    <div className="stat-content">
                      <span className="stat-platform">Codeforces</span>
                      <span className="stat-value">
                        {item.stats.codeforcesRating}
                      </span>
                      <span className="stat-label">Rating</span>
                    </div>
                  </div>
                )}

                {item.stats.codechefStars && (
                  <div className="stat-card codechef">
                    <div className="stat-icon">
                      <i className="uil uil-medal"></i>
                    </div>
                    <div className="stat-content">
                      <span className="stat-platform">CodeChef</span>
                      <span className="stat-value">
                        {item.stats.codechefStars}
                      </span>
                      <span className="stat-label">Stars</span>
                    </div>
                  </div>
                )}

                {item.stats.repos && (
                  <div className="stat-card github">
                    <div className="stat-icon">
                      <i className="uil uil-github"></i>
                    </div>
                    <div className="stat-content">
                      <span className="stat-platform">GitHub</span>
                      <span className="stat-value">{item.stats.repos}</span>
                      <span className="stat-label">Repositories</span>
                    </div>
                  </div>
                )}

                {item.stats.contributions && (
                  <div className="stat-card github">
                    <div className="stat-icon">
                      <i className="uil uil-github-alt"></i>
                    </div>
                    <div className="stat-content">
                      <span className="stat-platform">GitHub</span>
                      <span className="stat-value">
                        {item.stats.contributions}
                      </span>
                      <span className="stat-label">Contributions</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="platforms-container">
              <h4 className="platforms-title">Visit My Profiles</h4>
              <div className="platform-buttons">
                {Object.entries(item.platformLinks).map(([platform, link]) => (
                  <a
                    key={platform}
                    href={link}
                    className={`platform-button ${platform}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className={`uil ${
                        platform === "leetcode"
                          ? "uil-star"
                          : platform === "gfg"
                          ? "uil-award"
                          : platform === "codeforces"
                          ? "uil-chart-line"
                          : platform === "codechef"
                          ? "uil-medal"
                          : platform === "github"
                          ? "uil-github"
                          : "uil-link"
                      }`}
                    ></i>
                    <span>
                      {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </span>
                    <i className="uil uil-external-link-alt"></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="portfolio-container" id="portfolio">
      <h2 className="portfolio-heading">My Portfolio</h2>
      <p className="portfolio-subheading">
        Explore my projects
      </p>

      <div className="filter-buttons">
        {[
          "Projects",
        ].map((category) => (
          <button
            key={category}
            className={activeCategory === category ? "active" : ""}
            onClick={() => {
              setActiveCategory(category);
              setVisibleItems(6);
              setActiveModal(null);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="cards-grid">
        {filteredData.slice(0, visibleItems).map((item) => {
          const cardKey = `${item.dataType}-${item.id}`;
          const isModalActive = activeModal === cardKey;

          return (
            <React.Fragment key={cardKey}>
              <div className="portfolio__content">
                <div>
                  <div className="portfolio__image-container">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="portfolio__image"
                    />
                  </div>
                  <h3 className="portfolio__title">
                    {item.title} <br />{" "}
                  </h3>
                  <p className="portfolio__description">{item.description}</p>
                </div>

                <span
                  className="portfolio__button"
                  onClick={() => toggleModal(item.id, item.dataType)}
                >
                  View More{" "}
                  <i className="uil uil-arrow-right portfolio__button-icon"></i>
                </span>

                <div
                  className={`portfolio__modal ${
                    isModalActive ? "active-modal" : ""
                  }`}
                >
                  <div className="portfolio__modal-content">
                    <i
                      className="uil uil-times portfolio__modal-close"
                      onClick={() => setActiveModal(null)}
                    ></i>

                    <h3 className="portfolio__modal-title">{item.title}</h3>

                    <div className="portfolio__modal-image-container">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="portfolio__modal-image"
                      />
                    </div>

                    <p className="portfolio__modal-description">
                      {item.description}
                    </p>

                    {renderModalContent(item)}
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {visibleItems < filteredData.length && (
        <button className="load-more" onClick={loadMore}>
          Load More <i className="uil uil-arrow-down"></i>
        </button>
      )}
    </div>
  );
};

export default PortfolioCard;
