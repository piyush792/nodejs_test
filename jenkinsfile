pipeline {
    agent any
    stages{
        stage("checkout"){
            steps{
                checkout scm
            }
        }
        stage("test"){
            steps{
                sh 'sudo apt install npm'
            }
        }
        stage("Build"){
            steps{
                sh 'npm run build'
            }
        }
    }
}
