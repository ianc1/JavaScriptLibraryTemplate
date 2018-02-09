module.exports = {
    "env": {
        "browser": true,
        "jasmine": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ]
    },
    "globals": {
        /* Ignore the library global name */
        "mylibrary": true
    }
};