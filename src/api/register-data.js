import TypeData from "./type-data";
import GlobalVar from "../global";

const RegisterObj = {
  user_id: "",
  address: "",
  weeks_until_exit: "",
  birthday: "",
  birthday_day: "",
  birthday_month: "",
  birthday_year: "",
  gender: "",
  work_experience: "",
  notes: "",
  job_motivation: "",
  wishes: "",
  job_seeking_status: "",
  satisfaction_with_current_employer: "",
  languages: [],
  locations_wanted: [],
  termsCond: [],
  //...TypeData[GlobalVar.contactType][GlobalVar.country],
  agreement: ["agree"],
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  phone_country_code: "de"
};

export default RegisterObj;
