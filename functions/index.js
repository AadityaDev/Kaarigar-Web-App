/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// init admin firebase
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.sendInquiry = onRequest(async (request, response) => {
  try {
    logger.info("sendInquiry logs!", {structuredData: true});
    // eslint-disable-next-line no-var, max-len
    const {firstName, lastName, schoolName, email, mobile, message} = request.body;
    logger.info(`firstName: ${firstName}, lastName: ${lastName}, 
        schoolName: ${schoolName}, email: ${email}, mobile: ${mobile}, 
        message: ${message}`);
    if (request.method === "POST" && firstName != null && lastName !=null &&
        schoolName != null && email != null && mobile != null &&
        message != null) {
      const db = admin.database();
      const messageDetail = {
        firstName: firstName,
        lastName: lastName,
        schoolName: schoolName,
        email: email,
        mobile: mobile,
        message: message,
      };
      db.ref("messages").push(messageDetail);
      // response.send("sendInquiry from Firebase!");
      response.json({status: "ok"});
    } else {
      logger.info("error occured");
      response.status(403).send("error occured");
    }
  } catch (exception) {
    logger.info(exception.message);
    logger.error(exception);
  }
});
