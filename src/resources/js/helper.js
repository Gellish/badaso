export default {
  mapFieldType(fieldType) {
    let type = "";
    switch (fieldType) {
      case "String":
        type = "text";
        break;
      case "Text":
        type = "text";
        break;
      case "Integer":
        type = "number";
        break;
      case "DateTime":
        type = "datetime";
        break;
      case "Boolean":
        type = "switch";
        break;
      default:
        break;
    }
    return type;
  },
  generateDisplayName(fieldName) {
    let displayName = "";
    let words = fieldName.split("_");
    let displayNameWord = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    displayName = displayNameWord.join(" ");
    return displayName;
  },
  generateSlug(string) {
    let str = string.replace(/^\s+|\s+$/g, "");

    // Make the string lowercase
    str = str.toLowerCase();

    // Remove accents, swap ñ for n, etc
    var from =
      "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;";
    var to =
      "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";
    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    }

    // Remove invalid chars
    str = str
      .replace(/[^a-z0-9 -]/g, "")
      // Collapse whitespace and replace by -
      .replace(/\s+/g, "-")
      // Collapse dashes
      .replace(/-+/g, "-");

    return str;
  },
};