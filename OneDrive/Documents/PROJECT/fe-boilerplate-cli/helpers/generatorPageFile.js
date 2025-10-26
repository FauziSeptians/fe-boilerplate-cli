function generatePageFile(componentName, originalName) {
   return `import React from 'react';

      export default function ${componentName} () {
      return (
      <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">${componentName}</h1>
            <p className="text-gray-600">
            Welcome to the ${originalName} page!
            </p>
      </div>
      );
      };
`;
}

module.exports = { generatePageFile };
