export type HonorRegistrationResponse = {
  name: string;
  dong_name: string;
  honor_number: number;
  resident_number: string;
  address: string;
  detail_address: string;
  deposit_type: string;
  bank_list: string;
  depositor_name: string;
  account_number: string;
  new_reason: string;
  transfer_date: string;
  notes: string;
};

export type HonorRegistrationRequest = {
  name: string;
  dong_name: string;
  honor_number: number;
  resident_number: string;
  address: string;
  detail_address: string;
  deposit_type: string;
  bank_list: string;
  depositor_name: string;
  account_number: string;
  new_reason: string;
  transfer_date: string;
  notes: string;
};

export type HonorResponse = {
  name: string;
  dong_name: string;
  honor_number: number;
  resident_number: string;
  address: string;
  detail_address: string;
  deposit_type: string;
  bank_list: string;
  depositor_name: string;
  account_number: string;
  new_reason: string;
  transfer_date: string;
  notes: string;
};
