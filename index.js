var fs = require('fs');

function convertThis() {
	var componentName = process.argv[2];
	var destination = process.argv[3] + componentName + '/';

	var htmlFilePath = destination + componentName + '.html';
	var htmlfileComment = '<!-- ' + componentName + ' component -->';

	var sassFilePath = destination + componentName + '.scss';
	var sassfileComment = '// ' + componentName + ' component';

	var jsFilePath = destination + componentName + '.js';
	var jsfileComment = '// ' + componentName + ' component';

	var testFolderPath = destination + 'test/';
	var testFilePath = testFolderPath + componentName + '_test.js';

	fs.mkdir(destination, function(error) {
	  if (error) throw error;

	  fs.writeFile(htmlFilePath, htmlfileComment, function (error) {
		  if (error) throw error;
		  console.log('html file saved');
		});

	  fs.writeFile(sassFilePath, sassfileComment, function (error) {
		  if (error) throw error;
		  console.log('sass file saved');
		});

		fs.writeFile(jsFilePath, jsfileComment, function (error) {
		  if (error) throw error;
		  console.log('js file saved');
		});

		fs.mkdir(testFolderPath, function(error) {
		  if (error) throw error;

		  fs.writeFile(testFilePath, '', function (error) {
			  if (error) throw error;
			  console.log('test file saved');
			});
		});
	});
}

module.exports.convert = convertThis;
