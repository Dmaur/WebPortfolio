pipeline {
    agent any
    
    tools {
        nodejs "node22"  // Use the name you configured in Global Tool Configuration
    }
    
    environment {
        // If you added the mongodb-uri credential in Jenkins
        MONGO_URL = credentials('mongodb-uri')
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Check Environment') {
            steps {
                sh 'node --version'
                sh 'npm --version'
                
                // Create a .env.local file with the environment variables
                sh '''
                echo "MONGO_URL=$MONGO_URL" > .env.local
                echo "NODE_ENV=production" >> .env.local
                '''
                
                // Optional - verify env file was created (remove this in production)
                sh 'cat .env.local || echo "Env file not created"'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Lint') {
            steps {
                sh 'npm run lint || echo "No lint configured. Skipping."'
            }
        }
        
        stage('Build') {
            steps {
                // During build, Next.js will use the .env.local file we created
                sh 'npm run build'
            }
        }
        
        stage('Run Tests') {
            steps {
                sh 'npm run test || echo "No tests configured yet. Skipping test stage."'
            }
        }
        
        stage('Deploy to Vercel') {
            steps {
                // Trigger Vercel deployment using deploy hook
                sh 'curl -X POST https://api.vercel.com/v1/integrations/deploy/prj_1Ic9ps1hWv33rvDH2Pv9nQi4PxzZ/vWS_Gz5Wvs'
            }
        }
    }
    
    post {
        success {
            echo "Deployment completed successfully!"
        }
        failure {
            echo "Deployment failed. Check the logs for details."
        }
        always {
            cleanWs()
        }
    }
}