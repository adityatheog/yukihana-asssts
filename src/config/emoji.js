export const emoji = {
  "check": "<a:checkmark:1471397294057197602>",
  "info": "<a:info:1471397338902823115>",
  "cross": "<a:cut:1471397383421034666>",
  "add": "<:tec_add:1471397427071422588>",
  "reset": "<a:reset:1471397471673520128>",
  "folder": "<a:Folder:1471397516233805987>",
  "openfolder": "<:Opened_Folder:1471397560328650812>",
  "music": "<a:white_music:1471397603571925043>",
  "right": "<a:Right:1471397647582498901>",
  "left": "<a:Left_white_arrow:1471397691580878974>",
  "loading": "<a:loading:1471397735352762502>",
  get(name, fallback = '') {
    return this[name] || fallback;
  },
};

export default emoji;