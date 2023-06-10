async function getCheckoutPage(req, res) {
    try {
       res.json({
        success: true
       });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function checkout(req, res) {
    try {
        const sql = 'SELECT * FROM products';
        const results = await runQuery(sql);

        res.json(results);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getDeliveryPage(req, res) {
    try {
        res.json({
            success: true
           });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function confirmDelivery(req, res) {
    try {
        res.json({
            success: true
        });
          
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getConfirmOrder(req, res) {
    try {
        res.json({
            success: true
           });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = 
{
    getCheckoutPage: getCheckoutPage,
    checkout: checkout,
    getDeliveryPage: getDeliveryPage,
    confirmDelivery: confirmDelivery,
    getConfirmOrder: getConfirmOrder
}