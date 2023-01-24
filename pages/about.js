import data from '../data/employee.json'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import AboutStyles from '@/styles/About.module.css'
import Link from 'next/link'
import CardTwo from '@/components/CardTwo'

export default function About() {
    
    const [employee, setEmployee] = useState([...data])
    console.log(data)

    return (
        <>
        <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                
            </Head>
            <main className={AboutStyles.main}>
                {/* <img className={AboutStyles.background_img} src={background_img} width="64" height="64" /> */}
                  <nav className={AboutStyles.nav}>
          <ul className={AboutStyles.links}>
            <li>
              <Link href="index">Home</Link>
            </li>
            <li>
              <Link href="about">About</Link>
            </li>
             <li>
              <Link href="contact">Contact</Link>
            </li>

          </ul>
          
          
        </nav>
 
                <div className={AboutStyles.title}>Employee List</div>
                {
                    employee && employee.map((em, index) => {
                        if (em.gender.toUpperCase() === "Female") {
                            return (
                                
                                <CardTwo key={index} position={em.position} colour="orange" font="15px" />
                            )
                        }

                        if (em.gender.toUpperCase() === "Male") {
                            return (
                                <CardTwo key={index} position={em.position} colour="light-blue" font="15px" />
                            )
                        }
                    })
                }
                

            </main>  
        </>

    )
}