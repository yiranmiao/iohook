# iohook
[Original ReadMe](https://github.com/wilix-team/iohook/blob/master/README.md)

## To find out your abi version, run:
node abi.js

If your version of electron isn't included, just modify abi.js to add it


## ERRORS about different version of node:
Run on each platform (use node 18 to build) and upload obtained prebuilds to the Release section on GitHub:
```bash
node build.js --runtime electron --version 23.1.1 --abi 113
```

as per documentation https://wilix-team.github.io/iohook/manual-build.html#building-for-specific-versions-of-node

## Building with Github Actions
1. enable actions if you forked this
2. go to github action settings for the repo and enable read and write access
3. new releases are already created for tagged versions (tags starting v):
   so first bump the version in package.json (e.g. 1.0.10)
   next, commit, tag and push with the tags. a one liner:
  git add . && git commit -am 'version bump' && git tag v$(node -p "require('./package.json').version") && git push --tags