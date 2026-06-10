import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname);
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/repayment_schedule_esign', async (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'json', 'repayment_schedule_esign.json');
    const rawData = await fs.readFile(dataPath, 'utf8');
    const scheduleData = JSON.parse(rawData);
    res.render('repayment_schedule_esign', scheduleData);
  } catch (error) {
    console.error('Failed to load repayment schedule JSON:', error);
    res.status(500).send('Unable to load repayment schedule.');
  }
});

app.get('/repayment_schedule_satin', async (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'json', 'repayment_schedule_esign.json');
    const rawData = await fs.readFile(dataPath, 'utf8');
    const scheduleData = JSON.parse(rawData);
    const renderData = {
      stampDuty: '',
      stampPaperNos: '',
      borrowerSignDate: '',
      coBorrowerName: '',
      coBorrowerSignDate: '',
      ...scheduleData,
    };
    res.render('repayment_schedule_satin', renderData);
  } catch (error) {
    console.error('Failed to load repayment schedule JSON for satin:', error);
    res.status(500).send('Unable to load repayment schedule.');
  }
});

app.get('/sanction_letter_english', async (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'json', 'sanction_letter_english.json');
    const rawData = await fs.readFile(dataPath, 'utf8');
    const sanctionData = JSON.parse(rawData);
    res.render('sanction_letter_english', sanctionData);
  } catch (error) {
    console.error('Failed to load sanction letter JSON:', error);
    res.status(500).send('Unable to load sanction letter.');
  }
});

app.get('/sanction_letter_marathi', (req, res) => {
  res.render('sanction_letter_marathi');
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
