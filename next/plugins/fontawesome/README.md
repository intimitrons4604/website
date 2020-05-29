# Font Awesome Plugin

This local Gatsby plugin is used to

- Add the default Font Awesome CSS to the `<head>` during server side rendering
- Disable Font Awesome adding the CSS to the `<head>` when its scripts run in a browser

This is done because

- In the static HTML pages, with scripting disabled, the Font Awesome icons display incorrectly (e.g. their size is incorrect).
  They may also briefly display incorrectly before the Font Awesome scripts adds the CSS to the page when scripting is enabled.
- We don't want to have the CSS included twice
