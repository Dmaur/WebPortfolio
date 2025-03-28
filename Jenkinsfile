pipeline {
    agent any
    
    environment {
        // Define environment variables
        VERCEL_TOKEN = credentials('vercel-token')
        NODE_VERSION = '21'
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the repository
                checkout scm
            }
        }
        
        stage('Setup Node.js') {
            steps {
                // Set up Node.js environment
                sh 'echo "Setting up Node.js environment"'
                
                // Use Node.js plugin if available, or install Node.js
                // This command may need to be adjusted based on your Jenkins setup
                sh """
                export NVM_DIR="\$HOME/.nvm"
                [ -s "\$NVM_DIR/nvm.sh" ] && . "\$NVM_DIR/nvm.sh"
                nvm install ${NODE_VERSION} || echo "Using existing Node installation"
                node -v
                npm -v
                """
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
                // Run ESLint
                sh 'npm run lint'
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
                // Add testing steps when you have tests in place
                sh 'echo "No tests configured yet. Skipping test stage."'
                // Example: sh 'npm test'
            }
        }
        
        stage('Deploy to Vercel') {
            steps {
                // Install Vercel CLI if not already installed
                sh 'npm install -g vercel'
                
                // Deploy to Vercel using the stored token
                // The --prod flag deploys to production
                sh '''
                echo "Deploying to Vercel..."
                vercel --token ${VERCEL_TOKEN} --prod --confirm
                '''
            }
        }
    }
    
    post {
        success {
            echo 'Deployment completed successfully!'
        }
        failure {
            echo 'Deployment failed. Check the logs for details.'
        }
        always {
            // Clean workspace after build
            cleanWs()
        }
    }
}