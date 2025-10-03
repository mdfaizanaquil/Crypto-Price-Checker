const axios = require("axios");

// CoinGecko API URL for Ethereum price in USD
const API_URL = "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd";

async function checkPrice() {
    try {
        console.log("Fetching current ETH price...");

        const response = await axios.get(API_URL);
        const price = response.data.ethereum.usd;

        if (price) {
            console.log("\n--------------------------");
            console.log(`   Current ETH Price: $${price}`);
            console.log("--------------------------");
        } else {
            console.error("Could not retrieve price from API response.");
        }

    } catch (error) {
        console.error("❌ Error fetching price data:", error.message);
    }
}

checkPrice();
