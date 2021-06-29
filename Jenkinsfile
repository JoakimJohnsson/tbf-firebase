pipeline {
    agent any
    options { skipDefaultCheckout() }

    stages {
        stage('Checkout git repository') {
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
        stage('Test') {
            steps {
                echo 'Testing..'
                bat 'npm test'
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
                bat 'npm run build-no-test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}