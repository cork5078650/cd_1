pipeline {
    agent any
    
    environment {
        // Define any environment variables if needed
        REPO_URL = 'https://github.com/cork5078650/cd_1.git'
        BRANCH_NAME = 'master'  // Replace 'master' with the correct branch name
    }
    
    stages {
        stage('Checkout SCM') {
            steps {
                script {
                    // Checkout from the specified branch
                    checkout([$class: 'GitSCM',
                        branches: [[name: "*/${BRANCH_NAME}"]], // Change the branch name if needed
                        doGenerateSubmoduleConfigurations: false,
                        extensions: [],
                        submoduleCfg: [],
                        userRemoteConfigs: [[url: REPO_URL]]
                    ])
                }
            }
        }
        
        stage('Clone Repository') {
            steps {
                script {
                    // Clone repository to the workspace
                    git url: REPO_URL, branch: BRANCH_NAME
                }
            }
        }
        
        stage('List Files Before Docker Build') {
            steps {
                script {
                    // List the files before Docker build starts
                    echo 'Listing files in the workspace before Docker build:'
                    sh 'ls -alh'
                }
            }
        }
        
        stage('Check Permissions') {
            steps {
                script {
                    // Check the permissions of the Dockerfile if it exists
                    sh 'ls -l Dockerfile'
                }
            }
        }

        stage('Check if Dockerfile Exists') {
            steps {
                script {
                    // Check if the Dockerfile exists
                    def dockerfileExists = fileExists('Dockerfile')
                    if (!dockerfileExists) {
                        error "Dockerfile does not exist!"
                    }
                }
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image only if Dockerfile exists
                    sh 'docker build -t myapp .'
                }
            }
        }
        
        stage('List Files After Docker Build') {
            steps {
                script {
                    // List the files after Docker build to check the changes
                    echo 'Listing files in the workspace after Docker build:'
                    sh 'ls -alh'
                }
            }
        }

        stage('Check Docker Version') {
            steps {
                script {
                    // Check Docker version
                    sh 'docker --version'
                }
            }
        }
        
        stage('Run Container') {
            steps {
                script {
                    // Run the container after the image is built
                    sh 'docker run -d -p 8080:80 myapp'
                }
            }
        }
    }
    
    post {
        always {
            // Clean up or additional steps that should always run
            echo 'Pipeline completed.'
        }
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
