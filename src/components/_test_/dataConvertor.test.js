import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { convertDate } from "../../hooks/dateConvertor";

afterEach(() => {
  cleanup();
});

it("it converts unix time", async () => {
  const timeSample = "1173923446";
  const data = await convertDate(timeSample);
  expect(data).toEqual("15 years");
});
