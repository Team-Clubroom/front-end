export interface Employer {
  id: number;
  name: string;
  address: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    zipCode: string;
  };
  foundedDate: string;
  dissolvedDate?: string;
  bankruptcyDate: string;
  industrySectorCode: number;
  status: string;
  legalStatus: string;
}

export interface NewEmployerRequest {
  employer_name: string;
  employer_founded_date: string;
  employer_dissolved_date?: string;
  employer_bankruptcy_date?: string;
  employer_industry_sector_code: number;
  employer_status: string;
  employer_legal_status: string;
  employer_addr_line_1: string;
  employer_addr_line_2?: string;
  employer_addr_city: string;
  employer_addr_state: string;
  employer_addr_zip_code: string;
}

export type EmployerEditRequest = {
  employer_id: number;
} & Partial<NewEmployerRequest>;

export interface NameChangeRequest {
  old_employer_id: string;
  new_employer_id: string;
  name_change_effective_date: string;
}

export interface SplitRelationRequest {
  company_a_id: string;
  company_b_id: string;
  company_c_id: string;
  employer_relation_start_date: string;
}

export interface MergeRelationRequest {
  company_a_id: string;
  company_b_id: string;
  company_c_id: string;
  employer_relation_start_date: string;
}
