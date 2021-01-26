const accountId =
    "661072_53ca2jsh01c88c4wwkc0wockckk0w4440o4o0w8wkkgco4o888";
const alertId = "1214654";
const accessToken =
    "ZDdmNDVmYzU1NWZkMDkwMDc4YjBjMzYyZDk2MDI3NGVlNmFmNTJkZDU5MzBhYWRiZGZmNzAxOGM1NDkzNDYxYQ";

class RESTService {

  static fetch(url, options) {
    return fetch(url, options);
  }

  static request() {
    const options = Object.assign(
      {
        method: "GET",
        mode: "cors",
      },
    );
    return RESTService.fetch(`https://web.mention.com/api/accounts/${accountId}/alerts/${alertId}/mentions?limit=1000&access_token=${accessToken}`, options);
  }
}

export default RESTService;
