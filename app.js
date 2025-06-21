const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const paramdb = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "lumiverseapp",
    dateStrings: true
};

const router = express.Router();

// Tambah rencana nonton (AddModel::insert)
router.post("/api/add", async (req, res) => {
    const { movie_title, place, watch_date, watch_with, price, note } = req.body;
    try {
        const db = await mysql.createConnection(paramdb);
        const sql = "INSERT INTO plan (movie_title, place, watch_date, watch_with, price, note) VALUES (?, ?, ?, ?, ?, ?)";
        const [result] = await db.execute(sql, [movie_title, place, watch_date, watch_with, price, note]);
        await db.end();
        res.status(200).json({ success: true, insertId: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ambil rencana selesai (HistoryModel::getDonePlans)
router.get("/api/history", async (req, res) => {
    try {
        const db = await mysql.createConnection(paramdb);
        const sql = "SELECT * FROM plan WHERE status = 1";
        const [rows] = await db.execute(sql);
        await db.end();
        res.status(200).json({ history: rows });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ambil rencana belum selesai (HomeModel::getPlans)
router.get("/api/plans", async (req, res) => {
    try {
        const db = await mysql.createConnection(paramdb);
        const sql = "SELECT * FROM plan WHERE status = 0";
        const [rows] = await db.execute(sql);
        await db.end();
        res.status(200).json({ plans: rows });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Hapus rencana (HomeModel::delete)
router.delete("/api/plan/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const db = await mysql.createConnection(paramdb);
        const sql = "DELETE FROM plan WHERE id = ?";
        await db.execute(sql, [id]);
        await db.end();
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Tandai rencana sebagai selesai (HomeModel::markAsDone)
router.put("/api/plan/:id/done", async (req, res) => {
    const { id } = req.params;
    try {
        const db = await mysql.createConnection(paramdb);
        const sql = "UPDATE plan SET status = 1 WHERE id = ?";
        await db.execute(sql, [id]);
        await db.end();
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.use("/", router);

app.listen(PORT, () => {
    console.log(`API server running at http://localhost:${PORT}`);
});
