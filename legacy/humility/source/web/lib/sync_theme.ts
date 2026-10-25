type theme = "system" | "light" | "dark";

export function sync_theme(theme: theme) {
  if (theme == "light" || theme == "dark") {
    document.documentElement.setAttribute("data-theme", theme);
  } else if (theme == 'system') {
    const query = window.matchMedia("(prefers-color-scheme: dark)");

    function sync_system() {
      document.documentElement.setAttribute("data-theme", query.matches ? "dark" : "light");
    }

    sync_system();
    query.addEventListener("change", sync_system);
  }
}