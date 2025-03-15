console.log("JavaScript file is loaded and running!");

document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        { 
            name: "Personal Portfolio Website", 
            skills: ["HTML", "CSS", "JavaScript"],
            description: "A responsive portfolio showcasing your work, skills, and experience."
        },
        { 
            name: "To-Do List App", 
            skills: ["HTML", "CSS", "JavaScript"],
            description: "A simple app to add, edit, and delete daily tasks with local storage."
        },
        { 
            name: "Weather App", 
            skills: ["JavaScript", "API"],
            description: "Fetches real-time weather data from an API and displays forecasts."
        },
        { 
            name: "E-Commerce Site", 
            skills: ["HTML", "CSS", "JavaScript", "React"],
            description: "A small online shopping site with product listings and cart functionality."
        },
        { 
            name: "Blog Website", 
            skills: ["HTML", "CSS", "JavaScript", "Node.js"],
            description: "A full-stack blog platform where users can create and comment on articles."
        },
        { 
            name: "Chat Application", 
            skills: ["JavaScript", "Node.js", "WebSockets"],
            description: "A real-time messaging app where users can send instant messages."
        },
        { 
            name: "Machine Learning Model", 
            skills: ["Python", "Machine Learning"],
            description: "A basic ML model that predicts outcomes based on input data."
        },
        { 
            name: "Budget Tracker", 
            skills: ["JavaScript", "React"],
            description: "An app to track daily expenses and visualize spending habits."
        },
        { 
            name: "Online Quiz Platform", 
            skills: ["JavaScript", "React", "Node.js"],
            description: "A platform where users can take and create quizzes with scores."
        },
        { 
            name: "Employee Management System", 
            skills: ["SQL", "Python", "Flask"],
            description: "A system to manage employee records, including salaries, roles, and departments."
        },
        { 
            name: "Library Management System", 
            skills: ["SQL", "Java", "Spring Boot"],
            description: "A database-driven application to track book loans, returns, and availability."
        },
        { 
            name: "Customer Relationship Management (CRM) Tool", 
            skills: ["SQL", "React", "Node.js"],
            description: "A system for businesses to track customer interactions and manage sales pipelines."
        },
        { 
            name: "Stock Price Prediction", 
            skills: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
            description: "An ML model that predicts stock prices based on historical data."
        },
        { 
            name: "Spam Email Classifier", 
            skills: ["Python", "Machine Learning", "Natural Language Processing"],
            description: "A model that classifies emails as spam or not using NLP techniques."
        },
        { 
            name: "Movie Recommendation System", 
            skills: ["Python", "Machine Learning", "Pandas", "Collaborative Filtering"],
            description: "A recommendation engine that suggests movies based on user preferences."
        },
        { 
            name: "Online Examination System", 
            skills: ["SQL", "PHP", "Bootstrap"],
            description: "A web-based system where students can take exams and receive results instantly."
        },
        { 
            name: "Real-Time Sentiment Analysis", 
            skills: ["Python", "Machine Learning", "NLP"],
            description: "A system that analyzes the sentiment of live tweets or user reviews."
        }
    ];
    
    

    const findProjectsButton = document.getElementById("recommend-btn"); // Fix the ID
    if (findProjectsButton) {
        findProjectsButton.addEventListener("click", findProjects);
    }

    function findProjects() {
        const selectedSkills = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .map(input => input.value);

        const filteredProjects = projects.filter(project =>
            selectedSkills.every(skill => project.skills.includes(skill))
        );

        displayProjects(filteredProjects);
    }

    function displayProjects(filteredProjects) {
        const projectList = document.getElementById("projects-list");
        projectList.innerHTML = "";
    
        if (filteredProjects.length === 0) {
            projectList.innerHTML = "<p>No projects match your skills. Try selecting more skills.</p>";
            return;
        }
    
        filteredProjects.forEach(project => {
            const projectCard = document.createElement("div");
            projectCard.classList.add("project-card"); // Add a class for styling
    
            projectCard.innerHTML = `
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <p><strong>Required Skills:</strong> ${project.skills.join(", ")}</p>
            `;
    
            projectList.appendChild(projectCard);
        });
    }
    
});
