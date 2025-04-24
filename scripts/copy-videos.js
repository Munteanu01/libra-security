const fs = require("fs")
const path = require("path")

// Asigură-te că directorul de destinație există
const ensureDirectoryExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
    console.log(`Created directory: ${dirPath}`)
  }
}

// Copiază fișierul video în directorul de output
const copyVideo = () => {
  const sourceDir = path.join(process.cwd(), "public", "videos")
  const outputDir = path.join(process.cwd(), "out", "videos")

  ensureDirectoryExists(outputDir)

  // Copiază fișierul MP4
  const sourceFile = path.join(sourceDir, "hero-background.mp4")
  const destFile = path.join(outputDir, "hero-background.mp4")

  if (fs.existsSync(sourceFile)) {
    fs.copyFileSync(sourceFile, destFile)
    console.log(`Copied ${sourceFile} to ${destFile}`)
  } else {
    console.error(`Source file not found: ${sourceFile}`)
  }
}

// Rulează funcția
copyVideo()
