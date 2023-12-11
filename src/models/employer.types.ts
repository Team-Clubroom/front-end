export interface Employer {
  id: string;
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
  bankruptcyDate?: string;
  industrySectorCode: number;
  status: string;
  legalStatus: string;
}

export interface AddEmployerAction {
  type: "Add";
  payload: { newEmployer: Employer };
}

export interface DeleteEmployerAction {
  type: "Delete";
  payload: { id: string };
}

export interface EditEmployerAction {
  type: "Edit";
  payload: { updatedEmployer: Employer };
}

export type EmployerAction =
  | AddEmployerAction
  | DeleteEmployerAction
  | EditEmployerAction;

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
  employer_id: string;
} & Partial<NewEmployerRequest>;

export interface NameChangeRequest {
  old_employer_id: string;
  new_employer_name: string;
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

export interface DeleteEmployerRequest {
  employer_id: string;
}
