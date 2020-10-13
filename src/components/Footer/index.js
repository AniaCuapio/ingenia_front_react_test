import React from 'react'
import styles from './Footer.module.scss'
import { Divider } from 'antd'

export default function Footer(){
    return (
        <div className={styles.container}>
                <div className={styles.firstContainer}>
                <br/>
                <p> © 2014 Ingenia Group</p>
                <h6> USA </h6>
                <p>1200 18th Street, NW </p>
                <p>Suite 700</p>
                <p> Washington DC 20036 USA</p>
                <p>50220900</p>
                </div>
                <hr/>
                <div className={styles.secondContainer}>
                <br/>
                <br/>
                <h6> MÉXICO </h6>
                <p>Anatole France 311</p>
                <p>Polanco, Miguel Hidalgo</p>
                <p>11560 México D. F.</p>
                <p>50220900</p>
                </div>
                <div className={styles.thirdContainer}>
                <br/>
                <br/>
                <div className={styles.innerContainer}>
                <p> About us</p>
                <hr/>
                <p> Our Work</p>
                <hr/>
                <p> Blog</p>
                <hr/>
                <p> Jobs</p>
                <hr/>
                <p> Contact</p>
                </div>
                <div className={styles.secondInnerContainer}>
                    <p>Terms of use</p>
                    <hr/>
                    <p> Privacy Policy</p>
                </div>
        
                <div className={styles.iconsContainer}>
                    <div className={styles.icon}><img src="/twitter-brands.svg" /></div>
                    <div className={styles.icon}><img src="/facebook-f-brands.svg" /></div>
                    <div className={styles.icon}><img src="/caret-right-solid.svg" /></div>
                    <div className={styles.icon}><img src="/linkedin-in-brands.svg" /></div>
                </div>


        </div>
    </div>
    )
}