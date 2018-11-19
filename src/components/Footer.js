import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="columns">
                <div className="column is-3">
                    <Link to={`#top`}>
                    <svg className="is-fonder-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 745 454">
                        <path id="Stroke" class="cls-1" d="M12 208h695v15H12z"/>
                        <circle id="Dot" class="cls-1" cx="716" cy="425" r="29"/>
                        <g id="Direkt">
                            <path class="cls-1" d="M150 450h-46v-17h-.544c-5.71184 13.26916-17.408 20.85083-32.63992 20.85083C48.78376 453.85083 36 434.62485 36 402.12972v-84.48756c0-27.62155 11.15166-43.86916 34-43.86916 16.864 0 26.38405 5.9578 33.456 19.227H104v-59h46zm-47-118.92619c0-10.5-2.15395-21.80725-11.84622-21.80725-4.3074 0-9.15378 3.49968-9.15378 10.5v87.22995c0 8.88454 4.57714 11.30724 9.15378 11.30724C103 418.30375 103 402.15013 103 390.3044zM181 277h46v173h-46zM259 277h44v31h.12971c6.41361-15.82851 12.02545-33.80443 32.87029-33.80443V330h-10.68967C309.54332 330 305 339.92678 305 351.73121V450h-46zM350 323.14941c.46582-20.25 10.99609-49.14062 57.43652-49.14062S464.40723 302.89941 464 323.14941V371h-67v36.05368c0 5.79 0 13.68456 10.5 13.68456s10.5-7.89453 10.5-13.68456V386h46v18.4209c.40723 20.25-10.123 49.14062-56.56348 49.14062S350.46582 424.6709 350 404.4209zM397 339h21v-18.89941c0-5.94043 0-14.041-10.5-14.041s-10.5 8.10059-10.5 14.041zM486 234h46v216h-46zm47.69716 120.97211L559.14571 277h47.64908l-27.07305 75.80611L607.60753 450h-47.64908zM629 313h-12v-33h12v-38h46v38h12v33h-12v92.71678C675 410.05366 675 419 681.64472 419H688v35h-22.56666C645.31333 454 629 449.94075 629 422.87777z" transform="translate(-21)"/>
                        </g>
                        <g id="Fonder">
                            <path class="cls-1" d="M151.65406 9H21v6h7.18906a23.06957 23.06957 0 0 1 11.35147 2.95345 10.70221 10.70221 0 0 1 4.85379 5.03481C45.46 25.69212 46 31.45807 46 40.1256v112.7488c0 10.19833-.97311 16.66508-2.88209 19.207C40.06776 176.00869 35.04492 178 28.18906 178H21v7h77v-7h-7.24325a23.10878 23.10878 0 0 1-11.24775-2.962 10.56969 10.56969 0 0 1-4.92017-5.03143C73.53445 167.306 73 161.53708 73 152.85952V99h29.47009c5.83359 0 10.2608.74685 13.15709 2.22037a15.91606 15.91606 0 0 1 6.76307 6.60156c1.64483 2.96242 2.52267 7.74225 2.60975 14.20693l.01316.97114H132V63h-6.6186l-.10317.888c-1.0769 9.26432-3.23557 15.50545-6.41519 18.54924C115.699 85.46486 110.5685 87 103.6151 87H73V20h37.70167c8.97587 0 15.66764.84718 19.88975 2.5184a24.8612 24.8612 0 0 1 10.57916 8.03122c2.88021 3.71508 5.4562 9.6729 7.6571 17.70854l.20281.74184h4.3682zM261.894 82.27051C250.95752 68.55713 236.26367 61.604 218.2207 61.604a55.44155 55.44155 0 0 0-28.24218 7.77735c-8.86426 5.17138-16.103 13.26074-21.51465 24.04394a72.39272 72.39272 0 0 0-8.13233 32.61719 66.91088 66.91088 0 0 0 13.42285 40.66113c10.59424 14.32862 25.07959 21.59424 43.05372 21.59424a56.39653 56.39653 0 0 0 30.126-8.36816c8.98535-5.55469 16.13428-13.90723 21.248-24.82617a76.31314 76.31314 0 0 0 7.6709-32.39991 63.56208 63.56208 0 0 0-13.95901-40.4331zm-39.564 94.90967c-10.68555 0-19.4419-6.09034-26.02637-18.10157-6.69287-12.20459-10.08642-26.94922-10.08642-43.82324 0-10.43262 1.3999-19.07373 4.16064-25.6831 2.72754-6.52832 6.3252-11.14258 10.69287-13.71436a25.91392 25.91392 0 0 1 13.16895-3.90674c9.03759 0 16.5874 4.01123 22.44384 11.92822 8.81446 11.75391 13.2837 28.14307 13.2837 48.71241 0 16.3872-2.64991 28.06054-7.876 34.69629-5.16836 6.56396-11.8168 9.89209-19.76113 9.89209zM413.0122 178c-5.46116 0-9.21088-.56055-11.14739-1.6665a9.48693 9.48693 0 0 1-4.15239-4.55176C396.57635 169.27441 396 164.31445 396 157.04053V106.8291c0-10.68115-.97315-18.74658-2.894-23.978-2.80691-7.5249-6.654-13.01953-11.43361-16.33154a29.51819 29.51819 0 0 0-17.17073-4.99463c-12.23649 0-25.18 7.79688-38.50166 23.18408V62h-6.66255L283.0758 76.77542l2.66706 6.42632.90031-.34818c5.956-2.29918 10.40427-2.4582 12.82578-.4221 1.13569.957 2.00937 2.87737 2.59683 5.7066.61991 2.9902.93422 11.57078.93422 25.504v43.484c0 8.281-.99088 13.9215-2.945 16.76386C298.17974 176.617 294.4046 178 288.83464 178H285v7h60v-7h-.73766c-6.26414 0-10.43007-.5415-12.38175-1.60937a10.99367 10.99367 0 0 1-4.56472-5.02979C326.71547 170.1709 326 166.72021 326 157.04053V95.40186c9.842-10.6709 19.81424-16.08155 29.64293-16.08155 6.30742 0 10.6543 2.20948 13.288 6.7544C371.631 90.73828 373 98.41211 373 108.88379v48.15674c0 8.27148-.26308 10.99023-.48386 11.81689a12.21559 12.21559 0 0 1-4.22888 6.84424C366.27806 177.22656 362.5891 178 357.32415 178H354v7h59.999v-7zM542.72606 166.70791l-.98215.37361a26.73766 26.73766 0 0 1-8.81992 2.11633 6.30066 6.30066 0 0 1-4.26274-1.55883c-1.22236-1.04427-2.1396-2.99379-2.72753-5.79443-.6199-2.9538-.93372-11.365-.93372-25V0h-6.91957l-35.83955 14.80848 2.33526 6.33192.92984-.34825a25.93637 25.93637 0 0 1 8.44315-1.99 6.77619 6.77619 0 0 1 4.469 1.44324c1.172.96086 2.06211 2.88356 2.6481 5.71493C501.68618 28.95459 502 37.21556 502 50.514v19.41082c-6.60381-5.71444-14.82709-8.60824-24.48193-8.60824-16.80881 0-30.7448 7.18939-41.42054 21.36819-10.61374 14.0949-15.9952 29.85692-15.9952 46.84806 0 17.02285 4.88457 31.16555 14.51714 42.0345C444.27916 182.47139 455.75592 188 468.7301 188a41.26531 41.26531 0 0 0 18.004-4.00977A57.48227 57.48227 0 0 0 502 172.63793V188h7.04936l35.6652-14.92212zM475.77539 71.4375a23.90472 23.90472 0 0 1 11.89361 3.52686 25.79455 25.79455 0 0 1 9.82617 10.45654A40.12224 40.12224 0 0 1 502 100.87256v60.2168c-6.96387 7.354-14.23047 11.08252-21.60156 11.08252-8.88965 0-17.09766-4.521-24.39649-13.438-7.34863-8.97559-11.07422-22.13477-11.07422-39.11231 0-16.792 3.84864-29.70508 11.43946-38.38135 5.68261-6.50438 12.21191-9.80272 19.4082-9.80272zM647.51855 136.35352l-.43554 1.16211c-3.76563 10.04248-8.46875 17.21386-13.97852 21.31542a31.89751 31.89751 0 0 1-19.501 6.15918c-11.20215 0-21.10059-4.895-29.41993-14.54931C575.98535 140.93408 571.792 127.669 571.71191 111H653v-1c0-14.75586-4.37305-26.72119-12.99707-35.564-8.63281-8.84913-19.80469-13.33594-33.20605-13.33594-15.79981 0-29.11719 5.79053-39.583 17.21094-10.44239 11.3955-15.73731 27.458-15.73731 47.74121 0 18.75146 5.165 33.90625 15.35059 45.043 10.209 11.16553 22.66308 16.82715 37.0166 16.82715a42.982 42.982 0 0 0 33.23438-14.77929c8.73925-9.73536 14.09277-20.689 15.91015-32.55664l.09863-.64014zM599.915 72.666a23.25428 23.25428 0 0 1 12.749 3.94921 24.65449 24.65449 0 0 1 9.19629 10.8667c1.249 2.813 2.10449 7.69385 2.54785 14.51807h-52.27533c1.04883-9.042 4.21289-16.2168 9.415-21.33887C586.93457 75.356 593.11426 72.666 599.915 72.666zM747.33336 66.55167A17.34148 17.34148 0 0 0 735.06721 62C725.115 62 715.34587 69.94451 706 85.62735V62h-6.53407l-36.28026 14.72971 1.80157 6.51774 1.01992-.39341a24.24529 24.24529 0 0 1 8.56035-1.85228 7.54912 7.54912 0 0 1 4.9204 1.57169 8.66128 8.66128 0 0 1 2.70623 5.1216c.53466 2.52287.80586 10.65023.80586 24.15644v45.40242c0 8.3389-.32448 11.19634-.59859 12.132a10.00923 10.00923 0 0 1-4.04287 5.96045C675.64845 177.10717 671.37312 178 665.65072 178H664v7h62v-7h-.61282c-5.07247 0-8.98362-.73381-11.62495-2.18052a12.30335 12.30335 0 0 1-5.44247-5.31709C706.78068 167.33081 706 162.52918 706 156.23076v-55.90531c3.96538-7.76069 7.84069-13.40214 11.53777-16.78477 1.58461-1.51479 3.02489-2.28313 4.28308-2.28313 1.06254 0 3.24379.728 7.59952 4.19717 3.85593 3.07043 7.4271 4.62753 10.61374 4.62753a11.5745 11.5745 0 0 0 8.61265-3.75853 12.759 12.759 0 0 0 3.58764-9.13155 14.22056 14.22056 0 0 0-4.90104-10.6405z" transform="translate(-21)"/>
                        </g>
                    </svg>
                    </Link>
                </div>
                <div className="column is-6">
                    <h4 className="is-size-5">OM FONDER DIREKT</h4>
                    <p>
                    Fonder Direkt är nordens ledande webbplats om fonder som produceras av Nyhetsbyrån Direkts fondredaktion i syfte att bredda kunskapen om fonder och öka genomlysningen av denna marknad.
                    </p>
                </div>
                <div className="column is-3">
                    <h4 className="is-size-5">KONTAKTA OSS</h4>
                    <p>Kungsgatan 33, 111 56 Stockholm</p>
                    <p><a href='mailto&#58;fo&#110;dr%&#54;5d&#97;%&#54;Btio&#110;en&#64;di%7&#50;ek%7&#52;&#37;2Es%6&#53;'>&#102;&#111;n&#100;re&#100;akt&#105;o&#110;&#101;n&#64;direkt&#46;&#115;e</a></p>
                    <p><a href="tel:+46 8 5191 79 05">+46 8 5191 79 05</a></p>
                </div>
            </div>
            <div className="columns">
                <div className="column is-6 is-offset-3">
                    <hr />
                    <nav class="level">
                        <div class="level-item has-text-centered">
                            <div>
                                <p class="heading">Twitter</p>
                                <a href="https://twitter.com/fonder_direkt" className="navbar-item is-twitter" target="_blank" rel="noopener noreferrer">
                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg>
                                </a>
                            </div>
                        </div>
                        <div class="level-item has-text-centered">
                            <div>
                                <p class="heading">Facebook</p>
                                <a href="https://www.facebook.com/groups/FonderDirekt/" className="navbar-item  is-facebook" target="_blank" rel="noopener noreferrer">
                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"/></svg>
                                </a>
                            </div>
                        </div>
                        <div class="level-item has-text-centered">
                            <div>
                                <p class="heading">LinkedIn</p>
                                <a href="https://www.linkedin.com/company/fonderdirekt" className="navbar-item is-linkedin" target="_blank" rel="noopener noreferrer">
                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/*
            <div className="content has-text-centered ">
                <p>Fonder Direkt av <a href="http://www.direkt.se">Nyhetsbyrån Direkt</a></p>
            </div>
            */}
        </div>
    </footer>
  )

  export default Footer
