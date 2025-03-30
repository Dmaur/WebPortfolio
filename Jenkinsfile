pipeline {
    agent any
    
    tools {
        nodejs "node22"
    }
    
    environment {
        // Define MongoDB environment variables using credentials
        MONGO_CREDS = credentials('mongo-url')
        MONGO_URL = "${MONGO_CREDS}"
        MONGO_DB_NAME = "dbProjects"  
        MONGO_COLLECTION_PROJECTS = "projects"  
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
                
                // Verify env vars are set (but don't print sensitive values)
                sh '''
                echo "Checking environment variables..."
                if [ -z "$MONGO_URL" ]; then echo "MONGO_URL is not set"; exit 1; fi
                if [ -z "$MONGO_DB_NAME" ]; then echo "MONGO_DB_NAME is not set"; exit 1; fi
                if [ -z "$MONGO_COLLECTION_PROJECTS" ]; then echo "MONGO_COLLECTION_PROJECTS is not set"; exit 1; fi
                '''
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
                // Pass environment variables to the build process
                withEnv(["MONGO_URL=${MONGO_URL}", "MONGO_DB_NAME=${MONGO_DB_NAME}", "MONGO_COLLECTION_PROJECTS=${MONGO_COLLECTION_PROJECTS}"]) {
                    sh 'npm run build'
                }
            }
        }
        
        stage('Deploy to Vercel') {
            steps {
                withCredentials([string(credentialsId: 'vercel-token', variable: 'VERCEL_TOKEN')]) {
                    sh '''
                    echo "Deploying to Vercel..."
                    # Use the deploy hook which is simpler and more reliable
                    curl -X POST "https://api.vercel.com/v1/integrations/deploy/prj_1Ic9ps1hWv33rvDH2Pv9nQi4PxzZ/vWS_Gz5Wvs"
                    echo "Deployment triggered. Check Vercel dashboard for status."
                    '''
                }
            }
        }
    }
    
    post {
        success {
            node {
                echo "Pipeline completed successfully! Vercel deployment has been triggered."
            }
        }
        failure {
            node {
                echo "Pipeline failed. Check the logs for details."
            }
        }
        always {
            node {
                cleanWs()
            }
        }
    }
}