Hello,
I am BTech Grad.
Here I am building a basic model of social Networking Webpage.
I am using : Html,Css,Javascript,React,Nodejs and for database MongoDb.

// Commands :
1.Set Your User Name and Email:
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global --list

2.connect
git init
git clone [url]
git add .
git commit -m "Add Initial Files"
git status
ls -a
git push -u origin main
git branch
git remote add origin https://github.com/lostanush/FirstProject-socialNetwork-.git  
Author - Anush Dighore
Date - 26 June 2024

git config --global --list

//stage
git status
show modified files in working directory, staged for your next commit
git add [file]
add a file as it looks now to your next commit (stage)
git reset [file]
unstage a file while retaining the changes in working directory
git diff
diff of what is changed but not staged
git diff --staged
diff of what is staged but not yet commited
git commit -m “[descriptive message]”

branch
git branch
list your branches. a \* will appear next to the currently active branch
git branch [branch-name]
create a new branch at the current commit
git checkout
switch to another branch and check it out into your working directory
git merge [branch]
merge the specified branch’s history into the current one
git log
show all commits in

INSPECT & COMPARE
Examining logs, diffs and object information
git log
show the commit history for the currently active branch
git log branchB..branchA
show the commits on branchA that are not on branchB
git log --follow [file]
show the commits that changed file, even across renames
git diff branchB...branchA
show the diff of what is in branchA that is not in branchB
git show [SHA]

SHARE & UPDATE
Retrieving updates from another repository and updating local repos
git remote add [alias] [url]
add a git URL as an alias
git fetch [alias]
fetch down all the branches from that Git remote
git merge [alias]/[branch]
merge a remote branch into your current branch to bring it up to date
git push [alias] [branch]
Transmit local branch commits to the remote repository branch
git pull

TRACKING PATH CHANGES
Versioning file removes and path changes
git rm [file]
delete the file from project and stage the removal for commit
git mv [existing-path] [new-path]
change an existing file path and stage the move
git log --stat -M

REWRITE HISTORY
Rewriting branches, updating commits and clearing history
git rebase [branch]
apply any commits of current branch ahead
