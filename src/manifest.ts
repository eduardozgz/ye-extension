import type { Manifest } from "webextension-polyfill";
import pkg from "../package.json";

const manifest: Manifest.WebExtensionManifest = {
	manifest_version: 3,
	name: pkg.displayName,
	version: pkg.version,
	description: pkg.description,
	options_ui: {
		page: "src/pages/options/index.html"
	},
	background: {
		service_worker: "src/pages/background/index.js",
		type: "module"
	},
	action: {
		default_popup: "src/pages/popup/index.html",
		default_icon: "/icons/icon_48.png"
	},
	icons: {
		"16": "/icons/icon_16.png",
		"48": "/icons/icon_48.png",
		"128": "/icons/icon_128.png"
	},
	permissions: ["activeTab", "webRequest", "storage", "tabs"],
	content_scripts: [
		{
			all_frames: true,
			matches: ["https://www.youtube.com/*"],
			run_at: "document_start",
			js: ["src/pages/inject/index.js"],
			css: ["contentStyle.css"]
		}
	],
	web_accessible_resources: [
		{
			resources: [
				"contentStyle.css",
				"/icons/icon_128.png",
				"/icons/icon_48.png",
				"/icons/icon_16.png",
				"src/pages/content/index.js",
				"src/pages/inject/index.js"
			],
			matches: ["https://www.youtube.com/*"]
		}
	]
};

export default manifest;