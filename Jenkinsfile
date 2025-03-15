pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/cork5078650/cd_1.git'
            }
        }
        
        stage('List Files Before Docker Build') {
            steps {
                sh 'ls -alh'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t my-static-website -f docker/Dockerfile .'
            }
        }

        stage('List Files') {
            steps {
                sh 'ls -alh'
            }
        }

        stage('Check Docker Version') {
            steps {
                sh 'docker --version'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 8080:80 --name static-site my-static-website'
            }
        }
    }
}
