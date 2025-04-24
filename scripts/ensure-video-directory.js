const fs = require("fs")
const path = require("path")

// Ensure the videos directory exists in public
const videosDir = path.join(process.cwd(), "public", "videos")
if (!fs.existsSync(videosDir)) {
  fs.mkdirSync(videosDir, { recursive: true })
  console.log("Created videos directory in public folder")
}

// Create a placeholder file to ensure the directory is included in the build
const placeholderPath = path.join(videosDir, "directory-placeholder.txt")
fs.writeFileSync(placeholderPath, "This file ensures the videos directory is included in the build.")
console.log("Created placeholder file in videos directory")
