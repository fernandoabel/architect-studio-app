const LocalStorageService = {
    set: function (key, value) {
        return localStorage.setItem(key, value);
    },

    get: function (key) {
        return localStorage.getItem(key);
    },

    remove: function (key) {
        localStorage.removeItem(key);
    },
};

export default LocalStorageService;
