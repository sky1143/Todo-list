import env from 'dotenv'
env.config();
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const app = express();
const port = process.env.PORT || 3000;


// Ensure required env variables exist
if (!process.env.PG_USER || !process.env.PG_HOST || !process.env.PG_DATABASE || !process.env.PG_PASSWORD || !process.env.PG_PORT) {
  console.error("❌ Missing PostgreSQL environment variables. Check your .env file.");
  process.exit(1); // Exit the app if database credentials are missing
}

const db = new pg.Client({
  user : process.env.PG_USER,
  host : process.env.PG_HOST,
  database : process.env.PG_DATABASE,
  password : process.env.PG_PASSWORD,
  port : process.env.PG_PORT
})
db.connect()

  .then(() => console.log("✅ Connected to PostgreSQL database"))
  .catch(err => {
    console.error("❌ Database connection error:", err);
    process.exit(1); // Exit if database connection fails
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

app.get("/",async (req, res) => {

  try { 
    const result = await db.query("SELECT * FROM items ORDER BY id ASC");
    items = result.rows;
    
    res.render("index.ejs", {
      listTitle: "Today's Tasks",
      listItems: items,
    });
  } catch (err) {
    console.error("❌ Error fetching items:", err);
    res.status(500).send("Internal Server Error");
  }
  
});



app.post("/add", async (req, res) => {
  const item = req.body.newItem;

  // Prevent inserting empty items
  if (!item) return res.redirect("/");

  try {
    await db.query("INSERT INTO items (title) VALUES ($1)", [item]);
    res.redirect("/");
  } catch (err) {
    console.error("❌ Error adding item:", err);
    res.status(500).send("Internal Server Error");
  }
})

app.post("/edit", async (req, res) => {
  const iitem = req.body.updatedItemTitle;
  const iid = req.body.updatedItemId;
  
  // Prevent updating if values are missing
  if (!iitem || !iid) return res.redirect("/");

  try {
    await db.query("UPDATE items SET title = $1 WHERE id = $2", [iitem, iid]);
    res.redirect("/");
  } catch (err) {
    console.error("❌ Error updating item:", err);
    res.status(500).send("Internal Server Error");
  }
});


app.post("/delete", async (req, res) => {
  const id = req.body.deleteItemId;

  // Prevent deleting if ID is missing
  if (!id) return res.redirect("/");

  try {
    await db.query("DELETE FROM items WHERE id = $1", [id]);
    res.redirect("/");
  } catch (err) {
    console.error("❌ Error deleting item:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
