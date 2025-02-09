import React from 'react';
import projects from "./projects.json";
import "bootstrap/dist/css/bootstrap.min.css";

const ProjectList = () => {
    return (
        <div className="container my-5">
        <h2 className="text-center mb-4">My Projects</h2>
        <div className="row">
            {projects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
                <div className="card shadow-lg h-100">
                <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.name}
                />
                <div className="card-body">
                    <h4 className="card-title">{project.name}</h4>
                    <p className="card-text">{project.description}</p>
                    <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    View Project
                    </a>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
};

export default ProjectList;
