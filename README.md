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

## Github errors when uploading a release? Make sure to include your github access token:
GITHUB_ACCESS_TOKEN="REPLACE_WITH_YOUR_TOKEN" node build.js --runtime electron --version 26.0.0 --abi 116

