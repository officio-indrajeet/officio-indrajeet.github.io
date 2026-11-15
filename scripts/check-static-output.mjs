import { readFileSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";

const output = resolve("out");
const fail = (message) => {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
};
const pass = (message) => console.log(`PASS: ${message}`);
const read = (path) => {
  const file = join(output, path);
  if (!existsSync(file)) {
    fail(`Missing exported file: ${path}`);
    return "";
  }
  return readFileSync(file, "utf8");
};

const home = read("index.html");
const resume = read("resume/index.html");
const blog = read("blogs/java-8-streams/index.html");
for (const asset of [
  "profile.jpg",
  "Resume.pdf",
  "robots.txt",
  "sitemap.xml",
  "404.html",
  "_next",
]) {
  if (existsSync(join(output, asset))) pass(`Exported asset: ${asset}`);
  else fail(`Missing exported asset: ${asset}`);
}

if (home) {
  if (/<title>[^<]+<\/title>/i.test(home)) pass("Homepage title is present");
  else fail("Homepage title is missing");

  if (/<meta name="description" content="[^"]+"/i.test(home)) pass("Homepage description is present");
  else fail("Homepage description is missing");

  if (/<link rel="canonical" href="https:\/\/officio-indrajeet\.github\.io\//i.test(home)) pass("Canonical URL points to the production domain");
  else fail("Canonical URL is missing or incorrect");

  const requiredSections = ["home", "about", "experience", "skills", "projects", "blogs", "education", "contact"];
  const ids = [...home.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  const idSet = new Set(ids);
  for (const id of requiredSections) {
    if (idSet.has(id)) pass(`Homepage section: #${id}`);
    else fail(`Missing homepage section: #${id}`);
  }

  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicateIds.length === 0) pass("No duplicate element IDs on homepage");
  else fail(`Duplicate element IDs: ${[...new Set(duplicateIds)].join(", ")}`);

  const hashLinks = [...home.matchAll(/\bhref="#([^"]+)"/g)].map((match) => match[1]);
  const brokenHashLinks = [...new Set(hashLinks.filter((id) => !idSet.has(id)))];
  if (brokenHashLinks.length === 0) pass("All in-page anchor links resolve");
  else fail(`Broken in-page anchor links: ${brokenHashLinks.join(", ")}`);

  const blankLinks = [...home.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)].map((match) => match[0]);
  const unsafeBlankLinks = blankLinks.filter((tag) => !/rel="[^"]*noopener[^"]*"/.test(tag));
  if (unsafeBlankLinks.length === 0) pass("All new-tab links include noopener");
  else fail(`${unsafeBlankLinks.length} new-tab links are missing rel=noopener`);

  if (/<img\b[^>]*\balt="[^"]+"/i.test(home)) pass("Homepage portrait/image has alternative text");
  else fail("Homepage is missing descriptive image alternative text");
}

if (resume) {
  if (/<title>[^<]*Resume[^<]*<\/title>/i.test(resume)) pass("Resume page has a title");
  else fail("Resume page title is missing");
  if (/Print \/ Save as PDF/i.test(resume)) pass("Resume print/save as PDF action is present");
  else fail("Resume print/save as PDF action is missing");
}

if (blog) {
  if (/<title>[^<]*Java 8 Streams[^<]*<\/title>/i.test(blog)) pass("Java 8 Streams article has a title");
  else fail("Java 8 Streams article title is missing");
  if (/id="q20"/.test(blog) && /id="cheatsheet"/.test(blog)) pass("Java Streams article includes its final question and revision cheat sheet");
  else fail("Java Streams article content appears incomplete");
}

if (process.exitCode) {
  console.error("Static output checks failed.");
  process.exit(process.exitCode);
}
console.log("Static output checks passed.");
