function generateComponentFile(componentName) {
   return `import React from 'react';
    export default function ${componentName} () {
      return (
        <div>
          <h1>${componentName} Page</h1>
          <p>Welcome to ${componentName}!</p>
        </div>
      );
    };
`;
}

module.exports = { generateComponentFile };
