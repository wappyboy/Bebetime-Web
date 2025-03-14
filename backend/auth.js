const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json"); // Download from Firebase console

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Unauthorized" });

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        req.user = decodedToken;
        next();
    } catch (error) {
        res.status(401).json({ error: "Invalid Token" });
    }
};

module.exports = verifyToken;
