echo 'Starting the deployment...'
mkdir -p ~/.ssh/
echo "$SSH_PRIVATE_KEY" > ~/.ssh/asus-pubkey.pem
sudo chmod 400 ~/.ssh/asus-pubkey.pem
echo "$SSH_KNOWN_HOSTS" > ~/.ssh/known_hosts
ssh -i "~/.ssh/asus-pubkey.pem" $SSH_KEY_PATH ec2-user@ec2-3-90-30-33.compute-1.amazonaws.com " 
    docker login ghcr.io --username $REPO_OWNER < $CR_PAT
    docker pull ghcr.io/omicto/farmapp:latest
    docker run -p 80:80 --name farmaap -d ghcr.io/omicto/farmapp:latest

"