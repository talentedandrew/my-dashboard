import qs from 'qs';

/* Returns query string with object's key values pairs as
 ?key1=value1&key2=value2 and so-on */
function stringifyQueryParams(obj) {
  let queryString = '';
  // To-Do  Please remove filter and map chaining , It can be done with
  // single iteration .
  Object.keys(obj)
    .filter(key => !!obj[key] !== false)
    .map(key => {
      queryString += `${key}=${obj[key]}&`;
      return queryString;
    });
  return queryString.length
    ? `?${queryString.substr(0, queryString.length - 1)}`
    : '';
}

const addParamToUrl = (relativeUrl, queryParam) => {
  const kvp = relativeUrl.split('?');
  let existing = {};
  if (kvp.length > 1) {
    existing = qs.parse(kvp[1]);
  }
  existing = { ...existing, ...queryParam };
  return `${kvp[0]}${stringifyQueryParams(existing)}`;
};
/**
 * Creates a wrapper function around the HTML5 Fetch API that provides
 * default arguments to fetch(...) and is intended to reduce the amount
 * of boilerplate code in the application.
 * https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch
 */
function createFetch(fetch, getCookie) {
  // NOTE: Tweak the default options to suite your application needs
  const defaults = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-cache',
    },
  };

  return async (url, options = {}) => {
    const xxsrfToken = getCookie && getCookie('XSRF-TOKEN');
    let { query = {}, ...restParams } = options;
    restParams = restParams || {};
    const data = {
      ...defaults,
      method: restParams.method || defaults.method,
      headers: {
        'X-XSRF-TOKEN': xxsrfToken,
        'X-CSRF-TOKEN': xxsrfToken,
        ...defaults.headers,
        ...restParams.headers,
      },
    };
    query = {
      channel: 'web',
      version: 2,
      child_site_id: 1,
      site_id: 1,
      ...query,
    };
    /* Done to convert user id which is long int and not allowed by Javascript */
    if (query.user_id) {
      query.user_id = JSON.stringify(query.user_id);
    } else if (query.cust_id) {
      query.cust_id = JSON.stringify(query.cust_id);
    } else if (query.customer_id) {
      query.customer_id = JSON.stringify(query.customer_id);
    }
    const augmentedURL = addParamToUrl(url, query);
    return fetch(augmentedURL, { ...data })
      .then(response => response.json())
      .then(responseJSON => responseJSON)
      .catch(() => {
        // do error handling here
      });
  };
}

export default createFetch;
