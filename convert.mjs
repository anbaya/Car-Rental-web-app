import fs from 'fs';
import path from 'path';

const htmlFile = './homepage-mockup.html';
const htmlContent = fs.readFileSync(htmlFile, 'utf8');

// 1. Extract CSS
const styleMatch = htmlContent.match(/<style>([\s\S]*?)<\/style>/);
if (styleMatch) {
  const styles = styleMatch[1];
  
  // We will preserve the variables in globals.css, but add everything else.
  // We can just append the whole CSS to globals.css
  let globalsCSS = fs.readFileSync('./src/app/globals.css', 'utf8');
  
  // Replace the base variables block if it exists
  globalsCSS = globalsCSS + '\n' + styles;
  
  fs.writeFileSync('./src/app/globals.css', globalsCSS, 'utf8');
  console.log('CSS extracted and appended to globals.css');
}

// 2. Extract sections
const bodyMatch = htmlContent.match(/<body>([\s\S]*?)<script>/);
if (bodyMatch) {
  let bodyContent = bodyMatch[1];
  
  // Convert HTML to JSX
  bodyContent = bodyContent.replace(/class=/g, 'className=');
  bodyContent = bodyContent.replace(/for=/g, 'htmlFor=');
  bodyContent = bodyContent.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
  
  // Self close tags
  bodyContent = bodyContent.replace(/<img(.*?)>/g, (match) => {
    if (match.endsWith('/>')) return match;
    return match.slice(0, -1) + ' />';
  });
  bodyContent = bodyContent.replace(/<br>/g, '<br />');
  bodyContent = bodyContent.replace(/<hr>/g, '<hr />');
  bodyContent = bodyContent.replace(/<input(.*?)>/g, (match) => {
    if (match.endsWith('/>')) return match;
    return match.slice(0, -1) + ' />';
  });
  
  // Fix inline styles
  bodyContent = bodyContent.replace(/style="([^"]*)"/g, (match, styleString) => {
    const properties = styleString.split(';').filter(Boolean);
    const styleObj = {};
    properties.forEach(prop => {
      const [key, value] = prop.split(':').map(s => s.trim());
      if (key && value) {
        const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
        styleObj[camelKey] = value;
      }
    });
    return `style={${JSON.stringify(styleObj)}}`;
  });

  fs.writeFileSync('./extracted-jsx.txt', bodyContent, 'utf8');
  console.log('JSX extracted to extracted-jsx.txt');
}
