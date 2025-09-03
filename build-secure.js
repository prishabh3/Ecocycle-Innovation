#!/usr/bin/env node

/**
 * Build script to create secure deployment files
 * This script injects environment variables into your HTML files
 * Run this before deploying to GitHub Pages
 */

const fs = require('fs');
const path = require('path');

// Configuration - CHANGE THESE VALUES
const CONFIG = {
    ADMIN_USERNAME: process.env.ADMIN_USERNAME || 'admin',
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || 'Ecocycle2024@',
    SECRET_KEY: process.env.SECRET_KEY || 'ecocycle2024',
    SESSION_DURATION: process.env.SESSION_DURATION || 24
};

console.log('🔐 Building secure deployment files...');

// Function to replace placeholders in HTML files
function buildSecureFile(inputFile, outputFile) {
    try {
        let content = fs.readFileSync(inputFile, 'utf8');
        
        // Replace placeholders with actual values
        content = content.replace(/ADMIN_USERNAME_PLACEHOLDER/g, CONFIG.ADMIN_USERNAME);
        content = content.replace(/ADMIN_PASSWORD_PLACEHOLDER/g, CONFIG.ADMIN_PASSWORD);
        content = content.replace(/SECRET_KEY_PLACEHOLDER/g, CONFIG.SECRET_KEY);
        content = content.replace(/SESSION_DURATION_PLACEHOLDER/g, CONFIG.SESSION_DURATION);
        
        // Write the secure file
        fs.writeFileSync(outputFile, content);
        console.log(`✅ Created secure file: ${outputFile}`);
        
    } catch (error) {
        console.error(`❌ Error processing ${inputFile}:`, error.message);
    }
}

// Build secure admin login
buildSecureFile('admin-login-secure.html', 'admin-login.html');

// Build secure company info
buildSecureFile('company-info.html', 'company-info-secure.html');

console.log('🎉 Secure build complete!');
console.log('📁 Safe to commit these files to GitHub');
console.log('⚠️  Do NOT commit the source files with placeholders');
