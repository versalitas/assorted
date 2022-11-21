#### clone project
```
git clone <copied name from github repo>
```
#### check for changes
```
git status
```

#### add for staging /specific file/ all/ all
```
git add <filename>
git add -A
git add .

```
### remove staged file
```
git reset <filename>
```
#### consult history/ commit id (displayed in reversed order)
```
git log
```

#### add and commit change (does not work when needing to add new file)
```
git commit -am 'commit message'
```
#### commit change
```
git commit -m 'commit message'
```
#### amend commit (minor change)
```
git commit --amend
```
### undo commit reset HEAD to point att the first commit before the one to undo
```
git reset HEAD~1
```

### undo commit with commit hash (consult via git log), 
```
git reset commit <hash>
```
### unstage and remove commits
```
git reset hard <hash>
```

#### push to main / push to and define upstream for further pushes
```
git push origin main
git push -u origin <name>
```
#### consult branch
```
git branch
```
#### switch to branch
```
git checkout <branch name>
```
#### pull from origin / pull and set upstream/ pull once upstream defined
```
git pull origin <branchname>
git pull -u origin <branchname>
git pull
```

#### sync branch with main
```
git checkout
git pull origin
```


(main: production, dev:development) (change default branch to dev in github... pull request should be made to dev)
