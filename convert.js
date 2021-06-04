import replace from 'replace-in-file';

const options = {

    files: 'example/**/*',

    files: [
        'example/demo/**/*.js',
    ],

    from: /(import .* from\s+['"])(.*)(?=['"])|(export .* from\s+['"])(.*)(?=['"])/g,
    to: '$1$2$3$4.js',
};

replace(options)
    .then(changedFiles => {
        console.log('Modified files:', changedFiles.join(', '));
    })
    .catch(error => {
        console.error('Error occurred:', error);
    });