// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
    MIT: "[MIT License] https://img.shields.io/badge/License-MIT-yellow.svg",
    Apache: "[Apache License] https://img.shields.io/badge/License-Apache_2.0-blue.svg",
    GPL: "[GPL License] https://img.shields.io/badge/License-GPLv3-blue.svg",
  };

  if (licenseBadges.hasOwnProperty(license)) {
    return licenseBadges[license];
  } else {
    return 'Unknown License';
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    MIT: "https://opensource.org/licenses/MIT",
    Apache: "https://opensource.org/licenses/Apache-2.0",
    GNU: "https://www.gnu.org/licenses/gpl-3.0",
  };

  if (licenseLinks.hasOwnProperty(license)) {
    return licenseLinks[license];
  } else {
    return 'Unknown License';
  }
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, badge, link) {
 return `
 ## License
 This project is licensed under the [${license}](${link}) license.
 
 ${badge}`
}

// function that generates markdown for license section in ReadMe file
function generateMarkdown(license) {
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);
  const licenseSection = renderLicenseSection(license, badge, link);

  return licenseSection;
}

module.exports = {generateMarkdown};
