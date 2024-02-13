import {useState} from 'react'
import sass from './MProfile.module.sass'
import cup from './assets/svg/cup.svg'
import message from './assets/svg/message.svg'
import heart from './assets/svg/heart.svg'
import dots from './assets/svg/dots.svg'
import { Modal } from '../../../../shared/ui/Modal'


export function MProfile() {
    const [modalActive, setModalActive] = useState(false)

    return <>
    <div className={sass.background}>
        <div className={sass.inner}>
            <div className={sass.header_profile}>
                <div className={sass.header_header}>
                    <h1>Artem, 18</h1>
                    <div className={sass.dots} >
                        <a onClick={() => setModalActive(true)}><img src={dots} alt="" /></a>
                    </div>
                </div>
                <div className={sass.header_main}>
                    <div className={sass.header_interest}>
                        <button className={sass.team}>
                            <h1>Assemble a team</h1>
                            <img src={cup} alt="" />
                        </button>
                        <button className={sass.chat}>
                            <h1>Just a chatting</h1>
                            <img className={sass.chatSvg} src={message} alt="" />
                        </button>
                        <button className={sass.love}>
                            <h1>Find love</h1>
                            <img src={heart} alt="" />
                        </button>
                    </div>
                    <div className={sass.links}>
                        <div className={sass.steam}>
                            <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                                <rect x="0.683594" y="0.953735" width="42" height="41" rx="10" fill="#000"/>
                                <path d="M21.1524 8.95374C14.6533 8.95374 9.31015 13.886 8.68359 20.2042L15.0582 23.459C15.7018 22.9192 16.5387 22.5901 17.4501 22.5901H17.479C17.7011 22.2492 17.9566 21.8226 18.2244 21.3794C18.7826 20.4646 19.4092 19.4305 20.0244 18.635C20.1611 16.0952 22.2746 14.0674 24.8548 14.0674C27.5262 14.0674 29.6964 16.2321 29.6964 18.8969C29.6964 21.4708 27.6635 23.579 25.1174 23.7154C24.3199 24.329 23.2889 24.9542 22.3662 25.5054C21.9219 25.7781 21.4942 26.0328 21.1524 26.2544V26.2833C21.1524 28.3231 19.4949 29.9765 17.4501 29.9765C15.4052 29.9765 13.7477 28.3231 13.7477 26.2833C13.7477 26.1867 13.7531 26.0958 13.7588 25.9992L8.78038 23.4535C9.743 29.408 14.9153 33.9537 21.1524 33.9537C28.0731 33.9537 33.6836 28.3571 33.6836 21.4537C33.6836 14.5503 28.0731 8.95374 21.1524 8.95374ZM24.8548 15.2037C22.8157 15.2037 21.1524 16.8628 21.1524 18.8969C21.1524 20.931 22.8157 22.5901 24.8548 22.5901C26.894 22.5901 28.5572 20.931 28.5572 18.8969C28.5572 16.8628 26.894 15.2037 24.8548 15.2037ZM24.8548 16.3401C26.2731 16.3401 27.418 17.4821 27.418 18.8969C27.418 20.3117 26.2731 21.4537 24.8548 21.4537C23.4365 21.4537 22.2916 20.3117 22.2916 18.8969C22.2916 17.4821 23.4365 16.3401 24.8548 16.3401ZM17.4501 23.7265C17.0001 23.7265 16.5731 23.8403 16.2085 24.0505L18.0998 25.016C18.8004 25.3739 19.0737 26.2325 18.7205 26.9314C18.4642 27.42 17.9684 27.7037 17.4501 27.7037C17.2279 27.7037 17.0111 27.6529 16.8004 27.5506L14.9036 26.5785C15.0517 27.8512 16.1343 28.8401 17.4501 28.8401C18.8684 28.8401 20.0132 27.6981 20.0132 26.2833C20.0132 24.8685 18.8684 23.7265 17.4501 23.7265Z" fill="white"/>
                            </svg>
                            </a>
                        </div>
                        <div className={sass.discord}>
                            <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                <rect x="0.683594" y="0.953735" width="41" height="41" rx="10" fill="#000"/>
                                <path d="M17.7095 10.9574C17.7095 10.9574 13.557 11.2275 10.8413 13.2924C10.8286 13.2972 10.8133 13.3044 10.8006 13.3117C10.3293 13.7242 9.97516 14.3634 9.53698 15.2801C9.09881 16.1967 8.63516 17.3763 8.21227 18.6958C7.36904 21.3372 6.68375 24.5792 6.68375 27.6306C6.68121 27.7392 6.70923 27.8453 6.76527 27.9394C7.71805 29.5242 9.47075 30.4819 11.1063 31.0849C12.7418 31.688 14.2525 31.9292 15.0193 31.9533C15.2358 31.9606 15.4422 31.8665 15.5695 31.7025L17.1592 29.6183C18.4406 29.9054 19.9436 30.1008 21.6836 30.1008C23.4236 30.1008 24.9266 29.9054 26.208 29.6183L27.7977 31.7025C27.925 31.8665 28.1314 31.9606 28.3479 31.9533C29.1147 31.9292 30.6254 31.688 32.2609 31.0849C33.8964 30.4819 35.6491 29.5242 36.6019 27.9394C36.658 27.8453 36.686 27.7392 36.6834 27.6306C36.6834 24.5792 35.9981 21.3372 35.1549 18.6958C34.732 17.3763 34.2684 16.1967 33.8302 15.2801C33.392 14.3634 33.0379 13.7242 32.5666 13.3117C32.5539 13.3044 32.5386 13.2972 32.5259 13.2924C29.8102 11.2275 25.6577 10.9574 25.6577 10.9574C25.6093 10.9525 25.5635 10.9525 25.5151 10.9574C25.2883 10.9863 25.0973 11.1262 25.0056 11.324C25.0056 11.324 24.7839 11.7847 24.6387 12.4433C23.3675 12.2503 22.2975 12.1924 21.6836 12.1924C21.0696 12.1924 19.9997 12.2503 18.7285 12.4433C18.5833 11.7847 18.3616 11.324 18.3616 11.324C18.2495 11.0828 17.9871 10.9356 17.7095 10.9574ZM17.3018 12.2889C17.3502 12.4143 17.3834 12.5325 17.4241 12.6749C15.9542 12.9981 14.3442 13.5264 12.8386 14.4117C12.6017 14.5057 12.4463 14.7228 12.4386 14.9665C12.4335 15.2077 12.5787 15.432 12.808 15.5382C13.0398 15.6419 13.315 15.6105 13.5111 15.4537C16.5325 13.6808 20.3767 13.4275 21.6836 13.4275C22.9905 13.4275 26.8347 13.6808 29.8561 15.4537C30.0522 15.6105 30.3274 15.6419 30.5592 15.5382C30.7885 15.432 30.9337 15.2077 30.9286 14.9665C30.9209 14.7228 30.7655 14.5057 30.5286 14.4117C29.023 13.5264 27.413 12.9981 25.9431 12.6749C25.9838 12.5325 26.0169 12.4143 26.0653 12.2889C26.8092 12.3757 29.7007 12.7448 31.6699 14.2187C31.7973 14.3296 32.2405 14.9472 32.6482 15.8011C33.0558 16.655 33.4837 17.7671 33.8913 19.0431C34.6862 21.5325 35.3281 24.6033 35.3587 27.4184C34.6174 28.5545 33.2264 29.3988 31.7922 29.9271C30.4878 30.4071 29.2701 30.6218 28.6332 30.6797L27.5327 29.271C28.0932 29.0997 28.5976 28.9139 29.0409 28.7306C30.6866 28.0455 31.568 27.3219 31.568 27.3219C31.838 27.0927 31.861 26.6995 31.6189 26.4438C31.3769 26.1881 30.9617 26.1664 30.6917 26.3956C30.6917 26.3956 30.0089 26.9866 28.511 27.6113C27.9607 27.8405 27.2932 28.0673 26.5341 28.2675C26.3583 28.2482 26.1825 28.2964 26.045 28.4026C24.8298 28.6824 23.3853 28.8657 21.6836 28.8657C19.9691 28.8657 18.5221 28.6655 17.3018 28.3833C17.1643 28.2964 16.9961 28.2602 16.8331 28.2868C16.0714 28.0866 15.409 27.8405 14.8562 27.6113C13.3583 26.9866 12.6755 26.3956 12.6755 26.3956C12.5278 26.2653 12.324 26.2098 12.1253 26.2412C11.8731 26.2774 11.6642 26.4487 11.5954 26.6826C11.5241 26.9142 11.6056 27.1651 11.7992 27.3219C11.7992 27.3219 12.6806 28.0455 14.3263 28.7306C14.7696 28.9139 15.274 29.0997 15.8345 29.271L14.7339 30.6797C14.0971 30.6218 12.8793 30.4071 11.575 29.9271C10.1407 29.3988 8.7498 28.5545 8.00847 27.4184C8.03904 24.6033 8.68101 21.5325 9.47584 19.0431C9.88345 17.7671 10.3114 16.655 10.719 15.8011C11.1266 14.9472 11.5699 14.3296 11.6973 14.2187C13.6665 12.7448 16.558 12.3757 17.3018 12.2889ZM17.4445 19.6028C15.781 19.6028 14.5098 21.0332 14.5098 22.6904C14.5098 24.3476 15.781 25.7781 17.4445 25.7781C19.108 25.7781 20.3793 24.3476 20.3793 22.6904C20.3793 21.0332 19.108 19.6028 17.4445 19.6028ZM25.9227 19.6028C24.2591 19.6028 22.9879 21.0332 22.9879 22.6904C22.9879 24.3476 24.2591 25.7781 25.9227 25.7781C27.5862 25.7781 28.8574 24.3476 28.8574 22.6904C28.8574 21.0332 27.5862 19.6028 25.9227 19.6028ZM17.4445 20.8378C18.303 20.8378 19.0749 21.6194 19.0749 22.6904C19.0749 23.7614 18.303 24.543 17.4445 24.543C16.586 24.543 15.8141 23.7614 15.8141 22.6904C15.8141 21.6194 16.586 20.8378 17.4445 20.8378ZM25.9227 20.8378C26.7812 20.8378 27.5531 21.6194 27.5531 22.6904C27.5531 23.7614 26.7812 24.543 25.9227 24.543C25.0642 24.543 24.2923 23.7614 24.2923 22.6904C24.2923 21.6194 25.0642 20.8378 25.9227 20.8378Z" fill="white"/>
                            </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={sass.main_profile}>
                <div className={sass.main_info}>
                    <div className={sass.about}>
                        <h5>About Me</h5>
                        <h1>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor </h1>
                    </div>
                    <div className={sass.location}>
                        <h5>Location</h5>
                        <h1>Kazakhstan/Almaty</h1>
                    </div>
                    <div className={sass.more_about}>
                        <h5>More about</h5>
                        <h1>Kazakhstan/Almaty</h1>
                    </div>
                    <div className={sass.interests}>
                        <h5>Interests</h5>
                        <h1>I love Pivo and Dota</h1>
                    </div>
                </div>

                <div className={sass.gray}>

                </div>

                <div className={sass.main_interest}>
                    <div className={sass.interest}>
                        <h5>Interests</h5>
                        <h1>None</h1>
                    </div>
                </div>
            </div>
        </div>
    
        <Modal active={modalActive} setActive={setModalActive}>
            <div className={sass.modal_content}>
                <div className={sass.modal_btn}>
                    <button>Share</button>
                    <button>Block</button>
                    <button>Report and block</button>
                </div>
            </div>
        </Modal>
        </div>
    </>
}