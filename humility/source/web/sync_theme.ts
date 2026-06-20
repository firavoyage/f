type ThemeMode = "system" | "light" | "dark";

export async function sync_theme(theme: ThemeMode): Promise<void> {
  if (theme == "light" || theme == "dark") {
    document.documentElement.setAttribute("data-theme", theme);
    return;
  }

  const query = window.matchMedia("(prefers-color-scheme: dark)");

  async function sync_system(): Promise<void> {
    document.documentElement.setAttribute("data-theme", query.matches ? "dark" : "light");
  }

  await sync_system();
  query.addEventListener("change", sync_system);
}