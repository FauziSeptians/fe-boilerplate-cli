#!/usr/bin/env node

const { program } = require("commander");
const { createProject } = require("../lib/index");
const chalk = require("chalk");
const { generateFactories } = require("../factories/generatorFactories");

program
   .name("fe-boilerplate-cli")
   .version("1.0.0")
   .alias("fe")
   .description("Generate Frontend boilerplate project")
   .argument("[project-name]", "Project name")
   .addHelpText(
      "after",
      `

${chalk.cyan("Quick Start:")}
  ${chalk.gray("$")} fe-boilerplate-cli my-app
  ${chalk.gray("$")} cd my-app
  ${chalk.gray("$")} fe-boilerplate-cli g r about

${chalk.cyan("More Info:")}
  Run ${chalk.white("fe-boilerplate-cli generate --help")} for generator details
  `
   )
   .action(async (projectName) => {
      await createProject(projectName);
   });

program
   .command("generate <type> [name]")
   .alias("g")
   .description("Generate code (routes, pages, etc.)")
   .addHelpText(
      "after",
      `

${chalk.cyan("Generator Types:")}
  ${chalk.white("routes, route, r")}     Generate route in src/app/
  ${chalk.white(
     "pages, page, p"
  )}       Generate page in src/pages/ with "Page" suffix

${chalk.cyan("Examples:")}
  ${chalk.gray("$")} fe-boilerplate-cli ${chalk.green("g r")} about
  ${chalk.gray("$")} fe-boilerplate-cli ${chalk.green("g p")} home
  ${chalk.gray("$")} fe-boilerplate-cli ${chalk.green("generate route")} contact
  ${chalk.gray("$")} fe-boilerplate-cli ${chalk.green("g page")} dashboard
  `
   )
   .action(async (type, name) => {
      await generateFactories(type, name);
   });

program.parse();
