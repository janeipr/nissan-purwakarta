import fs from "fs";
import path from "path";

// Specify the folder where the JSON files are located
const folderPath = `${process.cwd()}/src/contents/`; // Adjust the path as needed

interface GetContent<T> {
  contents: Array<T>;
}

// Function to read and display all JSON files in a directory
async function getContent<T>(
  contentFolder: string,
  slug?: string[]
): Promise<GetContent<T>> {
  const folderPathWithContent = path.join(folderPath, contentFolder);

  try {
    // Read all files in the directory
    const files = await fs.promises.readdir(folderPathWithContent);

    // Filter for JSON files
    const jsonFiles = files.filter((file) => path.extname(file) === ".json");

    if (jsonFiles.length === 0) {
      console.log("No JSON files found in the directory.");
      return { contents: [] }; // Return empty content
    }

    // Create a list to store the parsed contents
    const contents: T[] = [];

    // Read and parse the contents of each JSON file
    for (const file of jsonFiles) {
      const filePath = path.join(folderPathWithContent, file);

      try {
        // Read file content asynchronously
        const data = await fs.promises.readFile(filePath, "utf-8");

        // Parse JSON data and push it to contents array
        const jsonData = JSON.parse(data);

        const isSlugOrAll = slug ? slug.indexOf(jsonData.slug) >= 0 : true;

        if (isSlugOrAll) {
          contents.push(jsonData);
        }
      } catch (err) {
        console.error(`Error reading or parsing file ${file}:`, err);
      }
    }

    return { contents };
  } catch (err) {
    console.error("Unable to scan directory:", err);
    return { contents: [] }; // Return empty content in case of error
  }
}

export default getContent;
