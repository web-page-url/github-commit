const sharp = require('sharp');
const toIco = require('to-ico');
const fs = require('fs');
const path = require('path');

// Define favicon sizes
const sizes = [16, 32, 48, 64, 96, 128, 180, 192, 256, 384, 512];

// Create favicon directory if it doesn't exist
const faviconDir = path.join(__dirname, 'public', 'favicons');
if (!fs.existsSync(faviconDir)) {
  fs.mkdirSync(faviconDir, { recursive: true });
}

// Generate favicons
async function generateFavicons() {
  try {
    const inputImage = path.join(__dirname, 'public', 'github-commits.png');
    
    // Check if input image exists
    if (!fs.existsSync(inputImage)) {
      console.error('Input image not found:', inputImage);
      return;
    }
    
    console.log('Generating favicons...');
    
    // Generate favicons for each size
    const buffers = [];
    for (const size of sizes) {
      const outputImage = path.join(faviconDir, `favicon-${size}x${size}.png`);
      const buffer = await sharp(inputImage)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent background
        })
        .png()
        .toBuffer();
      
      // Save the file
      await sharp(buffer).toFile(outputImage);
      console.log(`Generated ${size}x${size} favicon`);
      
      // Store buffers for ICO generation (only common sizes)
      if ([16, 32, 48].includes(size)) {
        buffers.push(buffer);
      }
    }
    
    // Generate a multi-size favicon.ico file
    const icoOutput = path.join(__dirname, 'public', 'favicon.ico');
    const icoBuffer = await toIco(buffers, {
      resize: false
    });
    
    fs.writeFileSync(icoOutput, icoBuffer);
    console.log('Generated favicon.ico with multiple sizes');
    
    console.log('Favicon generation complete!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons();