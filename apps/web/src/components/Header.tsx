import { useLocation } from "preact-iso";

export function Header() {
  const { url } = useLocation();

  return (
    <header>
      <nav class="navbar bg-base-300 flex-1">
        <div class="navbar-start" />
        <div class="navbar-end">
          <ul class="menu menu-horizontal px-1">
            <li>
              <a href="/" class={url == "/" && "active"}>
                Home
              </a>
            </li>
            <li>
              <a href="/404" class={url == "/404" && "active"}>
                404
              </a>
            </li>
            <li>
              <a href="/login" class={url == "/login" && "active"}>
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
