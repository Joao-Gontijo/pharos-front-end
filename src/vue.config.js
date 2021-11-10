module.exports = {
    devServer: {
        port: 8080,
        proxy: {
            '/pharos': {
                target: 'http://localhost:8080',
                ws: true,
                changeOrigin: true
            }
        }
    }
}