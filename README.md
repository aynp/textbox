# Textbox

Simple full page textbox to write stuff down.

# Link

[text.aynp.dev/](https://text.aynp.dev/)

## Path-Based Persistent Pages

Any path you visit acts as its own independent, persistent textbox. The content is saved to your browser's localStorage automatically and restored when you revisit the same path.

For example:
- `https://text.aynp.dev/textbox/notes` - a textbox for general notes
- `https://text.aynp.dev/textbox/work/todo` - a textbox for work todos
- `https://text.aynp.dev/textbox/journal/2026-03-28` - a textbox for today's journal

Each path stores its data independently, so you can use as many as you like to organize your text.

### How it works

- Visiting any path that doesn't match a static file serves a persistent textbox via a 404.html catch-all.
- The page uses `window.location.pathname` to scope localStorage, so each path has its own saved content.
- Changes are debounced and also flushed on page close to prevent data loss.

### Limitations

- Data is stored in your browser's localStorage, so it is local to your browser and device.
- All paths share the same localStorage quota (typically 5-10MB per origin).

