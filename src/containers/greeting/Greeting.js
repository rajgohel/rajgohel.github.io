import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {illustration, greeting, skillsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <Button
                    text="See my resume"
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                )}
              </div>
            </div>
          </div>
          {/* <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} /> */}
              <div className="skills-text-div">
                <h1
                  className={
                    isDark ? "dark-mode skills-heading" : "skills-heading"
                  }
                >
                  {skillsSection.title}{" "}
                </h1>
                <p
                  className={
                    isDark
                      ? "dark-mode subTitle skills-text-subtitle"
                      : "subTitle skills-text-subtitle"
                  }
                >
                  {skillsSection.subTitle}
                </p>
                <SoftwareSkill />
                <div>
                  {skillsSection.skills.map((skills, i) => {
                    return (
                      <p
                        key={i}
                        className={
                          isDark
                            ? "dark-mode subTitle skills-text"
                            : "subTitle skills-text"
                        }
                      >
                        {skills}
                      </p>
                    );
                  })}
                </div>
              </div>
            {/* ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div> */}
        </div>
      </div>
    </Fade>
  );
}
