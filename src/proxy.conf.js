const PROXY_CONFIG = [
  {
    context: [
      "/consulta-cdb",
    ],
    target: "https://localhost:44372",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
