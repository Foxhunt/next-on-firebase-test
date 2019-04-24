import { https } from 'firebase-functions'

import * as indexPage from "./next/serverless/pages/index"
import * as aboutPage from "./next/serverless/pages/about"

const { onRequest } = https

export const index = onRequest(indexPage.render)
export const about = onRequest(aboutPage.render)
