import React, { useEffect, useContext } from 'react';
import User from '../img/user.svg';
import ScrollArrow from '../img/scroll-arrow.svg';
import Python from '../img/python.svg';
import Php from '../img/php.svg';
import Django from '../img/django.svg';
import Js from '../img/js.svg';
import Css from '../img/css.svg';
import Aws from '../img/aws.svg';
import Html from '../img/html.svg';
import Line from '../img/line.svg';
import {NavLink} from "react-router-dom";
import ProjectContext from "../../context/project/projectContext";

const Home = (props) => {
  const projectContext = useContext(ProjectContext);

  const { projects, getProjects } = projectContext;

  useEffect(() => {
    getProjects();

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();
    // eslint-disable-next-line
  }, [])

  const openCity = (e, cityName) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    /*let tabhead = document.getElementById(cityName);*/
    /*console.log(tabhead);*/
    document.getElementById(cityName).style.display = "grid";
    e.currentTarget.className += " active";
    /*console.log(cityName);*/
  }

  return (
    <main>
      <div className="text-center my-5">
        <img src={User} alt="user" className="mb-5"/>
        <p className="text-intro">Hello there, my name is <br/> Nifemi Bamgbose. <br/> I’m a Backend Developer.</p>
        <p className="text-about pt-3">I love connecting brands and companies with their customers <br/> through good
          design, I can help you with logo, design.</p>
        <div className="pt-7">
          <a href="#projects">
            <p className="text-reverse">scroll</p>
            <img src={ScrollArrow} alt=""/>
          </a>
        </div>
      </div>

      <div id="projects" className="bg-showcase">
        <div className="d-flex flex-row flex-wrap justify-content-around align-self-center px-5 pt-7 pb-6">
          <img src={Python} alt="python" className="img-fluid align-self-start"/>
          <img src={Php} alt="php" className="img-fluid"/>
          <img src={Django} alt="django" className="img-fluid" style={{filter: 'grayscale(100%)'}}/>
          <img src={Js} alt="javascript" className="img-fluid"/>
          <img src={Css} alt="css" className="img-fluid"/>
          <img src={Aws} alt="aws" className="img-fluid" style={{filter: 'grayscale(100%)'}}/>
          <img src={Html} alt="html" className="img-fluid"/>
        </div>
        <div className="py-5">
          <p className="text-capitalize text-center text-works mb-5">my works</p>
          <div className="container tab d-flex justify-content-md-around overflow-auto mt-5 example">
            <img src={Line} alt="line"/>
            <div id="defaultOpen" className="text-uppercase tablinks text-tab-head px-2" onClick={(e) => openCity(e,'python')}>python</div>
            <div className="text-uppercase tablinks text-tab-head px-2" onClick={(e) =>openCity(e,'php')}>php</div>
            <div className="text-uppercase tablinks text-tab-head px-2" onClick={(e) =>openCity(e,'javascript')}>javascript</div>
            <div className="text-uppercase tablinks text-tab-head px-2" onClick={(e) =>openCity(e,'django')}>django</div>
            <div className="text-uppercase tablinks text-tab-head px-2" onClick={(e) =>openCity(e,'flask')}>flask</div>
            <div className="text-uppercase tablinks text-tab-head px-2" onClick={(e) =>openCity(e,'css')}>css</div>
            <div className="text-uppercase tablinks text-tab-head px-2" onClick={(e) =>openCity(e,'aws')}>aws</div>
            <div className="text-uppercase tablinks text-tab-head px-2" onClick={(e) =>openCity(e,'html')}>html</div>
            <div className="text-uppercase tablinks text-tab-head px-2" onClick={(e) =>openCity(e,'gcp')}>gcp</div>
            <img src={Line} alt="line"/>
          </div>
          {/*  tab content */}
          <div className="mt-7">
            <div id='python' className="tabcontent container grid-box">
              {projects.map((project, index) => project.projectType === 'python' &&
                (
                  <div className="card shadow p-3 col" key={index}>
                    <h3 className="text-uppercase mb-5 text-title">title: <br/> {project.projectName}</h3>
                    <div className="mt-5">
                      <h5 className="text-description text-capitalize">project description</h5>
                      <p className="text-desc">{project.projectDescription} </p>
                    </div>
                  </div>
                ))
              }
            </div>
            <div id='php' className="tabcontent container grid-box">
              {projects.map((project, index) => project.projectType === 'php' &&
                (
                  <div className="card shadow p-3 col" key={index}>
                    <h3 className="text-uppercase mb-5 text-title">title: <br/> {project.projectName}</h3>
                    <div className="mt-5">
                      <h5 className="text-description text-capitalize">project description</h5>
                      <p className="text-desc">{project.projectDescription} </p>
                    </div>
                  </div>
                ))
              }
            </div>
            <div id="javascript" className="tabcontent container grid-box">
              {projects.map((project, index) => project.projectType === 'javascript' &&
                (
                  <div className="card shadow p-3 col" key={index}>
                    <h3 className="text-uppercase mb-5 text-title">title: <br/> {project.projectName}</h3>
                    <div className="mt-5">
                      <h5 className="text-description text-capitalize">project description</h5>
                      <p className="text-desc">{project.projectDescription} </p>
                    </div>
                  </div>
                ))
              }
            </div>
            <div id="django" className="tabcontent container grid-box">
              {projects.map((project, index) => project.projectType === 'django' &&
                (
                  <div className="card shadow p-3 col" key={index}>
                    <h3 className="text-uppercase mb-5 text-title">title: <br/> {project.projectName}</h3>
                    <div className="mt-5">
                      <h5 className="text-description text-capitalize">project description</h5>
                      <p className="text-desc">{project.projectDescription} </p>
                    </div>
                  </div>
                ))
              }
            </div>
            <div id="flask" className="tabcontent container grid-box">
              {projects.map((project, index) => project.projectType === 'flask' &&
                (
                  <div className="card shadow p-3 col" key={index}>
                    <h3 className="text-uppercase mb-5 text-title">title: <br/> {project.projectName}</h3>
                    <div className="mt-5">
                      <h5 className="text-description text-capitalize">project description</h5>
                      <p className="text-desc">{project.projectDescription} </p>
                    </div>
                  </div>
                ))
              }
            </div>
            <div id="css" className="tabcontent container grid-box">
              {projects.map((project, index) => project.projectType === 'css' &&
                (
                  <div className="card shadow p-3 col" key={index}>
                    <h3 className="text-uppercase mb-5 text-title">title: <br/> {project.projectName}</h3>
                    <div className="mt-5">
                      <h5 className="text-description text-capitalize">project description</h5>
                      <p className="text-desc">{project.projectDescription} </p>
                    </div>
                  </div>
                ))
              }
            </div>
            <div id="aws" className="tabcontent container grid-box">
              {projects.map((project, index) => project.projectType === 'aws' &&
                (
                  <div className="card shadow p-3 col" key={index}>
                    <h3 className="text-uppercase mb-5 text-title">title: <br/> {project.projectName}</h3>
                    <div className="mt-5">
                      <h5 className="text-description text-capitalize">project description</h5>
                      <p className="text-desc">{project.projectDescription} </p>
                    </div>
                  </div>
                ))
              }
            </div>
            <div id="html" className="tabcontent container grid-box">
              {projects.map((project, index) => project.projectType === 'html' &&
                (
                  <div className="card shadow p-3 col" key={index}>
                    <h3 className="text-uppercase mb-5 text-title">title: <br/> {project.projectName}</h3>
                    <div className="mt-5">
                      <h5 className="text-description text-capitalize">project description</h5>
                      <p className="text-desc">{project.projectDescription} </p>
                    </div>
                  </div>
                ))
              }
            </div>
            <div id="gcp" className="tabcontent container grid-box">
              {projects.map((project, index) => project.projectType === 'gcp' &&
                (
                  <div className="card shadow p-3 col" key={index}>
                    <h3 className="text-uppercase mb-5 text-title">title: <br/> {project.projectName}</h3>
                    <div className="mt-5">
                      <h5 className="text-description text-capitalize">project description</h5>
                      <p className="text-desc">{project.projectDescription} </p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="text-center py-8">
          <NavLink to="/project" className="btn btn-user text-center bg-black text-white p-6 text-capitalize">view
            all</NavLink>
        </div>
      </div>
    </main>
  );
};

export default Home;
