import mysql2 from "mysql2";
import "dotenv/config";

const db = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const setStatus = (device, status) => {
    try {
        const q = `UPDATE devices SET status = ?, updated_at = NOW() WHERE body = ?`;
        db.query(q, [status, String(device)], (err) => {
            if (err) console.error("setStatus error:", err.message, "device=", device, "status=", status);
            else console.log("setStatus OK:", device, "->", status);
        });
        return true;
    } catch (error) {
        console.error("setStatus exception:", error.message);
        return false;
    }
}

function dbQuery(query) {
    return new Promise(data => {
        db.query(query, (err, res) => {
            if (err) {
                console.error("DB Query Error:", err.message);
                data([]);
                return;
            }
            try {
                data(res);
            } catch (error) {
                data([]);
            }
        })
    })
}

export { setStatus, dbQuery, db };
