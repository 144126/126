const fs = require("fs/promises");
const path = require("path");

async function countWordsInMarkdownFiles(directoryPath) {
  let totalWordCount = 0;
  try {
    const files = await fs.readdir(directoryPath);

    for (const file of files) {
      if (file.endsWith(".md")) {
        const filePath = path.join(directoryPath, file);
        const content = await fs.readFile(filePath, "utf8");
        // Split by one or more whitespace characters and filter out empty strings
        const words = content.split(/\s+/).filter((word) => word.length > 0);
        totalWordCount += words.length;
      }
    }
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error(
        `Error: Directory '${path.basename(directoryPath)}' not found at ${directoryPath}. Please ensure it exists and contains markdown files.`,
      );
    } else {
      console.error(
        `Error counting words in ${directoryPath}: ${error.message}`,
      );
    }
    return -1; // Indicate an error
  }
  return totalWordCount;
}

// Construct the path to the 'r' folder relative to index.js
const rFolderPath = path.join(__dirname, "r");

countWordsInMarkdownFiles(rFolderPath)
  .then((count) => {
    if (count !== -1) {
      console.log(
        `Total word count in markdown files in '${path.basename(rFolderPath)}' folder: ${count}`,
      );
    } else {
      console.log("Could not count words due to an error.");
    }
  })
  .catch((error) => {
    console.error(`An unhandled promise rejection occurred: ${error.message}`);
  });
