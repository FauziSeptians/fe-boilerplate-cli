const inquirer = require("inquirer");
const chalk = require("chalk");
const ora = require("ora");
const degit = require("degit");
const path = require("path");
const fs = require("fs");

async function createProject(projectName) {
   if (!projectName) {
      const answers = await inquirer.prompt([
         {
            type: "input",
            name: "projectName",
            message: "Project name:",
            default: "my-app",
            validate: (input) => {
               if (/^[a-z0-9-_]+$/.test(input)) {
                  return true;
               }
               return "Project name can only contain lowercase letters, numbers, hyphens and underscores";
            },
         },
      ]);
      projectName = answers.projectName;
   }

   const targetDir = path.join(process.cwd(), projectName);

   if (fs.existsSync(targetDir)) {
      console.log(chalk.red(`Error: Directory ${projectName} already exists!`));
      process.exit(1);
   }

   const spinner = ora("Creating project...").start();

   try {
      const emitter = degit("FauziSeptians/fe-boilerplate-cli", {
         cache: false,
         force: true,
         verbose: true,
      });

      await emitter.clone(targetDir);

      spinner.succeed(chalk.green("Project created successfully!"));

      console.log("\n" + chalk.cyan("Next steps:"));
      console.log(chalk.white(`  cd ${projectName}`));
      console.log(chalk.white("  npm install"));
      console.log(chalk.white("  npm run dev\n"));
   } catch (error) {
      spinner.fail(chalk.red("Failed to create project"));
      console.error(error);
      process.exit(1);
   }
}

module.exports = { createProject };
