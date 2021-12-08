import React from "react";
const path = require("path");
const fs = require("fs");

const Default = ({ __html }) => {
  return <div dangerouslySetInnerHTML={{ __html }} />;
};

export default Default;

export async function getStaticProps() {
  const rootDir = process.cwd();
  const __html = fs.readFileSync(
    path.join(rootDir, "website", "website__content.html"),
    "utf-8"
  );
  return { props: { __html } };
}
