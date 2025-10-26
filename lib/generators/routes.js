const inquirer = require("inquirer");
const chalk = require("chalk");
const ora = require("ora");
const fs = require("fs");
const path = require("path");
const { generateComponentFile } = require("../../helpers/generatorComponentFile");

async function generateRoute(routeName) {
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

   if (!routeName) {
      const answers = await inquirer.prompt([
         {
            type: "input",
            name: "routeName",
            message: "Route name:",
            validate: (input) => {
               if (input.trim() === "") {
                  return "Route name cannot be empty";
               }
               return true;
            },
         },
      ]);
      routeName = answers.routeName;
   }

   const normalizedName = routeName.toLowerCase().replace(/\s+/g, "-");

   const basePath = "src/app";
   const routePath = path.join(process.cwd(), basePath, normalizedName);

   if (fs.existsSync(routePath)) {
      console.log(
         chalk.red(`Error: Route "${normalizedName}" already exists!`)
      );
      process.exit(1);
   }

   const spinner = ora("Generating route...").start();

   try {
      fs.mkdirSync(routePath, { recursive: true });

      const componentName = normalizedName
         .split("-")
         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
         .join("");

      console.log(componentName);

      const files = {
         [`${componentName}.tsx`]: generateComponentFile(componentName),
      };


      for (const [fileName, content] of Object.entries(files)) {
         fs.writeFileSync(path.join(routePath, fileName), content);
      }

      spinner.succeed(
         chalk.green(`Route "${normalizedName}" created successfully!`)
      );

      console.log("\n" + chalk.cyan("Generated files:"));
      console.log(chalk.white(`  ${basePath}/${normalizedName}/${componentName}.tsx`));
   } catch (error) {
      spinner.fail(chalk.red("Failed to generate route"));
      console.error(error);
      process.exit(1);
   }
}

module.exports = { generateRoute };
