pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out..'
                git 'https://github.com/JoakimJohnsson/tbf-firebase'
            }
        }
        stage('Install packages') {
            steps {
                echo 'Installing..'
                bat 'npm install'
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
                bat 'npm run build --passWithNoTests'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}