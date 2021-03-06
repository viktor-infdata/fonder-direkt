import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import ScrollUpButton from 'react-scroll-up-button'
import CookieConsent from 'react-cookie-consent'

const Footer = () => (
  <React.Fragment>
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column is-3-desktop">
            <a href="#top">
              <svg
                role="img"
                className="is-fonder-logo"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 645 169"
              >
                <title>Fonder Direkt</title>
                <path
                  className="is-fonder-logo-blue"
                  d="M20.05 104.15v21.96h31.59v7.74H20.05v25.47h-9v-63h44.47v7.83H20.05zM73.07 156.72c-3.78-2.1-6.74-5-8.87-8.69-2.13-3.69-3.2-7.88-3.2-12.56s1.06-8.87 3.2-12.56c2.13-3.69 5.09-6.57 8.87-8.64s8.04-3.11 12.78-3.11 8.99 1.04 12.74 3.11 6.69 4.95 8.82 8.64c2.13 3.69 3.2 7.88 3.2 12.56s-1.07 8.87-3.2 12.56c-2.13 3.69-5.07 6.59-8.82 8.69-3.75 2.1-8 3.15-12.74 3.15s-9-1.05-12.78-3.15zm21.02-6.53c2.43-1.41 4.33-3.39 5.72-5.94 1.38-2.55 2.07-5.48 2.07-8.78 0-3.3-.69-6.23-2.07-8.78-1.38-2.55-3.29-4.51-5.72-5.9-2.43-1.38-5.18-2.07-8.24-2.07-3.06 0-5.81.69-8.24 2.07-2.43 1.38-4.35 3.35-5.76 5.9-1.41 2.55-2.12 5.48-2.12 8.78 0 3.3.7 6.23 2.12 8.78 1.41 2.55 3.33 4.53 5.76 5.94 2.43 1.41 5.18 2.12 8.24 2.12 3.06 0 5.81-.71 8.24-2.12zM162.5 116.44c3.57 3.51 5.36 8.66 5.36 15.44v27.45h-8.64v-26.46c0-4.62-1.11-8.1-3.33-10.44-2.22-2.34-5.4-3.51-9.54-3.51-4.68 0-8.37 1.37-11.07 4.1-2.7 2.73-4.05 6.65-4.05 11.75v24.57h-8.64v-47.71h8.28v7.2c1.74-2.46 4.1-4.35 7.07-5.67 2.97-1.32 6.35-1.98 10.13-1.98 6.04-.01 10.85 1.75 14.43 5.26zM229.15 92.54v66.79h-8.28v-7.56c-1.92 2.64-4.35 4.65-7.29 6.03-2.94 1.38-6.18 2.07-9.72 2.07-4.62 0-8.76-1.02-12.42-3.06s-6.53-4.91-8.6-8.6c-2.07-3.69-3.11-7.94-3.11-12.74s1.04-9.03 3.11-12.69 4.94-6.51 8.6-8.55c3.66-2.04 7.8-3.06 12.42-3.06 3.42 0 6.57.65 9.45 1.94 2.88 1.29 5.28 3.2 7.2 5.72V92.54h8.64zm-16.38 57.65c2.46-1.41 4.38-3.39 5.76-5.94 1.38-2.55 2.07-5.48 2.07-8.78 0-3.3-.69-6.23-2.07-8.78-1.38-2.55-3.3-4.51-5.76-5.9-2.46-1.38-5.19-2.07-8.19-2.07-3.06 0-5.81.69-8.24 2.07-2.43 1.38-4.35 3.35-5.76 5.9-1.41 2.55-2.12 5.48-2.12 8.78 0 3.3.7 6.23 2.12 8.78 1.41 2.55 3.33 4.53 5.76 5.94 2.43 1.41 5.18 2.12 8.24 2.12 3 0 5.73-.71 8.19-2.12zM288.47 138.35h-38.71c.54 4.2 2.38 7.58 5.54 10.13 3.15 2.55 7.07 3.83 11.75 3.83 5.7 0 10.29-1.92 13.77-5.76l4.77 5.58c-2.16 2.52-4.85 4.44-8.06 5.76-3.21 1.32-6.8 1.98-10.76 1.98-5.04 0-9.51-1.04-13.41-3.11-3.9-2.07-6.92-4.96-9.05-8.69-2.13-3.72-3.2-7.92-3.2-12.6 0-4.62 1.04-8.79 3.11-12.51 2.07-3.72 4.92-6.62 8.55-8.69s7.73-3.11 12.29-3.11c4.56 0 8.63 1.04 12.2 3.11 3.57 2.07 6.36 4.97 8.37 8.69 2.01 3.72 3.02 7.98 3.02 12.78 0 .67-.07 1.53-.18 2.61zm-33.8-16.11c-2.79 2.52-4.43 5.82-4.91 9.9h30.6c-.48-4.02-2.12-7.3-4.91-9.86-2.79-2.55-6.26-3.83-10.4-3.83s-7.59 1.27-10.38 3.79zM315.56 113.33c2.94-1.44 6.51-2.16 10.71-2.16v8.37c-.48-.06-1.14-.09-1.98-.09-4.68 0-8.36 1.4-11.03 4.19-2.67 2.79-4.01 6.77-4.01 11.93v23.76h-8.64v-47.71h8.28v8.01c1.51-2.76 3.73-4.86 6.67-6.3zM362.99 96.32h26.55c6.66 0 12.57 1.32 17.73 3.96 5.16 2.64 9.17 6.35 12.02 11.12 2.85 4.77 4.28 10.25 4.28 16.43s-1.43 11.66-4.28 16.43c-2.85 4.77-6.86 8.48-12.02 11.12-5.16 2.64-11.07 3.96-17.73 3.96h-26.55V96.32zm26.02 55.18c5.1 0 9.59-.99 13.46-2.97 3.87-1.98 6.86-4.76 8.96-8.33 2.1-3.57 3.15-7.7 3.15-12.38s-1.05-8.81-3.15-12.38c-2.1-3.57-5.08-6.35-8.96-8.33-3.87-1.98-8.36-2.97-13.46-2.97H372v47.35h17.01zM436.22 100.82c-1.11-1.08-1.67-2.4-1.67-3.96s.55-2.89 1.67-4.01c1.11-1.11 2.5-1.67 4.19-1.67 1.68 0 3.07.53 4.19 1.58 1.11 1.05 1.67 2.36 1.67 3.92 0 1.62-.56 2.99-1.67 4.1-1.11 1.11-2.51 1.67-4.19 1.67-1.69-.01-3.08-.55-4.19-1.63zm-.14 10.8h8.64v47.71h-8.64v-47.71zM476.14 113.33c2.94-1.44 6.51-2.16 10.71-2.16v8.37c-.48-.06-1.14-.09-1.98-.09-4.68 0-8.36 1.4-11.03 4.19-2.67 2.79-4.01 6.77-4.01 11.93v23.76h-8.64v-47.71h8.28v8.01c1.51-2.76 3.73-4.86 6.67-6.3zM539.96 138.35h-38.71c.54 4.2 2.38 7.58 5.54 10.13 3.15 2.55 7.07 3.83 11.75 3.83 5.7 0 10.29-1.92 13.77-5.76l4.77 5.58c-2.16 2.52-4.85 4.44-8.06 5.76-3.21 1.32-6.8 1.98-10.76 1.98-5.04 0-9.51-1.04-13.41-3.11-3.9-2.07-6.92-4.96-9.05-8.69-2.13-3.72-3.2-7.92-3.2-12.6 0-4.62 1.04-8.79 3.11-12.51 2.07-3.72 4.92-6.62 8.55-8.69s7.73-3.11 12.29-3.11c4.56 0 8.63 1.04 12.2 3.11 3.57 2.07 6.36 4.97 8.37 8.69 2.01 3.72 3.02 7.98 3.02 12.78-.01.67-.07 1.53-.18 2.61zm-33.8-16.11c-2.79 2.52-4.43 5.82-4.91 9.9h30.6c-.48-4.02-2.12-7.3-4.91-9.86-2.79-2.55-6.26-3.83-10.4-3.83s-7.59 1.27-10.38 3.79zM570.65 137.09l-9.9 9.18v13.05h-8.64V92.54h8.64v42.85l26.01-23.76h10.44l-20.07 19.71 22.05 27.99h-10.62l-17.91-22.24zM634.38 156.54c-1.26 1.08-2.82 1.91-4.68 2.48-1.86.57-3.78.85-5.76.85-4.8 0-8.52-1.29-11.16-3.87-2.64-2.58-3.96-6.27-3.96-11.07v-26.19h-8.1v-7.11h8.1v-10.44h8.64v10.44h13.68v7.11h-13.68v25.83c0 2.58.64 4.56 1.93 5.94 1.29 1.38 3.13 2.07 5.54 2.07 2.64 0 4.89-.75 6.75-2.25l2.7 6.21z"
                />
                <g>
                  <path
                    className="is-fonder-logo-blue"
                    d="M164.24 11.98c-2.12 0-4.1.58-5.8 1.59-1.62.97-2.98 2.33-3.94 3.94-1.01 1.7-1.59 3.68-1.59 5.8V70.96h4.61c.52 0 .93-.42.93-.93V39.08h9.14c.51 0 .93-.42.93-.93v-4.61h-10.07v-9.85c-.01-.12-.01-.25-.01-.37s0-.25.01-.37c.18-2.9 2.5-5.23 5.39-5.43.14-.01.27-.02.41-.02.14 0 .27.01.41.02h6.73c.52 0 .93-.42.93-.93v-4.6h-8.08zM304.43 65.43v-.02c-3.07 0-5.59-2.38-5.8-5.4-.01-.14-.02-.27-.02-.41 0-.14.01-.27.02-.41V39.08h9.13c.52 0 .93-.42.93-.93v-4.61h-10.06V12.91c0-.52-.42-.93-.93-.93h-4.61V59.9c.05 2.02.63 3.91 1.61 5.53.97 1.61 2.32 2.95 3.93 3.92 1.7 1.01 3.68 1.59 5.8 1.59v.03h7.14c.51 0 .93-.42.93-.93v-4.6h-8.07zM276.99 35.15c-1.7-1.01-3.68-1.59-5.8-1.59v-.01h-10.84v.01c-2.12 0-4.1.58-5.8 1.59-1.62.96-2.97 2.32-3.94 3.93-1.02 1.7-1.6 3.69-1.6 5.81v26.08h4.61c.51 0 .93-.42.93-.93V45.3c-.01-.14-.02-.27-.02-.41 0-.14.01-.27.02-.41.21-2.97 2.65-5.33 5.65-5.4h11.14c3.02.08 5.46 2.45 5.65 5.43.01.12.01.25.01.37s0 .25-.01.37v24.78c0 .51.42.93.93.93h4.61V44.89c0-2.12-.58-4.11-1.6-5.81-.97-1.61-2.32-2.97-3.94-3.93zM236.86 39.08c-.96-1.61-2.31-2.96-3.92-3.92-1.7-1.02-3.69-1.6-5.82-1.6v-.01h-10.71v.01c-2.12 0-4.1.58-5.8 1.59-1.62.96-2.97 2.32-3.94 3.93-1.02 1.7-1.6 3.69-1.6 5.81v14.75c0 2.12.58 4.1 1.6 5.8.96 1.62 2.32 2.98 3.94 3.94 1.7 1.01 3.68 1.6 5.8 1.6h10.71c2.13 0 4.11-.59 5.82-1.6 1.61-.97 2.97-2.32 3.93-3.93 1.01-1.7 1.6-3.68 1.6-5.8h.01V44.89h-.01c-.01-2.12-.6-4.11-1.61-5.81zm-3.93 10.82v9.73c0 3.08-2.41 5.61-5.44 5.8-.12.01-.25.01-.37.01s-.25 0-.37-.01H216.78c-.12.01-.25.01-.37.01s-.25 0-.37-.01c-2.9-.18-5.23-2.49-5.43-5.39-.01-.13-.02-.27-.02-.41 0-.14.01-.28.02-.41V45.3c-.01-.14-.02-.27-.02-.41 0-.14.01-.27.02-.41.21-2.97 2.65-5.33 5.65-5.4h11.01c3.14.08 5.66 2.65 5.66 5.81v5.01zM189.38 33.55c-2.12 0-4.1.58-5.8 1.59-1.62.96-2.97 2.32-3.94 3.93-1.02 1.7-1.6 3.69-1.6 5.81v26.08h4.61c.52 0 .93-.42.93-.93V45.26c-.01-.12-.01-.25-.01-.37s0-.25.01-.37c.19-2.98 2.64-5.36 5.65-5.43h9.17c.22 0 .43-.08.59-.21.21-.17.34-.43.34-.72v-4.61h-9.95zM136.81 35.15c-1.7-1.01-3.68-1.59-5.8-1.59v-.01h-10.84v.01c-2.12 0-4.1.58-5.8 1.59-1.62.96-2.97 2.32-3.94 3.93-1.02 1.7-1.6 3.69-1.6 5.81v26.08h4.61c.51 0 .93-.42.93-.93V45.26c-.01-.12-.01-.25-.01-.37s0-.25.01-.37c.19-2.98 2.63-5.36 5.65-5.43h11.14c3.01.08 5.44 2.43 5.65 5.4.01.14.02.27.02.41 0 .14-.01.27-.02.41V70.05c0 .51.42.93.93.93h4.61V44.89c0-2.12-.58-4.11-1.6-5.81-.97-1.61-2.33-2.97-3.94-3.93zM97.34 11.98h-4.61v58.06c0 .51.42.93.93.93h4.61V12.91c0-.51-.41-.93-.93-.93z"
                  />
                  <path
                    className="is-fonder-logo-blue-shade-3"
                    d="M11.25 11.98V58.4l16.66-22.94 5.45-7.56z"
                  />
                  <path
                    className="is-fonder-logo-blue-shade-1"
                    d="M48.29 54.95l21.96 16.02V24.56z"
                  />
                  <path
                    className="is-fonder-logo-blue-shade-4"
                    d="M54.08 11.98H11.25l21.01 17.49 5.68 4.74 10.08 8.39 22.23-30.62z"
                  />
                  <path
                    className="is-fonder-logo-blue-shade-2"
                    d="M49.37 53.33L33.6 40.19 11.25 70.97H70.25z"
                  />
                </g>
              </svg>
              <span className="sr-only sr-only-focusable">
                Tillbaka till toppen av sidan
              </span>
            </a>
          </div>
          <div className="column is-6-desktop">
            <h4 className="is-size-5">OM FONDER DIREKT</h4>
            <p>
              Fonder Direkt är en plattform som produceras av Nyhetsbyrån
              Direkts fondredaktion där du kan hitta information, läsa nyheter
              och ta del av kommunikation om fonder.
            </p>
          </div>
          <div className="column is-3-desktop">
            <h4 className="is-size-5">KONTAKTA OSS</h4>
            <p>Kungsgatan 33, 111 56 Stockholm</p>
            <p>
              <a href="mailto&#58;fo&#110;dr%&#54;5d&#97;%&#54;Btio&#110;en&#64;di%7&#50;ek%7&#52;&#37;2Es%6&#53;">
                &#102;&#111;n&#100;re&#100;akt&#105;o&#110;&#101;n&#64;direkt&#46;&#115;e
              </a>
            </p>
            <p>
              <a href="tel:+46 8 5191 79 05">+46 8 5191 79 05</a>
            </p>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-6">
            <hr />
            <nav className="level is-mobile">
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Twitter</p>
                  <OutboundLink
                    href="https://twitter.com/fonder_direkt"
                    className="navbar-item is-twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Twitter</title>
                      <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                    </svg>
                    <span className="sr-only sr-only-focusable">Twitter</span>
                  </OutboundLink>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Facebook</p>
                  <OutboundLink
                    href="https://www.facebook.com/groups/FonderDirekt/"
                    className="navbar-item  is-facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Facebook</title>
                      <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
                    </svg>
                    <span className="sr-only sr-only-focusable">Facebook</span>
                  </OutboundLink>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">LinkedIn</p>
                  <OutboundLink
                    href="https://www.linkedin.com/company/fonderdirekt"
                    className="navbar-item is-linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>LinkedIn</title>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="sr-only sr-only-focusable">LinkedIn</span>
                  </OutboundLink>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">SoundCloud</p>
                  <OutboundLink
                    href="https://www.soundcloud.com/fonderdirekt"
                    className="navbar-item is-soundcloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>SoundCloud</title>
                      <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m-.899.828c-.06 0-.091.037-.104.094L0 14.479l.165 1.308c0 .055.045.094.09.094s.089-.045.104-.104l.21-1.319-.21-1.334c0-.061-.044-.09-.09-.09m1.83-1.229c-.061 0-.12.045-.12.104l-.21 2.563.225 2.458c0 .06.045.12.119.12.061 0 .105-.061.121-.12l.254-2.474-.254-2.548c-.016-.06-.061-.12-.121-.12m.945-.089c-.075 0-.135.06-.15.135l-.193 2.64.21 2.544c.016.077.075.138.149.138.075 0 .135-.061.15-.15l.24-2.532-.24-2.623c0-.075-.06-.135-.135-.135l-.031-.017zm1.155.36c-.005-.09-.075-.149-.159-.149-.09 0-.158.06-.164.149l-.217 2.43.2 2.563c0 .09.075.157.159.157.074 0 .148-.068.148-.158l.227-2.563-.227-2.444.033.015zm.809-1.709c-.101 0-.18.09-.18.181l-.21 3.957.187 2.563c0 .09.08.164.18.164.094 0 .174-.09.18-.18l.209-2.563-.209-3.972c-.008-.104-.088-.18-.18-.18m.959-.914c-.105 0-.195.09-.203.194l-.18 4.872.165 2.548c0 .12.09.209.195.209.104 0 .194-.089.21-.209l.193-2.548-.192-4.856c-.016-.12-.105-.21-.21-.21m.989-.449c-.121 0-.211.089-.225.209l-.165 5.275.165 2.52c.014.119.104.225.225.225.119 0 .225-.105.225-.225l.195-2.52-.196-5.275c0-.12-.105-.225-.225-.225m1.245.045c0-.135-.105-.24-.24-.24-.119 0-.24.105-.24.24l-.149 5.441.149 2.503c.016.135.121.24.256.24s.24-.105.24-.24l.164-2.503-.164-5.456-.016.015zm.749-.134c-.135 0-.255.119-.255.254l-.15 5.322.15 2.473c0 .15.12.255.255.255s.255-.12.255-.27l.15-2.474-.165-5.307c0-.148-.12-.27-.271-.27m1.005.166c-.164 0-.284.135-.284.285l-.103 5.143.135 2.474c0 .149.119.277.284.277.149 0 .271-.12.284-.285l.121-2.443-.135-5.112c-.012-.164-.135-.285-.285-.285m1.184-.945c-.045-.029-.105-.044-.165-.044s-.119.015-.165.044c-.09.054-.149.15-.149.255v.061l-.104 6.048.115 2.449v.008c.008.06.03.135.074.18.058.061.142.104.234.104.08 0 .158-.044.209-.09.058-.06.091-.135.091-.225l.015-.24.117-2.203-.135-6.086c0-.104-.061-.193-.135-.239l-.002-.022zm1.006-.547c-.045-.045-.09-.061-.15-.061-.074 0-.149.016-.209.061-.075.061-.119.15-.119.24v.029l-.137 6.609.076 1.215.061 1.185c0 .164.148.314.328.314.181 0 .33-.15.33-.329l.15-2.414-.15-6.637c0-.12-.074-.221-.165-.277m8.934 3.777c-.405 0-.795.086-1.139.232-.24-2.654-2.46-4.736-5.188-4.736-.659 0-1.305.135-1.889.359-.225.09-.27.18-.285.359v9.368c.016.18.15.33.33.345h8.185C22.681 17.218 24 15.914 24 14.28s-1.319-2.952-2.938-2.952" />
                    </svg>
                    <span className="sr-only sr-only-focusable">
                      SoundCloud
                    </span>
                  </OutboundLink>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
    <ScrollUpButton
      ContainerClassName="scroll-to-top"
      TransitionClassName="scroll-to-top-transition"
    >
      <svg xmlns="http://www.w3.org/2000/svg">
        <title>Scroll to top</title>
        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </ScrollUpButton>
    <CookieConsent
      contentClasses="CookieConsentContainer"
      buttonClasses="button is-small is-black"
      disableStyles={true}
      buttonText="Acceptera"
    >
      <p className="is-size-7 pr-4">
        På denna webbplats använder vi cookies för att förbättra
        funktionaliteten för dig som användare.{' '}
      </p>
    </CookieConsent>
  </React.Fragment>
)

export default Footer
