const params = args[0];
const url = "https://wwl-backend.onrender.com/wwl/send-email";
console.log(`HTTP POST Request to ${url}`);
const apiRequest = Functions.makeHttpRequest({
  url: url,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  data: params,
});

// Execute the API request (Promise)
const apiResponse = await apiRequest;
if (apiResponse.error) {
  console.error(
    apiResponse.response
      ? `${apiResponse.response.status},${apiResponse.response.statusText}`
      : ""
  );
  throw Error("Request failed");
}

const data = apiResponse["data"];

console.log("response", data);

// result is in JSON object
const result = data;

// Use JSON.stringify() to convert from JSON object to JSON string
// Finally, use the helper Functions.encodeString() to encode from string to bytes
return Functions.encodeString(JSON.stringify(result));
