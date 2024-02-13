import sass from './Loader.module.sass'

export function Loader() {
  return <div className={sass.loader}>
    <div className={sass.siteLogo}>
      <svg xmlns="http://www.w3.org/2000/svg" width="115" height="87" viewBox="0 0 115 87" fill="none">
        <g clip-path="url(#clip0_0_362)">
        <path d="M107.415 78.9015C120.774 65.4562 115.91 38.7622 96.553 19.2787C77.1955 -0.204796 50.6741 -5.09971 37.3158 8.34558C23.9575 21.7909 28.8207 48.4849 48.1782 67.9684C67.5357 87.4519 94.0571 92.3468 107.415 78.9015Z" fill="white"/>
        <path d="M67.7295 67.7111C87.087 48.2276 91.9502 21.5336 78.5919 8.08826C65.2336 -5.35703 38.7122 -0.462114 19.3547 19.0214C-0.00274354 38.5048 -4.866 65.1989 8.49233 78.6442C21.8507 92.0895 48.3721 87.1945 67.7295 67.7111Z" fill="white"/>
        <path d="M34.4315 33.5769H24.2085V64.4455H34.4315V33.5769Z" fill="#282727"/>
        <path d="M44.6545 54.156V43.8665H13.9856V54.156H44.6545Z" fill="#282727"/>
        <path d="M73.6068 55.5414C71.2597 56.8931 70.4597 59.9286 71.8201 62.3214C73.1804 64.7142 76.1859 65.5581 78.5331 64.2063L95.5326 54.4162C97.8797 53.0645 98.6797 50.0289 97.3194 47.6362C95.959 45.2434 92.9535 44.3995 90.6063 45.7512L73.6068 55.5414Z" fill="#282727"/>
        <path d="M67.0927 42.3106C64.7455 43.6623 63.9456 46.6979 65.3059 49.0906C66.6663 51.4834 69.6718 52.3273 72.0189 50.9756L89.0184 41.1854C91.3656 39.8337 92.1655 36.7982 90.8052 34.4054C89.4448 32.0127 86.4393 31.1687 84.0922 32.5205L67.0927 42.3106Z" fill="#282727"/>
        </g>
        <defs>
        <clipPath id="clip0_0_362">
            <rect width="114" height="86" fill="white" transform="translate(0.957031 0.5)"/>
        </clipPath>
        </defs>
      </svg>
    </div>
  </div>;
}