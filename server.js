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

app.get('/consent_letter_english', async (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'json', 'consent_letter_english.json');
    const rawData = await fs.readFile(dataPath, 'utf8');
    const consentData = JSON.parse(rawData);
    res.render('consent_letter_english', consentData);
  } catch (error) {
    console.error('Failed to load consent letter JSON:', error);
    res.status(500).send('Unable to load consent letter.');
  }
});

app.get('/demand_promissory_note_letter_english', async (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'json', 'demand_promissory_note_letter_english.json');
    const rawData = await fs.readFile(dataPath, 'utf8');
    const dpnData = JSON.parse(rawData);
    res.render('demand_promissory_note_letter_english', dpnData);
  } catch (error) {
    console.error('Failed to load demand promissory note JSON:', error);
    res.status(500).send('Unable to load demand promissory note.');
  }
});

app.get('/disbursal_request_form_letter_english', async (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'json', 'disbursal_request_form_letter_english.json');
    const rawData = await fs.readFile(dataPath, 'utf8');
    const drfData = JSON.parse(rawData);
    res.render('disbursal_request_form_letter_english', drfData);
  } catch (error) {
    console.error('Failed to load disbursal request form JSON:', error);
    res.status(500).send('Unable to load disbursal request form.');
  }
});

app.get('/disbursal_request_form_letter_marathi', async (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'json', 'disbursal_request_form_letter_marathi.json');
    const rawData = await fs.readFile(dataPath, 'utf8');
    const drfData = JSON.parse(rawData);
    res.render('disbursal_request_form_letter_marathi', drfData);
  } catch (error) {
    console.error('Failed to load Marathi disbursal request form JSON:', error);
    res.status(500).send('Unable to load disbursal request form.');
  }
});

app.get('/loan_agreement_english', async (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'json', 'loan_agreement_english.json');
    const rawData = await fs.readFile(dataPath, 'utf8');
    const loanAgreementData = JSON.parse(rawData);
    res.render('loan_agreement_english', loanAgreementData);
  } catch (error) {
    console.error('Failed to load loan agreement JSON:', error);
    res.status(500).send('Unable to load loan agreement.');
  }
});

app.get('/loan_application_form_english', async (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'json', 'loan_application_form_english.json');
    const rawData = await fs.readFile(dataPath, 'utf8');
    const applicationData = JSON.parse(rawData);
    res.render('loan_application_form_english', applicationData);
  } catch (error) {
    console.error('Failed to load loan application form JSON:', error);
    res.status(500).send('Unable to load loan application form.');
  }
});

app.get('/schedule_1_english', async (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'json', 'schedule_1_english.json');
    const rawData = await fs.readFile(dataPath, 'utf8');
    const scheduleData = JSON.parse(rawData);
    res.render('schedule_1_english', scheduleData);
  } catch (error) {
    console.error('Failed to load schedule 1 JSON:', error);
    res.status(500).send('Unable to load schedule 1.');
  }
});

app.get('/schedule_1_marathi', async (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'json', 'schedule_1_marathi.json');
    const rawData = await fs.readFile(dataPath, 'utf8');
    const scheduleData = JSON.parse(rawData);
    res.render('schedule_1_marathi', scheduleData);
  } catch (error) {
    console.error('Failed to load Marathi schedule 1 JSON:', error);
    res.status(500).send('Unable to load schedule 1.');
  }
});

app.get('/loan_agreement_marathi', async (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'json', 'loan_agreement_marathi.json');
    const rawData = await fs.readFile(dataPath, 'utf8');
    const loanAgreementData = JSON.parse(rawData);
    res.render('loan_agreement_marathi', loanAgreementData);
  } catch (error) {
    console.error('Failed to load Marathi loan agreement JSON:', error);
    res.status(500).send('Unable to load loan agreement.');
  }
});

app.get('/consent_letter_marathi', async (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'json', 'consent_letter_marathi.json');
    const rawData = await fs.readFile(dataPath, 'utf8');
    const consentData = JSON.parse(rawData);
    res.render('consent_letter_marathi', consentData);
  } catch (error) {
    console.error('Failed to load Marathi consent letter JSON:', error);
    res.status(500).send('Unable to load consent letter.');
  }
});

app.get('/sanction_letter_marathi', async (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'json', 'sanction_letter_marathi.json');
    const rawData = await fs.readFile(dataPath, 'utf8');
    const sanctionData = JSON.parse(rawData);
    res.render('sanction_letter_marathi', sanctionData);
  } catch (error) {
    console.error('Failed to load Marathi sanction letter JSON:', error);
    res.status(500).send('Unable to load sanction letter.');
  }
});

app.get('/loan_application_form_marathi', async (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'json', 'loan_application_form_marathi.json');
    const rawData = await fs.readFile(dataPath, 'utf8');
    const applicationData = JSON.parse(rawData);
    res.render('loan_application_form_marathi', applicationData);
  } catch (error) {
    console.error('Failed to load Marathi loan application form JSON:', error);
    res.status(500).send('Unable to load loan application form.');
  }
});



app.get('/agreement_marathi', async (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'json', 'agreement_marathi.json');
    const rawData = await fs.readFile(dataPath, 'utf8');
    const agreementData = JSON.parse(rawData);
    res.render('agreement_marathi', agreementData);
  } catch (error) {
    console.error('Failed to load agreement JSON:', error);
    res.status(500).send('Unable to load agreement.');
  }
});

app.get('/agreement_english', async (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'json', 'agreement_english.json');
    const rawData = await fs.readFile(dataPath, 'utf8');
    const agreementData = JSON.parse(rawData);
    res.render('agreement_english', agreementData);
  } catch (error) {
    console.error('Failed to load English agreement JSON:', error);
    res.status(500).send('Unable to load agreement.');
  }
});

app.get('/kfs_english', async (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'json', 'kfs_english.json');
    const rawData = await fs.readFile(dataPath, 'utf8');
    const kfsData = JSON.parse(rawData);
    res.render('kfs_english', kfsData);
  } catch (error) {
    console.error('Failed to load KFS JSON:', error);
    res.status(500).send('Unable to load Key Facts Statement.');
  }
});
app.get('/kfs_vehicle_loan_agreement_marathi', async (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'json', 'kfs_vehicle_loan_agreement_marathi.json');
    const rawData = await fs.readFile(dataPath, 'utf8');
    const kfsData = JSON.parse(rawData);
    res.render('kfs_vehicle_loan_agreement_marathi', kfsData);
  } catch (error) {
    console.error('Failed to load KFS Vehicle Loan Agreement Marathi JSON:', error);
    res.status(500).send('Unable to load KFS Vehicle Loan Agreement.');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
