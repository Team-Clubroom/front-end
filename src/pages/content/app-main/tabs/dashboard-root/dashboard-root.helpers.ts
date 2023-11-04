export interface AddEmployerFormValues {
  employerName: string;
  establishmentDate: string;
  industry: string;
  registrationNumber: string;
  address: string;
  employerEmail: string;
  employerPhone: string;
  employerWebsite: string;
  ownershipStructure: string;
}

export const addEmployerEmptyForm: AddEmployerFormValues = {
  employerName: "",
  establishmentDate: "",
  industry: "",
  registrationNumber: "",
  address: "",
  employerEmail: "",
  employerPhone: "",
  employerWebsite: "",
  ownershipStructure: "",
};

export function validateAddEmployerForm(
  formValues: AddEmployerFormValues,
): string {
  const {
    employerName,
    establishmentDate,
    industry,
    registrationNumber,
    address,
    employerEmail,
    employerPhone,
    employerWebsite,
    ownershipStructure,
  } = formValues;

  if (!employerName.trim()) {
    return "Please enter name of employer.";
  }

  // TODO: Add validation for date of establishment
  if (!establishmentDate.trim()) {
    return "Please enter date of establishment.";
  }

  // TODO: Add validation for industry
  if (!industry.trim()) {
    return "Please enter industry of business.";
  }

  // TODO: Add validation for registration number
  if (!registrationNumber.trim()) {
    return "Please enter industry of business.";
  }

  // TODO: Add validation for address
  if (!address.trim()) {
    return "Please enter industry of business.";
  }

  if (!employerEmail.trim()) {
    return "Please enter employer email address.";
  } else if (!/^\S+@\S+\.\S+$/.test(employerEmail)) {
    return "Please enter a valid email address.";
  }

  // TODO: Add validation for employer phone
  if (!employerPhone.trim()) {
    return "Please enter employer phone number.";
  }

  // TODO: Add validation for employer website
  if (!employerWebsite.trim()) {
    return "Please enter website of employer.";
  }

  // TODO: Add validation for ownership structure
  if (!ownershipStructure.trim()) {
    return "Please enter ownership structure.";
  }

  return "";
}
