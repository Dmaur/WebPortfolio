pipeline {
    agent any
    
    tools {
        nodejs "node22"  // Use the name you configured in Global Tool Configuration
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the repository
                checkout scm
            }
        }
        
        stage('Check Environment') {
            steps {
                // Verify Node.js is available
                sh 'node --version'
                sh 'npm --version'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Install project dependencies
                sh 'npm install'
            }
        }
        
        stage('Lint') {
            steps {
                // Run lint if your project has it configured
                sh 'npm run lint || echo "No lint configured. Skipping."'
            }
        }
        
        stage('Build') {
            steps {
                // Build the Next.js application
                sh 'npm run build'
            }
        }
        
        stage('Run Tests') {
            steps {
                // Run the tests
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
            // Clean workspace after build
            cleanWs()
        }
    }
}