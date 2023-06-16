import type { Plugin, App } from "vue"

import "./assets/scss/styles.scss"
import "virtual:windi.css"

/**
@constant HOPP_UI_OPTIONS
A constant representing the key for storing UI plugin options in the global context.
*/

export const HOPP_UI_OPTIONS = "HOPP_UI_OPTIONS"

/**
@typedef {Object} UIPluginOptions
@property [t] - A function for handling translations for the plugin.
@property [onModalOpen] - A callback function that is called when a modal is opened.
@property [onModalClose] - A callback function that is called when a modal is closed.
*/

export type UIPluginOptions = {
  t?: (key: string) => string
  onModalOpen?: () => void
  onModalClose?: () => void
}

export const plugin: Plugin = {
  install(app: App, options: UIPluginOptions = {}) {
    app.provide(HOPP_UI_OPTIONS, options)
  },
}
