import type { Employee } from "../types/Employee";

const BASE_URL =
  "https://backend-employees-nhwg.onrender.com/api/employees";

export const getEmployees = async (): Promise<Employee[]> => {
  const res = await fetch(BASE_URL);
  return res.json();
};