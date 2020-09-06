var self = (module.exports = {
  //   routesList: () => {
  //     return {["/cn", "/en", "/app"]};
  //   },
  ignoreRouteUrl: (rt) => {
    const list = ["/cn", "/en", "/app", "/assetsweb", "/assets/"];
    let cnt = 0;
    let fnd = false;
    while (!fnd && cnt < list.length) {
      if (rt.includes(list[cnt])) {
        fnd = true;
      }
      cnt++;
    }
    return fnd;
  },
});
