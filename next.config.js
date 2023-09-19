const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/login',
        has: [
          {
            type: 'cookie',
            key: 'userId'
          },
          {
            type: 'cookie',
            key: 'idsrv'
          }
        ],
        permanent: false,
        destination: '/'
      },
      {
        source: '/',
        missing: [
          {
            type: 'cookie',
            key: 'userId'
          },
          {
            type: 'cookie',
            key: 'idsrv'
          }
        ],
        permanent: false,
        destination: '/login'
      },
    ]
  }
})