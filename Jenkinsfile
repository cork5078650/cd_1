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
                // This will list all files in the current directory (workspace)
                sh 'echo "Listing files in the workspace before Docker build:"'
                sh 'ls -alh'  // List all files in the current directory with details
            }
        }

        stage('Check Permissions') {
            steps {
                // Checking the permissions of the Dockerfile
                sh 'ls -l Dockerfile'  // List permissions of the Dockerfile (if it's in the root)
            }
        }

        stage('Check if Dockerfile Exists') {
            steps {
                script {
                    def dockerFileExists = fileExists 'Dockerfile'
                    if (!dockerFileExists) {
                        echo "Dockerfile not found in the root directory. Checking for other locations."
                        dockerFileExists = fileExists 'docker/Dockerfile'  // Check subdirectory
                    }

                    if (dockerFileExists) {
                        echo "Dockerfile found."
                    } else {
                        error "No Dockerfile found in the expected directories!"
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    def dockerFilePath = 'Dockerfile' // Default path (root directory)
                    // If Dockerfile isn't in the root, check subdirectory
                    if (!fileExists(dockerFilePath)) {
                        dockerFilePath = 'docker/Dockerfile'  // Update path if Dockerfile is inside a folder
                    }

                    if (!fileExists(dockerFilePath)) {
                        error "No Dockerfile found in the expected directories!"
                    }

                    echo "Building Docker image using Dockerfile at ${dockerFilePath}"
                    sh "docker build -t my-static-website -f ${dockerFilePath} ."
                }
            }
        }

        stage('List Files After Docker Build') {
            steps {
                // This will list all files in the workspace after the Docker build
                sh 'echo "Listing files in the workspace after Docker build:"'
                sh 'ls -alh'  // List all files in the current directory with details
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
