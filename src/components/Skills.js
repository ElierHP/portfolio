import React from "react"
import { AiFillHtml5 } from "react-icons/ai"
import { DiCss3 } from "react-icons/di"
import { FaReact } from "react-icons/fa"
import { RiGatsbyFill } from "react-icons/ri"
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io"
import { DiRubyRough, DiSass } from "react-icons/di"
import {
  SiNextdotjs,
  SiMaterialui,
  SiMongodb,
  SiRubyonrails,
  SiPostgresql,
} from "react-icons/si"
import "aos/dist/aos.css"
import "../css/components/skills.scss"

export default function Skills() {
  return (
    <div className="skills_container">
      <h3 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
        Skills
      </h3>

      {/* Frontend Icons */}
      <div className="skills_icon-container">
        <div
          className="skills_icon-button"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <p className="skills_icon-title">html5</p>
          <AiFillHtml5 />
        </div>
        <div
          className="skills_icon-button"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          <p className="skills_icon-title">css3</p>
          <DiCss3 />
        </div>
        <div
          className="skills_icon-button"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <p className="skills_icon-title">sass</p>
          <DiSass />
        </div>
        <div
          className="skills_icon-button"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="350"
        >
          <p className="skills_icon-title">javascript</p>
          <IoLogoJavascript />
        </div>
        <div
          className="skills_icon-button"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <p className="skills_icon-title">react</p>
          <FaReact />
        </div>

        <div
          className="skills_icon-button"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="450"
        >
          <p className="skills_icon-title">next.js</p>
          <SiNextdotjs />
        </div>
        <div
          className="skills_icon-button"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <p className="skills_icon-title">gatsby</p>
          <RiGatsbyFill />
        </div>
        <div
          className="skills_icon-button"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="550"
        >
          <p className="skills_icon-title">mui</p>
          <SiMaterialui />
        </div>
      </div>

      {/* Backend Icons */}
      <div className="skills_icon-container mt-1-5">
        <div
          className="skills_icon-button"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <p className="skills_icon-title">node.js</p>
          <IoLogoNodejs />
        </div>
        <div
          className="skills_icon-button"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          <p className="skills_icon-title">ruby</p>
          <DiRubyRough />
        </div>
        <div
          className="skills_icon-button"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <p className="skills_icon-title">rails</p>
          <SiRubyonrails />
        </div>

        <div
          className="skills_icon-button"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="350"
        >
          <p className="skills_icon-title">mongodb</p>
          <SiMongodb />
        </div>
        <div
          className="skills_icon-button"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <p className="skills_icon-title">postgresql</p>
          <SiPostgresql />
        </div>
      </div>
    </div>
  )
}
