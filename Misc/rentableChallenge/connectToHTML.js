
function getRandomBook() {
  const books = ['The Ring', 'The Shining', 'Neuromancer'];
  const randomIndex = Math.floor(Math.random() * 3);

  return books[randomIndex];
}

for (let i = 0; i < 200; i++) {
  console.log(`random book: ${getRandomBook()}`);
}

const obj = {
  "declaration": {
    "attributes": {
      "version": "1.0",
      "encoding": "utf-8"
    }
  },
  "elements": [
    {
      "type": "element",
      "name": "soap:Envelope",
      "attributes": {
        "xmlns:soap": "http://www.w3.org/2003/05/soap-envelope",
        "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
        "xmlns:xsd": "http://www.w3.org/2001/XMLSchema"
      },
      "elements": [
        {
          "type": "element",
          "name": "soap:Body",
          "elements": [
            {
              "type": "element",
              "name": "GetResidentDataResponse",
              "attributes": {
                "xmlns": "http://tempuri.org/YSI.Interfaces.WebServices/ItfResidentData"
              },
              "elements": [
                {
                  "type": "element",
                  "name": "GetResidentDataResult",
                  "elements": [
                    {
                      "type": "element",
                      "name": "MITS-ResidentData",
                      "attributes": {
                        "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                        "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
                        "xmlns": ""
                      },
                      "elements": [
                        {
                          "type": "element",
                          "name": "Summary",
                          "elements": [
                            {
                              "type": "element",
                              "name": "GenerationTimeStamp",
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "2023-12-20T20:55:41"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "SourceOrganization",
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "Yardi Systems, Inc."
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "TotalLeaseFiles",
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "1"
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "name": "TotalTenants",
                              "elements": [
                                {
                                  "type": "text",
                                  "text": "1"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "name": "LeaseFiles",
                          "elements": [
                            {
                              "type": "element",
                              "name": "LeaseFile",
                              "elements": [
                                {
                                  "type": "element",
                                  "name": "Identification",
                                  "attributes": {
                                    "IDValue": "t0000001",
                                    "IDType": "Past"
                                  }
                                },
                                {
                                  "type": "element",
                                  "name": "Property",
                                  "elements": [
                                    {
                                      "type": "element",
                                      "name": "Identification",
                                      "attributes": {
                                        "IDValue": "rentabl1"
                                      }
                                    },
                                    {
                                      "type": "element",
                                      "name": "MarketingName",
                                      "elements": [
                                        {
                                          "type": "text",
                                          "text": "Rentable Security Deposits Test Property #1"
                                        }
                                      ]
                                    },
                                    {
                                      "type": "element",
                                      "name": "LegalName",
                                      "elements": [
                                        {
                                          "type": "text",
                                          "text": "Rentable Security Deposits Test Property #1"
                                        }
                                      ]
                                    },
                                    {
                                      "type": "element",
                                      "name": "Address",
                                      "attributes": {
                                        "AddressType": "property"
                                      },
                                      "elements": [
                                        {
                                          "type": "element",
                                          "name": "AddressLine1",
                                          "elements": [
                                            {
                                              "type": "text",
                                              "text": "100 West Channel Road"
                                            }
                                          ]
                                        },
                                        {
                                          "type": "element",
                                          "name": "City",
                                          "elements": [
                                            {
                                              "type": "text",
                                              "text": "Santa Monica"
                                            }
                                          ]
                                        },
                                        {
                                          "type": "element",
                                          "name": "State",
                                          "elements": [
                                            {
                                              "type": "text",
                                              "text": "CA"
                                            }
                                          ]
                                        },
                                        {
                                          "type": "element",
                                          "name": "PostalCode",
                                          "elements": [
                                            {
                                              "type": "text",
                                              "text": "90402"
                                            }
                                          ]
                                        },
                                        {
                                          "type": "element",
                                          "name": "Country",
                                          "elements": [
                                            {
                                              "type": "text",
                                              "text": "United States"
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "type": "element",
                                  "name": "Unit",
                                  "elements": [
                                    {
                                      "type": "element",
                                      "name": "Identification",
                                      "attributes": {
                                        "IDValue": "218"
                                      }
                                    },
                                    {
                                      "type": "element",
                                      "name": "UnitType",
                                      "elements": [
                                        {
                                          "type": "text",
                                          "text": "ut002385"
                                        }
                                      ]
                                    },
                                    {
                                      "type": "element",
                                      "name": "UnitTypeDescription",
                                      "elements": [
                                        {
                                          "type": "text",
                                          "text": "2 Bedroom 2 Bath"
                                        }
                                      ]
                                    },
                                    {
                                      "type": "element",
                                      "name": "UnitTypeRent",
                                      "elements": [
                                        {
                                          "type": "text",
                                          "text": "1300"
                                        }
                                      ]
                                    },
                                    {
                                      "type": "element",
                                      "name": "UnitTypeSquareFeet",
                                      "elements": [
                                        {
                                          "type": "text",
                                          "text": "1600"
                                        }
                                      ]
                                    },
                                    {
                                      "type": "element",
                                      "name": "UnitBedrooms",
                                      "elements": [
                                        {
                                          "type": "text",
                                          "text": "2"
                                        }
                                      ]
                                    },
                                    {
                                      "type": "element",
                                      "name": "UnitBathrooms",
                                      "elements": [
                                        {
                                          "type": "text",
                                          "text": "2.000000"
                                        }
                                      ]
                                    },
                                    {
                                      "type": "element",
                                      "name": "SquareFootType",
                                      "elements": [
                                        {
                                          "type": "text",
                                          "text": "internal"
                                        }
                                      ]
                                    },
                                    {
                                      "type": "element",
                                      "name": "UnitRent",
                                      "elements": [
                                        {
                                          "type": "text",
                                          "text": "1300.00"
                                        }
                                      ]
                                    },
                                    {
                                      "type": "element",
                                      "name": "UnitSquareFeet",
                                      "elements": [
                                        {
                                          "type": "text",
                                          "text": "1600"
                                        }
                                      ]
                                    },
                                    {
                                      "type": "element",
                                      "name": "UnitEconomicStatus",
                                      "elements": [
                                        {
                                          "type": "text",
                                          "text": "Residential"
                                        }
                                      ]
                                    },
                                    {
                                      "type": "element",
                                      "name": "UnitOccupancyStatus",
                                      "elements": [
                                        {
                                          "type": "text",
                                          "text": "vacant"
                                        }
                                      ]
                                    },
                                    {
                                      "type": "element",
                                      "name": "UnitLeasedStatus",
                                      "elements": [
                                        {
                                          "type": "text",
                                          "text": "available"
                                        }
                                      ]
                                    },
                                    {
                                      "type": "element",
                                      "name": "Address",
                                      "attributes": {
                                        "AddressType": "mailing"
                                      },
                                      "elements": [
                                        {
                                          "type": "element",
                                          "name": "Description",
                                          "elements": [
                                            {
                                              "type": "text",
                                              "text": "Unit"
                                            }
                                          ]
                                        },
                                        {
                                          "type": "element",
                                          "name": "AddressLine1",
                                          "elements": [
                                            {
                                              "type": "text",
                                              "text": "100 West Channel Road 218"
                                            }
                                          ]
                                        },
                                        {
                                          "type": "element",
                                          "name": "City",
                                          "elements": [
                                            {
                                              "type": "text",
                                              "text": "Santa Monica"
                                            }
                                          ]
                                        },
                                        {
                                          "type": "element",
                                          "name": "State",
                                          "elements": [
                                            {
                                              "type": "text",
                                              "text": "CA"
                                            }
                                          ]
                                        },
                                        {
                                          "type": "element",
                                          "name": "PostalCode",
                                          "elements": [
                                            {
                                              "type": "text",
                                              "text": "90402"
                                            }
                                          ]
                                        },
                                        {
                                          "type": "element",
                                          "name": "Country",
                                          "elements": [
                                            {
                                              "type": "text",
                                              "text": "United States"
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

would become this more simplified newObj:

const newObj = {
  "Ledger":{
    "Transaction": {
      "TransID": "600044792"
    }
  }
}


I want you to create a function in javascript that takes a json file, like the one I've attached:

and flattens it into an object where each object in the 'elements' arrays are scanned for a 'type' field, and if the value of the 'type' field is 'element' then the value of the sibling 'name' field becomes a key within the new object we're creating, and if there are subsequent nested 'elements' arrays with this pattern, they become nested objects( a new object becomes the value for the 'name' field and so on). This can be a recursive process, and when an object in the 'elements' array has a 'type' field whose value is 'text' then use the sibling 'text' field's value in this same object as the value for the 'name' field's value that is a sibling of the elements array. Do this until the entire json file is converted into a flatter object of key(elements[n].name): value(elements[n].elements[n].text). Something similar to this.

Given this logic, the following obj object:

const obj = {
  "type": "element",
  "name": "Ledger",
  "elements": [
    {
      "type": "element",
      "name": "Transaction",
      "elements": [
        {
          "type": "element",
          "name": "TransID",
          "elements": [
            {
              "type": "text",
              "text": "600044792"
            }
          ]
        },
      ],
    },
  ],
}

would become this more simplified newObj:

const newObj = {
  "Ledger": {
    "Transaction": {
      "TransID": "600044792"
    }
  }
}