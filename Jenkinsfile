pipeline {
    agent any
    environment {
        PROJECT_ID = 'byteeit-testing-project'
        REGION = 'us-central1'
    }
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/VinenTik/Microservices-portfolio.git'
            }
        }
        stage('Deploy to Cloud Run') {
            steps {
                sh '''
                    cd auth-service
                    gcloud run deploy auth-service --source . --region $REGION --allow-unauthenticated
                '''
                sh '''
                    cd ../user-service
                    gcloud run deploy user-service --source . --region $REGION --allow-unauthenticated
                '''
                sh '''
                    cd ../product-service
                    gcloud run deploy product-service --source . --region $REGION --allow-unauthenticated
                '''
            }
        }
    }
}

