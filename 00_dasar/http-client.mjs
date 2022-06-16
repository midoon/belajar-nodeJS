import https from "https";

const endpoint = "https://hookb.in/pzjmYVR8d1iR2qoRwdjl";
const request = https.request(
  endpoint,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  (response) => {
    response.addListener("data", (data) => {
      console.info(`Receive data : ${data.toString()}`);
    });
  }
);

const body = JSON.stringify({
  firstName: "Eko",
  lastName: "Khannedy",
});

request.write(body);
request.end();
