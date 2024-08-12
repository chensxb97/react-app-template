const express = require('express')
const fs = require('fs')
const cors = require('cors')

const app = express()
const PORT = 3001

app.use(cors());
app.use(express.json())

app.get('/api/documentation/get', async (req, res) => {
    try {
        const filePath = './docs/example.md'
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err)
                return res.status(500).json({ error: 'Failed to read file' })
            }
            res.status(200).json({ content: data })
        })
    } catch (error) {
        console.error('Error processing request:', error)
        res.status(500).json({ error: 'Failed to process request' })
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})