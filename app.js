// ignoring header code
// ...

/** --- IDEAS ---
 * user auth:
 * - login/logout
 * - update account info
 * - view acc info
 * 
 * menu:
 * - get all 
 * - get menu by category
 * - get menu item by id
 * 
 * orders:
 * - get all orders
 * - get active orders
 * - get past orders
 * - get order by id
 * - send order (list of menu items and payment attached)
 * 
 * payment:
 * - show payment methods
 * - add payment method
 * - delete payment method
 * 
 * offers:
 * - get all coupons/offers
 */

/* Let user log into their account or create a new account */ 
app.post('/login', loginOrCreateUser);

exports.loginOrCreateUser = (req, res) => {
  /**
   * get user token from req and verify integrity, ideally
   * using something like googleapi to not handle security ourselves.
   * Googleapi should return user info after successful verification.
   */
  res.json(
    loginOrCreateUser(...googleRes)
  );
}

function loginOrCreateUser(email, name, avatarUrl) {
  /**
   * check db for existing email, if exists, establish session.
   * If not, create db entry with provided userdata.
   */

  // return user session
}

/* Get menu items */
app.get('/menu/:category/:id', getMenuItems);

exports.getMenuItems = (req, res) => {
  res.json(
    getMenuItems(...req)
  );
}

function getMenuItems(category, id) {
  /**
   * retrieve menu items from the database, filtered by category if
   * applicable, or if ID is provided, retrieve specific item
   */

  // return the menu item(s)
}

/* Get orders for user */
app.get('/orders', getAllOrders);

exports.getAllOrders = (req, res) => {
  res.json(
    getAllOrders(...req)
  );
}

function getAllOrders(uuid, dateRange) {
  /**
   * retrieve all orders from db within the optional dateRange that
   * belong to user with uuid. This includes past and active
   * submitted orders.
   */

  // return orders list
}

/* Get order by order ID */
app.get('/order/:id', getOrderById);

exports.getOrderById = (req, res) => {
  res.json(
    getOrderById(...req)
  );
}

function getOrderById(uuid, orderId) {
  /**
   * check db if orderId belongs to that user, if not, check if user
   * has elevated permissions to get the order (e.g. manager)
   */

  // return order object
}

/* Send order after user finishes selecting menu items */
app.post('/submit-order', submitOrder);

exports.submitOrder = (req, res) => {
  /**
   * this is called after payment info is already added to the order.
   * This API should connect to restaurant POS system's API to make order
   */
  res.json(
    submitOrder(...req)
  );
}

function submitOrder(orderId, menuItemIds, paymentData) {
  /**
   * saves order info to db, paymentData should be obfuscated using
   * third party system such as Stripe. PaymentData has receipt info.
   */

  // return confirmation data
}

/* Get saved payment methods */
app.get('/payment-methods', getPaymentMethods);

exports.getPaymentMethods = (req, res) => {
  const stripeIds = getPaymentMethods(...req);
  /**
   * access db first to grab saved stripe paymentmethod ids,
   * then call their API to retrieve saved billing details, etc
   * and pass to front end.
   */
  res.json(stripeRes);
}

function getPaymentMethods(uuid) {
  /**
   * get saved payment methods from db associated with user id
   */

  // return list of stripe payment methods
}

/* Add payment method to user */
app.post('/add-payment-method', addPaymentMethod);

exports.addPaymentMethod = (req, res) => {
  /**
   * call stripe API using req headers to verify payment details,
   * pass payment id from stripe to our database.
   */
  res.json(
    addPaymentMethod(...stripeRes)
  )
}

function addPaymentMethod(uuid, paymentId) {
  /**
   * save stripe paymentId to database on associated user id
   */

  // return success status, error status, etc
}

/* Delete a payment method for a user */
app.delete('/delete-payment-method', deletePaymentMethod);

exports.deletePaymentMethod = (req, res) => {
  /**
   * call stripe API to delete the payment method on their end,
   * then delete the associated payment id in the database on our end.
   */
  res.json(
    deletePaymentMethod(...req)
  );
}

function deletePaymentMethod(uuid, stripeId) {
  /**
   * delete the stripe paymentmethod id associated with the user id.
   */

  // return success if deleted correctly, otherwise error msg
}

/* Get offers/coupons associated with user account */
app.get('/offers', getOffersByUser);

exports.getOffersByUser = (req, res) => {
  res.json(
    getOffersByUser(...req)
  );
}

function getOffersByUser(uuid) {
  /**
   * get coupons, offers associated with user id.
   */

  // return offers object
}

// ...
// ignoring footer code
