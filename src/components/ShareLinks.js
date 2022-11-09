import React from 'react'
import {WhatsappShareButton,WhatsappIcon, TelegramShareButton, TelegramIcon, EmailShareButton, EmailIcon} from 'react-share';
import './ShareLink.css'
const ShareLinks = ({link}) => {
  return (
    <div>
        <div className='container'>
            <h1>Directly Share to</h1>
            <div className="icon">
                <TelegramShareButton url={link}>
                    <TelegramIcon logofillcolor="white" round={true}></TelegramIcon>
                </TelegramShareButton>
                <WhatsappShareButton url={link} quote="Sharing file link">
                    <WhatsappIcon logofillcolor="white" round={true}></WhatsappIcon>
                </WhatsappShareButton>
                <EmailShareButton url={link}>
                    <EmailIcon logofillcolor="white" round={true}></EmailIcon>
                </EmailShareButton>
            </div>
        </div>
    </div>
  )
}

export default ShareLinks