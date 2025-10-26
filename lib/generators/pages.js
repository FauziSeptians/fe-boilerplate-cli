const inquirer = require("inquirer");
const chalk = require("chalk");
const ora = require("ora");
const fs = require("fs");
const path = require("path");
const { generatePageFile } = require("../../helpers/generatorPageFile");

async function generatePage(pageName) {
   const packageJsonPath = path.join(process.cwd(), "package.json");

   if (!fs.existsSync(packageJsonPath)) {
      console.log(chalk.red("Error: Not in a valid project directory!"));
      console.log(
         chalk.yellow(
            "Please run this command inside your fe-boilerplate-cli project."
         )
      );
      process.exit(1);
   }

   if (!pageName) {
      const answers = await inquirer.prompt([
         {
            type: "input",
            name: "pageName",
            message: "Page name:",
            validate: (input) => {
               if (input.trim() === "") {
                  return "Page name cannot be empty";
               }
               return true;
            },
         },
      ]);
      pageName = answers.pageName;
   }

   const normalizedName = pageName.toLowerCase().replace(/\s+/g, "-");

   const componentName =
      normalizedName
         .split("-")
         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
         .join("") + "Page";

   const basePath = "src/pages";

   const fileName = `${componentName}.tsx`;
   const filePath = path.join(process.cwd(), basePath, fileName);

   if (fs.existsSync(filePath)) {
      console.log(chalk.red(`Error: Page "${componentName}" already exists!`));
      process.exit(1);
   }

   const spinner = ora("Generating page...").start();

   try {
      fs.mkdirSync(path.join(process.cwd(), basePath), { recursive: true });

      fs.writeFileSync(
         filePath,
         generatePageFile(componentName, normalizedName)
      );

      spinner.succeed(
         chalk.green(`Page "${componentName}" created successfully!`)
      );

      console.log("\n" + chalk.cyan("Generated files:"));
      console.log(chalk.white(`  ${basePath}/${fileName}`));
   } catch (error) {
      spinner.fail(chalk.red("Failed to generate page"));
      console.error(error);
      process.exit(1);
   }
}

module.exports = { generatePage };
