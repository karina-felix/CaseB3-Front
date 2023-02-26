const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
    ],
    target: "https://localhost:44372",
    secure: false
  },
  {
    context: [
      "/consulta-cdb",
    ],
    target: "https://localhost:44372",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
