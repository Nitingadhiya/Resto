import TypeData from "./type-data";
import ServerVar from "../../../config/server-config";

export const ErrorObj = {
  address: "",
  weeks_until_exit: "",
  birthday: "",
  birthday_day: "",
  birthday_month: "",
  birthday_year: "",
  gender: "",
  work_experience: "",
  notes: "",
  wishes: "",
  job_seeking_status: "",
  satisfaction_with_current_employer: "",
  languages: null,
  locations_wanted: null,
  termsCond: null,
  ...TypeData[ServerVar.contactType],
  first_name: "",
  last_name: "",
  email: "",
  phone: ""
};
