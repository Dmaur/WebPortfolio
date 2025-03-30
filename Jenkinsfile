pipeline {
    agent any
    
    tools {
        nodejs "node22"
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
                sh 'npm run build'
            }
        }
        
        stage('Deploy to Vercel') {
            steps {
                withCredentials([string(credentialsId: 'vercel-token', variable: 'VERCEL_TOKEN')]) {
                    sh '''
                    echo "Installing Vercel CLI..."
                    npm install -g vercel
                    
                    echo "Deploying to Vercel..."
                    # Create a .vercel/project.json file to specify project
                    mkdir -p .vercel
                    echo '{"projectId":"prj_1Ic9ps1hWv33rvDH2Pv9nQi4PxzZ","orgId":"your-org-id"}' > .vercel/project.json
                    
                    # Deploy using Vercel CLI with token
                    VERCEL_ORG_ID=KdyTj6gZzry4p452ZQNC3E4Z VERCEL_PROJECT_ID=prj_1Ic9ps1hWv33rvDH2Pv9nQi4PxzZ vercel --token ${VERCEL_TOKEN} --prod
                    
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