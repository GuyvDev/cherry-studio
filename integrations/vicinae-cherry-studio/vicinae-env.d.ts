/// <reference types="@vicinae/api">

/*
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 */

type ExtensionPreferences = {
  
}

declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Command: Ask Cherry Studio */
	export type Chat = ExtensionPreferences & {
		
	}

	/** Command: Ask Cherry Studio Temporarily */
	export type TemporaryChat = ExtensionPreferences & {
		
	}
}

declare namespace Arguments {
  /** Command: Ask Cherry Studio */
	export type Chat = {
		/** Ask a question */
		"prompt": string
	}

	/** Command: Ask Cherry Studio Temporarily */
	export type TemporaryChat = {
		/** Ask a temporary question */
		"prompt": string
	}
}