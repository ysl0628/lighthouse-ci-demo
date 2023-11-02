module.exports = {
    "ci": {
      "assert": {
        "collect": {
            "url":process.env.NODE_ENV === 'production' ? "https://lighthouse-ci-demo.vercel.app/" : "http://localhost:3000",
            "startServerCommand": process.env.NODE_ENV === 'production' ? undefined :"npm run dev"
          },
        "preset": "lighthouse:no-pwa",
        "assertions": {
          "categories:performance": [
            "warn",
            { "aggregationMethod": "optimistic", "minScore": 0.93 }
          ],
          "categories:accessibility": [
            "error",
            { "aggregationMethod": "optimistic", "minScore": 0.95 }
          ]
        },
        "upload": {
          "target": 'temporary-public-storage',
        }
      }
    }
  }
  