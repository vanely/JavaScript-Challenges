/** GOAL: create a python script that will retrieve and parse a tenant's ledger from Yardi and return their balance and if they are ready for disbursement.
 * A tenant can have two types of transactions:

    - Charges need to be paid by the tenant. They increase the balance.
    - Payments are made by the tenant. They decrease the balance.
    
 * There are two requirements for a tenant to be ready for disbursement:

    - The tenant must have an IDType of "Past"
    - The tenant must have a transaction with a Note that includes the substring ":Prog Gen"

 * If either of these criteria are not met, the tenant is not ready for disbursement.
 */


/**
 * data[xml-el][soap:envelope-el][soap-body-el][res-data-el][res-data-res-el][mits-el][lease-files-el][lease-file-el] === {unit, tenant, ledger: {transaction}}
 * 
 */

const { xml2json } = require('xml-js');
const fs = require('fs').promises;
const endpoint = 'http://integration.tryrentable.com/'
let jsonData;



async function writeToFile(filename, content) {
  try {
    await fs.writeFile(filename, content, 'utf8');
    console.log(`Successfully wrote to file ${filename}`);
  } catch (error) {
    console.error(`Error writing to file ${filename}:`, error);
  }
}

const fetchTenantData = async (url) => {
  const xmlData = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/xml'
    }
  })
  const res = await xmlData.text();
  jsonData = xml2json(res);
  // console.log(jsonData)
  // .then((res) => {
  //   if(res.ok) {
  //     return res.text();
  //   }
  // })
  // .then((data) => {
  //   // console.log(`fetched data\n${JSON.stringify(data.split('\n'), null, 2)}`);
    
  //   // const parsedXML = parseXml(data)
  //   try {
  //     jsonData = xml2json(data);
  //     // console.log(`JSON data:\n${JSON.stringify(JSON.parse(jsonData), null, 2)}`);
  //     // writeToFile('tenantData.json',JSON.stringify(JSON.parse(jsonData), null, 2));
  //     // console.log(`XML data:\n${data}`);
  //     return jsonData;
  //   } catch (err) {
  //     console.error(`Error Converting XML to JSON:\n${err}`);
  //   }
  // })
  // .catch((error) => console.error(`Error:\n${error}`))
}

const getTenantBalance = (data) => {
  const parsedData = JSON.parse(data)
  // console.log(`transaction:\n${data}`);
  //                                                                               resiData   leaseFiles  leaseFile   identification
  const tenantIDType = parsedData.elements[0].elements[0].elements[0].elements[0].elements[0].elements[1].elements[0].elements[0].attributes.IDType;
  const ledger = parsedData.elements[0].elements[0].elements[0].elements[0].elements[0].elements[1].elements[0].elements[11];
  const charges = ledger.map((transaction) => {
    const chargeAmountElement = transaction.elements.find((element) => element.name === 'ChargeAmount')
    return chargeAmountElement.elements[0].text
  })
  writeToFile('ledger.json', JSON.stringify(ledger, null, 2));
  console.log(`Tenant ID Type:\n${tenantIDType}`);
  console.log(`transaction:\n${JSON.stringify(ledger, null, 2)}`);
}

const getTenantDisbursementStatus = () => {

}

const getUnifiedTenantData = () => {

}

async function main() {
  const data = await fetchTenantData(endpoint);
  // console.log(`data:\n${data}`);
  const tenantBalance = await getTenantBalance(jsonData);
}

main()
