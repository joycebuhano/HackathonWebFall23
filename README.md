This documentation is meant for VS Code users and those unfamiliar with GitHub.
# Getting Started
### Prerequisites
1. Install NodeJS

* Visit [NodeJS](https://nodejs.org/en) and install the recommended version for your machine.
* Ensure it is correctly installed by running this command in the terminal:
```
node
```
You should get an output similar to _Welcome to Node.js v18.14.0._ but for your version.

2. Install pnpm
* Visit [pnpm](https://pnpm.io/installation) for installation instructions or run this command in the terminal:
```sh
# for windows
iwr https://get.pnpm.io/install.ps1 -useb | iex

# for linux
curl -fsSL https://get.pnpm.io/install.sh | sh -

# for anything
npm install pnpm --g
```
If you are contributing to this project, use pnpm. Yarn and npm will **NOT** be used for consistency reasons.
<br>

### Cloning the Repository
1. In VS Code, navigate to `View > Command Palette` or `Ctrl + Shift + P` and enter `Clone`.
2. Enter in the url: `https://github.com/IEEE-PSH/hackathon-web.git`.
3. Select a folder on your machine to save the repository.


### Installing Dependencies
Run the following command to install all dependencies required by the project:
```
pnpm install
```
### Running the Development Server
Run the following command to start up the development server:
```
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
   
(This project will require environment variables. Reach out to the Project Lead for the environment variables and paste them in a new file called `.env.local` in the root directory.)

### Adding Packages
If you want to add packages to your current project, you can run the following command:
```
pnpm add package-name
```
Replace `package-name` with the name of the package. You can find packages on [npm](https://www.npmjs.com).

<br>

# Contributing

### Creating a Branch

Separate branches will be made to differentiate implementations for the application. New changes will **NOT** be made directly in the master branch.

1. Click on the current branch on the bottom-left labeled `master`.
2. Click on `Create a new branch`.
3. Name the branch with something descriptive (ex: `navbar-testing`).
   
You can switch branches by clicking on the branch name and clicking on the refresh symbol to sync with its changes. If your files do not sync properly, navigate to `View > Command Palette` or `Ctrl + Shift + P` and enter `Fetch`

<br>

### Committing Changes

All changes in the current branch will be tracked, indicated by the Source Control tab located on the left. To commit changes:

1. Stage changes to prepare for commit.
2. Add a descriptive message to your commit (ex: `changed colors of navbar`).
3. Click `Commit` to commit locally or `Commit & Sync` to commit to GitHub.

You must commit changes to visit other branches.

<br>

### Submitting Pull Requests
Submit pull requests to potentially have your changes merge with the master branch.
1. Go to the specific branch on GitHub
2. At the top, click on `Compare and pull request`
3. Fill out the form with information about the request
4. Wait for feedback or approval.
