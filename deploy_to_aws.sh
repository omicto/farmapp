echo 'Starting the deployment...'
ssh -i "asus-pubkey.pem" ec2-user@ec2-3-90-30-33.compute-1.amazonaws.com " 
    docker login ghcr.io --username github-account < ${{ secrets.CR_PAT }}
    docker pull ghcr.io/omicto/farmapp:latest
    docker run -p 80:80 --name farmaap -d ghcr.io/omicto/farmapp:latest

"