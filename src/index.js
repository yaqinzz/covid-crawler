const express = require('express')
const axios = require('axios')
const xlsx = require('xlsx')
const fs = require('fs')

const app = express()
const PORT = 3000

// Route untuk memulai crawling
app.get('/crawl', async (req, res) => {
	try {
		// URL yang akan di-crawl
		const url = 'https://disease.sh/v3/covid-19/historical/all?lastdays=all'

		// Mengirim request HTTP ke website
		const { data } = await axios.get(url)

		// Simpan hasil crawling ke dalam file JSON
		fs.writeFileSync(
			'data/results.json',
			JSON.stringify(data, null, 2),
			'utf-8'
		)
		// Memformat data untuk disimpan ke dalam Excel
		const formattedData = []

		// Mengubah objek data menjadi array dengan mengekstrak key dan value
		for (let date in data.cases) {
			formattedData.push({
				date: date,
				cases: data.cases[date],
				deaths: data.deaths[date],
				recovered: data.recovered[date],
			})
		}

		// Buat workbook baru
		const workbook = xlsx.utils.book_new()

		// Mengkonversi JSON yang sudah diformat ke worksheet
		const worksheet = xlsx.utils.json_to_sheet(formattedData)

		// Menambahkan worksheet ke workbook
		xlsx.utils.book_append_sheet(workbook, worksheet, 'Crawled Data')

		// Menyimpan workbook ke file Excel
		xlsx.writeFile(workbook, 'data/results.xlsx')

		// Mengirim respon bahwa crawling berhasil dan hasil disimpan
		res.json({
			message: 'Crawling success! Data saved to results.json',
			data: data,
			dataFormatted: formattedData,
		})
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'Crawling failed', error: error.message })
	}
})

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
})
