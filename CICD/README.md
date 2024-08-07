For our pipeline, we decided to use an environment of GitHub, as our original repository was on here, Gitlab because the assignment recommended it, and Google Cloud Run since it uses docker containers directly and was very simple to set up. 

The pipeline begins with GitHub and Gitlab, where our GitHub repo is mirrored on Gitlab via pull mirroring, meaning any changes on GitHub are mirrored on Gitlab. For this reason, and changes we make are strictly on the GitHub repo. 

After any pull request or commit to any branch on GitHub will automatically trigger our pipeline on Gitlab, which runs on 3 stages: 

    
Build: The image for the repository is built using our Dockerfile and pushed to docker
Test: The Gitlab runner uses our repository code to start the server and check that it is running correctly
Deploy: The image is then deployed to our Google Cloud server

Also note, we did not use our main project's repo for this Assignment, but a forked repo, at https://github.com/UofT-UTSC-CS-sandbox/final-term-project-fitcode-CI-CD-Test.
