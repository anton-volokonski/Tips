# Git cheatsheet

## It's just a control version system, *so, relax, yo* ;)

### How to setup SSH
> Find more info here:
> https://docs.github.com/en/authentication/connecting-to-github-with-ssh

### How to clone and check repository
```
git clone *your_repo_link*
git status
git branch
git log
```

### To upload, save on local stage env, commit & push
```
git add -A
git commit -m 'add comment text'
git push origin master
```

### Change your branch and create a new one
```
git checkout fix1
git checkout -b fix2
```

### Don't forget to update master branch daily 
**Daily**, man: `git pull origin master`

### More commands for further neeeds
* fetch + merge
* cherrypick 
* init

## Terminal tweaks:

1. https://www.themoderncoder.com/add-git-branch-information-to-your-zsh-prompt/
1. https://stackoverflow.com/questions/40895725/how-to-exit-the-insert-screen-in-mac-terminal

## [Gitignore](https://stackoverflow.com/questions/18393498/gitignore-all-the-ds-store-files-in-every-folder-and-subfolder)

# See ya!
