# Cherry Studio for Vicinae

A native Vicinae extension with two no-view commands. **Ask Cherry Studio** sends
the prompt immediately to a new saved conversation. **Ask Cherry Studio
Temporarily** opens an in-memory conversation instead. Both use Cherry's
configured Quick Assistant model or assistant; no API credentials are stored in
the extension.

This requires the Cherry feature branch implementing
`cherrystudio://chat/new`. The previously built 2.1.4 RTL Flatpak does not include
that feature. Install a compatible Cherry build and register its URL handler
before using the commands.

The supplied PC installer registers the RTL branch as the `cherrystudio` URL
handler. For a manually installed build, register its desktop entry first. Check
the association with `xdg-mime query default x-scheme-handler/cherrystudio`.

## Development

```sh
npm ci
npm test
npm run typecheck
npm run build
```

`npm run dev` registers the extension with a running Vicinae development
instance. It should be run on the PC where Vicinae is installed.

In Vicinae, select **Ask Cherry Studio** and set its alias to `!chat` through the
action panel. Enter a prompt in the command's argument field, then press Enter.
You can also mark this command as a fallback command; it accepts the whole root
search query and removes an initial `!chat` prefix. Use `!tempchat` for the
temporary command if desired.

The floating Cherry window opens on the right of the active screen. Use **Open
in Cherry Studio** to continue a saved conversation in the full app. A temporary
conversation offers **Save and open in Cherry Studio**, making the storage change
explicit. The delete action uses Cherry's existing Recycle Bin for saved chats.

The extension uses Vicinae's `open` API and URL encoding, never a shell command.
Window positioning on Wayland remains subject to the compositor's policy.

## Contribution

Cherry's protocol/window changes belong in `CherryHQ/cherry-studio`. This
extension is prepared separately for `vicinaehq/extensions`, under
`extensions/cherry-studio`; it does not add a Vicinae dependency to Cherry.

This extension and its original chat icon are distributed under the MIT license.

References: [Vicinae arguments](https://docs.vicinae.com/extensions/arguments),
[no-view commands](https://docs.vicinae.com/extensions/no-view-command), and
[fallback commands](https://docs.vicinae.com/fallback-commands).
