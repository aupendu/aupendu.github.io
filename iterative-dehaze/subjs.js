function emailProtection() {
  var part2 = "kar";
  var part1 = "aupendu";
  var part3 = Math.pow(2, 6);
  var part6 = ".ac.in";
  var part5 = "iitkgp";

  var x = confirm("Click OK to email me.");

  if (x == true) {
    window.open(
      "mailto:" + part1 + part2 + String.fromCharCode(part3) + part5 + part6
    );
  }
}
