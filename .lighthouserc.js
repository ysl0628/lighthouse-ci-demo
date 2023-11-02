module.exports = {
    ci: {
      assert: {
        collect: {
            url:"https://lighthouse-ci-demo.vercel.app/",
          },
        preset: "lighthouse:no-pwa",
        assertions: {
          "categories:performance": [
            "warn",
            { "aggregationMethod": "optimistic", "minScore": 0.93 }
          ],
          "categories:accessibility": [
            "error",
            { "aggregationMethod": "optimistic", "minScore": 0.95 }
          ]
        },
        upload: {
          target: 'temporary-public-storage',
        }
      }
    }
  }
  