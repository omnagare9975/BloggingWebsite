pipeline{
    agent any
    environment{
        SONAR_HOME = tool "Sonar"
    }
    stages{
        stage('clone the repo'){
            steps{
                git branch: 'main', url: 'https://github.com/omnagare9975/BloggingWebsite.git'
            }
        }
        stage('Sonar Quality Gate'){
            steps{
                withSonarQubeEnv('Sonar'){
                    sh '$SONAR_HOME/bin/sonar-scanner -Dsonar.projectName=fullstacknodeapp -Dsonar.projectKey=fullstacknodeapp'
                }
                timeout(time: 2, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: false
                }
            }
        }
        stage('OWASP DP CHECK'){
            steps{
                dependencyCheck additionalArguments: '--scan ./', odcInstallation: 'dp'
                dependencyCheckPublisher pattern: '**/dependency-check-report.xml'
            }
        }

        stage('Triy file scan'){
            steps{
                sh 'trivy fs --format table -o trivy-fs-report.html .'
            }
        }
        stage('Deploy the Applicatoin'){
            steps{
                sh '''
                    docker-compose down || true
                    docker-compose up --build -d 
                   '''
            }
        }

    }
}
