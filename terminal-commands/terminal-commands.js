const fs = require('fs');

module.exports.ls = () => {
	fs.readdir('./', (err, files) => {
		const filesToString = files.reduce((acc, files) => {
			return `${acc} ${file} `;
		}, '');

		console.log(filesToString);
	});
};


module.exports.touch = (fileName, data) => {
    fs.writeFile(fileName, data, 'utf8', (err) => {
    	if (err) throw err;
    	console.log(`${fileName} created.`)
    });
};


module.exports.mkdir = (folderName) => {
	fs.mkdir(folderName, (err) => {
		if (err) throw err;
		console.log(`${folderName} folder created.`)
	});
};
