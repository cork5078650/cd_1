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

        stage('Check if Dockerfile Exists') {
            steps {
                script {
                    def dockerFileExists = fileExists 'docker/Dockerfile'
                    if (!dockerFileExists) {
                        echo "docker/Dockerfile not found. Looking for Dockerfile in the root directory."
                        dockerFileExists = fileExists 'Dockerfile'
                    }

                    if (dockerFileExists) {
                        echo "Dockerfile found, proceeding with build."
                    } else {
                        error "No Dockerfile found in the expected directories!"
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    def dockerFilePath = 'docker/Dockerfile'
                    // Checking if Dockerfile exists in the specified folder
                    if (!fileExists(dockerFilePath)) {
                        dockerFilePath = 'Dockerfile'  // fallback to root Dockerfile
                    }

                    // If Dockerfile path is still not valid, throw an error
                    if (!fileExists(dockerFilePath)) {
                        error "No Dockerfile found in the expected directories!"
                    }

                    echo "Building Docker image using Dockerfile at ${dockerFilePath}"
                    // Build the docker image using the correct Dockerfile path
                    sh "docker build -t my-static-website -f ${dockerFilePath} ."
                }
            }
        }

        stage('List Files After Docker Build') {
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
