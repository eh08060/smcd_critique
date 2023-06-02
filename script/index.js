import { studentInfo } from "./studentInfo.js";

document.title =
  studentInfo.성명 +
  " " +
  studentInfo.학번 +
  " " +
  studentInfo.평가연도
    .toString()
    .trim()
    .substring(2) +
  "년도 " +
  studentInfo.평가회차 +
  "차";
