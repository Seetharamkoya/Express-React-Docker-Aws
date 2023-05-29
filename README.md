# Github Actions+Docker Hub+AWS EC2+Terraform

I have set up a CI/CD pipeline to automate the build and deployment process for a full-stack application. The application consists of a React frontend and an Express backend. Docker is used to build and publish container images to Docker Hub, and these images are then deployed to an AWS EC2 instance.

The CI/CD pipelinesteps:

- Code changes are pushed to the repository.
- The CI server (such as GitHub Actions) detects the changes and triggers the pipeline.
- The React frontend and Express backend are built separately using Docker.
- Docker images for both the frontend and backend are created.
- The images are tagged and pushed to Docker Hub for storage and version control.
- The CI/CD pipeline deploys the latest images from Docker Hub to the AWS EC2 instance.
- The EC2 instance pulls the updated images and starts the containers.
- The application is now updated and running on the EC2 instance.
- This CI/CD setup streamlines the development and deployment process by automating the building, versioning, and deployment of containerized applications using Docker and Docker Hub, with the final deployment happening on an AWS EC2 instance.
