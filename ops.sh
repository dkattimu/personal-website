function git_acp() {
    git add .
    git commit -m $1
    git push
    
}