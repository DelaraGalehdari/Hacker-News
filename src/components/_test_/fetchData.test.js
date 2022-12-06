import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { fetchStories, fetchUserData } from "../../hooks/fetchData";

afterEach(() => {
  cleanup();
});

it("fetch stories", async () => {
  const ids = [33830066, 33830041];
  const data = await fetchStories(ids);
  const res = [
    {
      by: "robin_reala",
      descendants: 0,
      id: 33830066,
      score: 2,
      time: 1669987085,
      title: "Visual Studio Code: Remote Code Execution",
      type: "story",
      url: "https://github.com/google/security-research/security/advisories/GHSA-pw56-c55x-cm9m",
    },
    {
      by: "henshawt",
      descendants: 1,
      id: 33830041,
      kids: [33830042],
      score: 1,
      time: 1669986957,
      title: "Multipart Upload of Large Files to AWS S3 with Node.js",
      type: "story",
      url: "https://medium.com/@samuelhenshaw2020/multipart-upload-of-large-files-to-aws-s3-with-nodejs-2810b1a9f719",
    },
  ];
  expect(data).toEqual(res);
});
