import { execSync } from "node:child_process";

process.env.GITHUB_PAGES = "true";
execSync("next build", { stdio: "inherit", env: process.env });
execSync("npx gh-pages -d out -m \"chore: deploy static site\"", {
  stdio: "inherit",
});
