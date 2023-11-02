module.exports = {
    ci: {
      assert: {
        collect: {
          url:process.env.CI === 'production' ? "https://lighthouse-ci-demo.vercel.app/" : "http://localhost:3000",
          startServerCommand: process.env.CI === 'production' ? undefined :"npm run dev"
          },
        preset: "lighthouse:no-pwa",
        assertions: {
          "categories:performance": [
            "warn",
            { "aggregationMethod": "optimistic", "minScore": 0.75 }
          ],
          "categories:accessibility": [
            "error",
            { "aggregationMethod": "optimistic", "minScore": 0.6 }
          ]
        },
        upload: {
          target: 'temporary-public-storage',
        }
      }
    }
  }
  