import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/_nuxt/entry-8f801949.mjs": {
    "type": "application/javascript",
    "etag": "\"19101-PWysCEgeiLpSdumrWglnkp3rQlM\"",
    "mtime": "2021-11-22T07:14:22.688Z",
    "path": "../public/_nuxt/entry-8f801949.mjs"
  },
  "/_nuxt/index-8bc0171b.mjs": {
    "type": "application/javascript",
    "etag": "\"136-Mi5roSWdrdyM/1JPq3fAS3eJDJU\"",
    "mtime": "2021-11-22T07:14:22.688Z",
    "path": "../public/_nuxt/index-8bc0171b.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"1c8-UWvmYxBRk7H7mH23awFJYKgvaDo\"",
    "mtime": "2021-11-22T07:14:22.688Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/assets/entry.a46eb2a8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"9ef-iTUNh5e1iDioDUpgxs+0JiIbq7M\"",
    "mtime": "2021-11-22T07:14:22.688Z",
    "path": "../public/_nuxt/assets/entry.a46eb2a8.css"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const PUBLIC_PATH = "/_nuxt/";
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "C:/Users/PO YZ/Documents/Gitbash/Testing-diff-lib-or-platform/nuxt3-playground/dist" + "/" + "1637565260";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  if (!asset) {
    if (id.startsWith(PUBLIC_PATH) && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (id.startsWith(PUBLIC_PATH)) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
