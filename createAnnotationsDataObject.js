const fs = require("fs");
const path = require("path");
const svgToDataURL = require("svg-to-dataurl");

const dirPath = ".\\web\\images\\";
const fileNames = fs.readdirSync(dirPath);
const ANNOTATION_ICONS = {};

fileNames.forEach(fileName => {
  const key = fileName.replace("annotation-", "").replace(".svg", "");
  const filePath = path.join(dirPath, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const dataURL = svgToDataURL(fileContent);
  ANNOTATION_ICONS[key] = dataURL;
});

console.log("const ANNOTATION_ICONS = ", ANNOTATION_ICONS);
