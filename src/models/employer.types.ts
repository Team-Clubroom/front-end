export interface Employer {
  id: number;
  name: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    zipCode: string;
  };
  foundedDate: string;
  dissolvedDate: string;
  bankruptcyDate: string;
  industrySectorCode: number;
  status: string;
  legalStatus: string;
}
