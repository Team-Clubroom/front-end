export const INDUSTRY_SECTOR_CODES: Record<
  string,
  { name: string; color: string; shortName: string }
> = {
  "11": {
    name: "Agriculture, Forestry, Fishing and Hunting",
    color: "#FF0000",
    shortName: "Agri",
  },
  "21": {
    name: "Mining, Quarrying, and Oil and Gas Extraction",
    color: "#00FF00",
    shortName: "Mining",
  },
  "22": { name: "Utilities", color: "#0000FF", shortName: "Utilities" },
  "23": { name: "Construction", color: "#FFFF00", shortName: "Construction" },
  "31": { name: "Manufacturing", color: "#52804a", shortName: "Manu" },
  "32": { name: "Manufacturing", color: "#52804a", shortName: "Manu" },
  "33": { name: "Manufacturing", color: "#52804a", shortName: "Manu" },
  "42": { name: "Wholesale Trade", color: "#A52A2A", shortName: "Wholesale" },
  "44": { name: "Retail Trade", color: "#008080", shortName: "Retail" },
  "45": { name: "Retail Trade", color: "#008080", shortName: "Retail" },
  "48": {
    name: "Transportation and Warehousing",
    color: "#008000",
    shortName: "Transport",
  },
  "49": {
    name: "Transportation and Warehousing",
    color: "#800000",
    shortName: "Transport",
  },
  "51": { name: "Information", color: "#000080", shortName: "Info" },
  "52": {
    name: "Finance and Insurance",
    color: "#008000",
    shortName: "Finance",
  },
  "53": {
    name: "Real Estate and Rental and Leasing",
    color: "#800000",
    shortName: "Real Estate",
  },
  "54": {
    name: "Professional, Scientific, and Technical Services",
    color: "#000080",
    shortName: "Prof Serv",
  },
  "55": {
    name: "Management of Companies and Enterprises",
    color: "#800080",
    shortName: "Management",
  },
  "56": {
    name: "Administrative and Support and Waste Management and Remediation Services",
    color: "#A52A2A",
    shortName: "Admin",
  },
  "61": {
    name: "Educational Services",
    color: "#008080",
    shortName: "Education",
  },
  "62": {
    name: "Health Care and Social Assistance",
    color: "#FFFF00",
    shortName: "Health Care",
  },
  "71": {
    name: "Arts, Entertainment, and Recreation",
    color: "#FF00FF",
    shortName: "Arts",
  },
  "72": {
    name: "Accommodation and Food Services",
    color: "#a51c49",
    shortName: "Accommodation",
  },
  "81": {
    name: "Other Services (except Public Administration)",
    color: "#FFA500",
    shortName: "Other Services",
  },
  "92": {
    name: "Public Administration",
    color: "#A52A2A",
    shortName: "Public Admin",
  },
} as const;
