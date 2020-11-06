"use strict";

import Vue from "vue";
import axios from "axios";

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  baseURL: process.env.VUE_APP_LIBRENMS_URL,
  timeout: 60 * 1000,
  withCredentials: true,
  headers: {
    "X-Auth-Token": process.env.VUE_APP_LIBRENMS_TOKEN
  }
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    }
  });
};

Vue.use(Plugin);

export default Plugin;

