import express from "express"

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Worlds")
})

app.get("/testanto-se-funfou-msm", (req, res) => {
    res.send("Oia só isso")
})


app.listen(3000, () => {
    console.log("APLICATIVO TA NO AR 🤖!")
})