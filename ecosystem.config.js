module.exports = {
    apps: [{
        name: 'test-task-server',
        script: 'src/index.js',
        watch: '.',
        ignore_watch: ['node_modules'],
    }]
};
