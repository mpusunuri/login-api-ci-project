const app = require("./app");

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});