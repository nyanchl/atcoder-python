import { defineConfig } from 'vite'
import {crx, defineManifest } from '@crxjs/vite-plugin'

const manifest = defineManifest({
  "manifest_version": 3,
  "host_permissions": [
      "https://api.notion.com/*"
  ],
  "name": "Atcoder check extension",
  "description": "Atcoder check extension",
  "version": "1.0.0",
  "action": {
    "default_icon": "nyanchl.PNG",
    "default_popup": "index.html",
  },
  "background": {
		"service_worker": "src/background.ts",
		"type": "module"
	},
	"permissions": [
    "tabs",
    "activeTab",
		"background",
		"storage"
	],
})

export default defineConfig({
  plugins: [
    crx({
      manifest,
    }),
  ],
})
