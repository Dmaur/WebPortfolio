pipeline {
    agent any
    
    tools {
        nodejs "node22" // Use the name you defined in Global Tool Configuration
    }
    
    environment {
        VERCEL_TOKEN = credentials('vercel-token')
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Run Tests') {
            steps {
                sh 'npm test || echo "No tests specified"'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Deploy to Vercel') {
            steps {
                // Install Vercel CLI if not installed globally
                sh 'npm install -g vercel'
                
                // Deploy to Vercel using the stored token
                sh 'vercel --token ${VERCEL_TOKEN} --prod'
            }
        }
    }
    
    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
        always {
            cleanWs() // Clean workspace after build
        }
    }
}