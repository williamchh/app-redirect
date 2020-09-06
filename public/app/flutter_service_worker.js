"use strict";
const CACHE_NAME = "flutter-app-cache";
const RESOURCES = {
  "/assets/AssetManifest.json": "fa0fb652a9aeb0b992ae79780c0d4b89",
  "/assets/assetsZtz/AppGoogle.png": "87652200b60cdb18edf438b4c632fd3a",
  "/assets/assetsZtz/Apple.png": "797aca90a63ce51c690450984bccab26",
  "/assets/assetsZtz/au.png": "45b02138dabca91feca78ec2ef641d74",
  "/assets/assetsZtz/chn.png": "541cafcffff695241987132525905661",
  "/assets/assetsZtz/commodity.png": "391da7a06740ea8a7d8a0d3a5acfe558",
  "/assets/assetsZtz/de.png": "4b5c8589b4e88dbbce89ac3295fe7724",
  "/assets/assetsZtz/europe.png": "a8140aea2df28f6d2ffc61e3327077ac",
  "/assetsZtz/fr.png": "8a3a7fb3ca7e42aedb0ed9eaf866aff4",
  "/assets/assetsZtz/gold.png": "932145de768c6dfeb2d1d9ffbc96e78a",
  "/assets/assetsZtz/langs/en-US.json": "9b8e8fa3ad60603d36700e6531585d69",
  "/assets/assetsZtz/langs/zh-CN.json": "976fdddbea57e518950aa62fdd98f698",
  "/assets/assetsZtz/langs/zh-HK.json": "028c7a071a273c55f85fe6e0d7758039",
  "/assets/assetsZtz/langs/zh-TW.json": "34e3cf950b344d1e23a3973e2fadbc2a",
  "/assets/assetsZtz/loader.gif": "5dde2fb93add6149cc4e451cec8610eb",
  "/assets/assetsZtz/loading.gif": "7062ec1aed5197c9775a6bdd284673b0",
  "/assets/assetsZtz/LoginBackground.gif": "55b346c15395374d7ef4c9c51a7ef15a",
  "/assets/assetsZtz/logo.png": "169e3ed4949e9533ad7672a266fbd27d",
  "/assets/assetsZtz/oil.png": "2e7533495131e0e5b2b6cbe2f1c570fd",
  "/assets/assetsZtz/stock.png": "0a18e56700dd59f3871b46b4cd0e99fb",
  "/assets/assetsZtz/symbols/symbolsList.json":
    "2ef08310baf3966e14dd522d5517179f",
  "/assets/assetsZtz/uk.png": "e0d536fd71a2703c08270d8340e57b4f",
  "/assets/assetsZtz/us.png": "98fa22c87083571e13178772043a5a22",
  "/assets/FontManifest.json": "df4b981c4ab9c706581f480f0359d0b1",
  "/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
  "/assets/fonts/OpenSans-Bold.ttf": "f5331cb6372b6c0d8baf2dd7e200498c",
  "/assets/fonts/OpenSans-Light.ttf": "9ff12f694e5951a6f51a9d63b05062e7",
  "/assets/fonts/OpenSans-LightItalic.ttf": "54b4443404115cef4af765596ccf0ed3",
  "/assets/fonts/OpenSans-Regular.ttf": "d7d5d4588a9f50c99264bc12e4892a7c",
  "/assets/LICENSE": "8c8f6dc2de9400403fc3064fcf415e49",
  "/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf":
    "115e937bb829a890521f72d2e664b632",
  "/index.html": "6f7c8accbae8719e6c53222ae2218d88",
  "/main.dart.js": "0189f7f8536108e4921fe3e1d7c61ca4",
};

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches
      .keys()
      .then(function (cacheName) {
        return caches.delete(cacheName);
      })
      .then(function (_) {
        return caches.open(CACHE_NAME);
      })
      .then(function (cache) {
        return cache.addAll(Object.keys(RESOURCES));
      })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
