import React from 'react'
import './topbar.css';

function topbar() {
  return (
    <div className='topbar'>
        <div className='leftpart'>
        <a href="/" className="home-button">
            <i className="fas fa-home fa-lg"></i>
        </a>
            <span>Welcome to the United Nations</span>
        </div>
        <div className='rightpart'>
            <button>العربية</button>
            <button>中文</button>
            <button><strong>English</strong></button>
            <button>Français</button>
            <button>Русский</button>
            <button>Español</button>
        </div>
    </div>

  )
}

export default topbar