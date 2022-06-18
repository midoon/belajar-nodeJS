import fs from "fs";

export const writeFiles = (file, content) => {
  fs.writeFileSync(file, content);
};
