## Table of Contents

<!-- toc -->

- [Landing Page](#landing-page)
  * [Contributing](#contributing)
    + [Software requirements](#software-requirements)
    + [Setup](#setup)
    + [Workflow](#workflow)
      - [Executing the project](#executing-the-project)
        * [Run Commands](#run-commands)
        * [Build Commands](#build-commands)
  * [Project Guidelines](#project-guidelines)
    + [Directory and files structure](#directory-and-files-structure)
    + [Global State Management](#global-state-management)
    + [Local State Management](#local-state-management)
    + [Local Storage (cookies / cache)](#local-storage-cookies--cache)
      - [Loading Data on Startup](#loading-data-on-startup)
    + [Navigation](#navigation)
    + [Architecture](#architecture)
    + [Localization](#localization)
    + [SEO](#seo)
  * [Standards](#standards)
    + [Coding Standards](#coding-standards)
    + [Aesthetics / UI / Theme](#aesthetics--ui--theme)
  * [Deployment](#deployment)
    + [Server setup](#server-setup)
    + [Automatic Deployment (CD)](#automatic-deployment-cd)

<!-- tocstop -->

![tunzaa logo](ReadmeAssets/tunzaalogo.png)  

# Landing Page

## Contributing
### Software requirements
### Setup
### Workflow
#### Executing the project
##### Run Commands
##### Build Commands
## Project Guidelines
### Directory and files structure
### Global State Management
### Local State Management
### Local Storage (cookies / cache)
#### Loading Data on Startup
### Navigation
### Architecture
### Localization
### SEO
## Standards
### Coding Standards
### Aesthetics / UI / Theme
## Deployment

### Server setup

1. Setup the domain (this might take time since it will have to propagate)
	- In digitaloceans domain's configuration page create a new domain for the API endpoint
	- Link the domain to the corresponding server/droplet IP. You can find the table [here](https://github.com/Tunzaa/.github-private#existing-servers-and-hosting-products).


1. Allow the GitHub workflow by adding an ssh key to the server for the `gitactions` user. 
	
	> This steps should be run in Linux. It is recommended for it to be a local system. If you are using Windows, WSL works great) 
	
	- Create the ssh key (where <stage> is either `dev`, `beta` or `prod`). Do not provide a passphrase (press "enter" to continue without it).
		```bash
		ssh-keygen -f .ssh/landingpage-<stage>-key
		```
	- Save the public key for the gitactions user in the server.
		```bash
		ssh-copy-id -i .ssh/landingpage-<stage>-key gitactions@<server-ip>
		```
		- You will have to provide the pssword set for `gitactions` user

	- To test if it worked, No password should be required to login while having the ssh key setup: 
		```bash
		ssh -i .ssh/landingpage-<stage>-key 'gitactions@<server-ip>'
		```

	> The SSH keys (public `landingpage-<stage>-key.pub`, and private `landingpage-<stage>-key`) will be stored in the linux system in the directory `\home\<user>\.ssh`. *You will need them later*.

	- After adding the github workflow in the repository in order to clone and setup the project in `var/www/landingpage`, Create a secret in the GitHub repository named `<stage>_SERVER_SSH_PRIVATE_KEY`. In it, store ALL the contents of the full private ssh key `landingpage-<stage>-key`.

	- Ensure that the `landingpage-<stage>-deployment.yml` workflow exists in the in the `.github\workflows` directory
		> In that file, ensure that the proper server is being used, the proper route in `www` is in place, ...

1. Configure Nginx
	- Add ngnx configuration file in `etc/nginx/sites-available`

		> add the `landingpage` nginx configuration file to the etc/nginx/sites-available folder (you can easily do so with *FileZilla*: `File > Site Manager > New Site`. Set the protocol to `SFTP`, use the server IP as host, `gitactions` or `sudouser` user and password)

	- Enable the site
		```bash
		sudo ln -s /etc/nginx/sites-available/landingpage /etc/nginx/sites-enabled/
		```

	- Restart Nginx
		```bash
		sudo systemctl restart nginx
		```

### Automatic Deployment (CD)
The deployment is handled automatically by GitHub workflows. 

Each of the main branches (`Dev`, `Beta` and `Prod`) have their own workflow file.
The files can be found in `\.github\workflows`