const API_URLS = {
    bitcoin: 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD',
    ethereum: 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD',
    bnb: 'https://min-api.cryptocompare.com/data/price?fsym=BNB&tsyms=USD',
    usdt: 'https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=USD',
    trx: 'https://min-api.cryptocompare.com/data/price?fsym=TRX&tsyms=USD',
};

// Variables para almacenar los precios anteriores
let lastPrices = {
    bitcoin: null,
    ethereum: null,
    bnb: null,
    usdt: null,
    trx: null
};

function updatePriceColor(id, newPrice, lastPrice) {
    const priceElement = document.getElementById(id);
    
 
    if (lastPrice !== null) {
        if (newPrice > lastPrice) {
            priceElement.style.color = '#90EE90'; 
        } else if (newPrice < lastPrice) {
            priceElement.style.color = 'red'; 
        }
    } else {
        priceElement.style.color = 'white'; 
    }
    
    // Actualizar el precio
    priceElement.innerText = `$${newPrice.toFixed(2)}`;
}

function fetchPrices() {
    Promise.all([
        fetch(API_URLS.bitcoin).then(res => res.json()),
        fetch(API_URLS.ethereum).then(res => res.json()),
        fetch(API_URLS.bnb).then(res => res.json()),
        fetch(API_URLS.usdt).then(res => res.json()),
        fetch(API_URLS.trx).then(res => res.json())
    ])
    .then(([btcData, ethData, bnbData, usdtData, trxData]) => {
        updatePriceColor('btc-price', btcData.USD, lastPrices.bitcoin);
        updatePriceColor('eth-price', ethData.USD, lastPrices.ethereum);
        updatePriceColor('bnb-price', bnbData.USD, lastPrices.bnb);
        updatePriceColor('usdt-price', usdtData.USD, lastPrices.usdt);
        updatePriceColor('trx-price', trxData.USD, lastPrices.trx);

        // Actualizar precios anteriores
        lastPrices.bitcoin = btcData.USD;
        lastPrices.ethereum = ethData.USD;
        lastPrices.bnb = bnbData.USD;
        lastPrices.usdt = usdtData.USD;
        lastPrices.trx = trxData.USD;
    })
    .catch(() => {
        // Mantener el último precio conocido en caso de error
        const btcPriceElement = document.getElementById('btc-price');
        const ethPriceElement = document.getElementById('eth-price');
        const bnbPriceElement = document.getElementById('bnb-price');
        const usdtPriceElement = document.getElementById('usdt-price');
        const trxPriceElement = document.getElementById('trx-price');
        
        btcPriceElement.innerText = lastPrices.bitcoin !== null ? `$${lastPrices.bitcoin.toFixed(2)}` : 'Error';
        ethPriceElement.innerText = lastPrices.ethereum !== null ? `$${lastPrices.ethereum.toFixed(2)}` : 'Error';
        bnbPriceElement.innerText = lastPrices.bnb !== null ? `$${lastPrices.bnb.toFixed(2)}` : 'Error';
        usdtPriceElement.innerText = lastPrices.usdt !== null ? `$${lastPrices.usdt.toFixed(2)}` : 'Error';
        trxPriceElement.innerText = lastPrices.trx !== null ? `$${lastPrices.trx.toFixed(2)}` : 'Error';
        
        btcPriceElement.style.color = 'black';
        ethPriceElement.style.color = 'black';
        bnbPriceElement.style.color = 'black';
        usdtPriceElement.style.color = 'black';
        trxPriceElement.style.color = 'black';
    });
}

// Fetch prices initially
fetchPrices();


setInterval(fetchPrices, 10000);
