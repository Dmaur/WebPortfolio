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
        
        // Skip the build stage since Vercel will handle this
        
        stage('Deploy to Vercel') {
            steps {
                // Trigger Vercel deployment using deploy hook
                sh 'curl -X POST https://api.vercel.com/v1/integrations/deploy/prj_1Ic9ps1hWv33rvDH2Pv9nQi4PxzZ/vWS_Gz5Wvs'
                echo "Deployment triggered on Vercel. Check Vercel dashboard for build status."
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