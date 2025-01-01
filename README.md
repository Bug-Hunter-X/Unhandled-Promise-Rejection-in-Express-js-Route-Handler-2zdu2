# Unhandled Promise Rejection in Express.js Route Handler

This example demonstrates a common error in Express.js applications: neglecting to handle promise rejections in asynchronous route handlers.  Without proper error handling, these rejections can lead to silent failures, making debugging difficult.  The solution shows how to implement robust error handling using async/await or .catch().