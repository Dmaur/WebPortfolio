pipeline {
    agent any
    
    tools {
        nodejs "node22"
    }
    
    environment {
        // Define MongoDB environment variables needed for build
        MONGO_URL = credentials('mongo-url')
        MONGO_DB_NAME = 'dbProjects'  // Or use credentials if needed
        MONGO_COLLECTION_PROJECTS = 'projects'  // Or use credentials if needed
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
                sh 'echo "Checking environment variables..."'
                sh 'if [ -z "$MONGO_URL" ]; then echo "MONGO_URL is not set"; exit 1; fi'
                sh 'if [ -z "$MONGO_DB_NAME" ]; then echo "MONGO_DB_NAME is not set"; exit 1; fi'
                sh 'if [ -z "$MONGO_COLLECTION_PROJECTS" ]; then echo "MONGO_COLLECTION_PROJECTS is not set"; exit 1; fi'
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
                sh 'MONGO_URL=$MONGO_URL MONGO_DB_NAME=$MONGO_DB_NAME MONGO_COLLECTION_PROJECTS=$MONGO_COLLECTION_PROJECTS npm run build'
            }
        }
        
        stage('Deploy to Vercel') {
            steps {
                withCredentials([string(credentialsId: 'vercel-token', variable: 'VERCEL_TOKEN')]) {
                    sh '''
                    echo "Installing Vercel CLI..."
                    npm install -g vercel
                    
                    echo "Deploying to Vercel..."
                    # Create vercel.json to specify build env vars
                    cat > vercel.json << EOF
                    {
                      "env": {
                        "MONGO_URL": "${MONGO_URL}",
                        "MONGO_DB_NAME": "${MONGO_DB_NAME}",
                        "MONGO_COLLECTION_PROJECTS": "${MONGO_COLLECTION_PROJECTS}"
                      },
                      "buildCommand": "npm run build"
                    }
                    EOF
                    
                    # Deploy using Vercel CLI with token
                    VERCEL_ORG_ID=your-org-id VERCEL_PROJECT_ID=prj_1Ic9ps1hWv33rvDH2Pv9nQi4PxzZ vercel --token ${VERCEL_TOKEN} --prod
                    
                    echo "Deployment completed. Check Vercel dashboard for details."
                    '''
                }
            }
        }
    }
    
    post {
        success {
            echo "Pipeline completed successfully! Vercel deployment has been triggered."
        }
        failure {
            echo "Pipeline failed. Check the logs for details."
        }
        always {
            cleanWs()
        }
    }
}