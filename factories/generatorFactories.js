const chalk = require("chalk");
const { generateRoute } = require("../lib/generators/routes");
const { generatePage } = require("../lib/generators/pages");

async function generateFactories(type, name) {
   switch (type) {
      case "routes":
      case "route":
      case "r": {
         await generateRoute(name);
         await generatePage(name);
         break;
      }

      case "pages":
      case "page":
      case "p": {
         await generatePage(name);
         break;
      }

      default: {
         console.log(chalk.red(`Unknown generator type: ${type}`));
         console.log(chalk.yellow("Available types: routes, pages"));
         process.exit(1);
      }
   }
}

module.exports = { generateFactories };
