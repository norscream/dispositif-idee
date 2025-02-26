
export type ContactFormData = {
  fullName: string;
  email: string;
  phone?: string;
  region?: string;
  requestType: string;
  specificAction?: string;
  message: string;
};

export type SpecificOption = {
  value: string;
  label: string;
};
