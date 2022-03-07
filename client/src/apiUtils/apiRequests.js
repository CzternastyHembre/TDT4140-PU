const getRequest = async (url) => {
  const response = await fetch(url, {
    method: "GET",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    let responseJson = await response.json();
    console.log(responseJson);
    throw new Error(responseJson.message);
  }

  return response.json();
};

const postRequest = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  if (!response.ok) {
    let responseJson = await response.json();
    console.log(responseJson);
    throw new Error(responseJson.message);
  }

  return response.json();
};

const putRequest = async (url, data) => {
  const response = await fetch(url, {
    method: "PUT",
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  if (!response.ok) {
    let responseJson = await response.json();
    console.log(responseJson);
    throw new Error(responseJson.message);
  }
  return response.json();
};

const deleteRequest = async (url, data) => {
  const response = await fetch(url, {
    method: "DELETE",
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  if (!response.ok) {
    let responseJson = await response.json();
    console.log(responseJson);
    throw new Error(responseJson.message);
  }
  return response.json();
};

export { getRequest, postRequest, putRequest, deleteRequest };
