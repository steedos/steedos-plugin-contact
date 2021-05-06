"use strict";
exports.__esModule = true;
const express = require('express');
const path = require('path');
exports.init = function (_a) {
    var app = _a.app;
    app.use('/', express.static(path.join(__dirname, '../public')));
};