import React from 'react'

import bmw2 from "/public/BMW.png"

import socialimage1 from "/public/socialimage1.svg"
import socialimage11 from "/public/socialimage1-1.svg"
import socialimage2 from "/public/socialimage2.svg"
import socialimage22 from "/public/socialimage2-2.svg"
import socialimage222 from "/public/socialimage2-2-2.svg"
import socialimage3 from "/public/socialimage3.svg"
import socialimage4 from "/public/socialimage4.svg"
import socialimage44 from "/public/socialimage4-4.svg"
import socialimage444 from "/public/socialimage4-4-4.svg"
import socialimage4444 from "/public/socialimage4-4-4-4.svg"
import socialimage5 from "/public/socialimage5.svg"
import socialimage55 from "/public/socialimage5-5.svg"
import socialimage555 from "/public/socialimage5-5-5.svg"
import socialimage5555 from "/public/socialimage5-5-5-5.svg"
import socialimage55555 from "/public/socialimage5-5-5-5-5.svg"
import socialimage6 from "/public/socialimage6.svg"
import socialimage66 from "/public/socialimage6-6.svg"
import socialimage666 from "/public/socialimage6-6-6.svg"
import socialimage7 from "/public/socialimage7.svg"
import socialimage77 from "/public/socialimage7-7.svg"
import socialimage8 from "/public/socialimage8.svg"
import socialimage88 from "/public/socialimage8-8.svg"
import socialimage9 from "/public/socialimage9.svg"
import socialimage99 from "/public/socialimage9-9.svg"
import socialimage999 from "/public/socialimage9-9-9.svg"
import socialimage9999 from "/public/socialimage9-9-9-9.svg"
import socialimage10 from "/public/socialimage10.svg"
import socialimage1010 from "/public/socialimage10-10.svg"


import hub1 from "/public/hubspot-logo-svg-1.svg"
import hub2 from "/public/dropbox-logo-svg-2.svg"
import hub3 from "/public/pingdom-logo-svg-3.svg"
import hub4 from "/public/scapic-logo-svg-4.svg"
import hub5 from "/public/livechat-logo-svg-5.svg"

import avatar from "/public/avatar.webp"

import ballavater from "/public/ballavater.webp"

import image2props from "/public/image2props.png"
import Header from './components/Header'

import snapchat from "/public/snapchat.webp"
import slack from "/public/slack.webp"
import youtube from "/public/youtube.webp"
import zendesk from "/public/zendesk.webp"
import fastapi from "/public/fastapi.webp"
import aitable from "/public/airtable.webp"
import mailchimp from "/public/mailchimp.webp"
import asana from "/public/asana.webp"

import royalbook from "/public/royalbook.webp"
import Footer from '../Footer'


export default function Work() {
    return (
        <>
            <Header />
            <section>

                <h1 className='hero-section1'>The All-In-One Growth Software for <span className='span1'>Local Business Owners</span></h1>

                <p className='p-text'>The complete automated system designed to capture more leads, follow up instantly, and grow your local business - all in one place.</p>

                <div className="botton1">

                    <button className='botton2'>Start Your 14-Dey Free Trial</button>

                    <button className='botton3'>Book A Demo</button>


                </div>

                <img src={bmw2} alt="" className='imgbmw' />

                <hr className='hr1' />

            </section>

            <section>
                <h1 className='hero-section2'>Are you losing real customers to the <span className='span2'>Follow-up Gap?</span></h1>

                <p className="p-text2">Stop wasting money on marketing if you can't respond fast enough. Our system ensures every lead gets immediate attention.</p>


                <hr className='hr2' />

                <div className="div-text">

                    <div className="text-div1"><i class="fa-solid fa-xmark"></i> Wasted Ad Spend</div>
                    <div className="text-div1"><i class="fa-solid fa-xmark"></i> Expensive 'Franken-stack' of tools</div>
                    <div className="text-div1"><i class="fa-solid fa-xmark"></i> Scattered Customer Data</div>

                </div>

                <hr className='hr2' />

                <div className="div-text1">

                    <div className="text-div1"><i class="fa-solid fa-xmark"></i> Missed Calls Costing Thousands</div>
                    <div className="text-div1"><i class="fa-solid fa-xmark"></i> Lost Leads to Competitors</div>
                    <div className="text-div1"><i class="fa-solid fa-xmark"></i> Slow Response Times</div>

                </div>


            </section>


            <section>

                <h1 className='hero-section3'>Replace Your Clunky Tools With A <span className='span3'> Smart, All-In-One System</span></h1>
                <p className='p-text4'>Log in to a single powerful dashboard to manage everything seamlessly.</p>

                <div className='div-propstext1'>
                    <PropsCard image={"/image1props.png"} text1={"My Automated Customer Follow-Up"} text2={" •  Missed Call Auto-Responder"} text3={" • 24/7 Appointment Scheduler"} text4={" • Instant SMS & Email Follow-Up"} />
                    <PropsCard image={"/image4props.png"} text1={"Autopilot Review Generator"} text2={" •  Automated Review Requests"} text3={" • Google & Facebook Integration"} text4={" • Reputation Tracking"} />
                    <PropsCard image={"/image2props.png"} text1={"Smart Customer Database"} text2={" •  Unified Lead Inbox"} text3={" • Smart Pipeline Manager"} text4={" • Client Notes & History"} />
                    <PropsCard image={"/image3props.png"} text1={"High-Converting Websites"} text2={" •  Drag-and-Drop Landing Pages"} text3={" • Lead Capture Forms"} text4={" • Web Chat Widgets"} />
                </div>

            </section>


            <section>
                <h1 className='hero-section3'>Everything You Need To Put Growth On <span className='span3'>Autopilot</span></h1>

                <p className='p-text4'>From capturing the very first click to securing a 5-star review, we've got you covered.</p>

                <div className='div-propstext2'>

                    <div className='div--propstext2'>
                        <PropsCard2 image1={"/imagebox.png"} text6={"Automated Customer Follow-up"} text7={"Visualize how teams are staffed & what"} text8={"resources are available across."} />

                        <PropsCard2 image1={"/imagebox.png"} text6={"Autopilot Review Generator"} text7={"Visualize how teams are staffed & what"} text8={"resources are available across."} />

                        <PropsCard2 image1={"/imagebox.png"} text6={"Missed Call Auto-Responder"} text7={"Visualize how teams are staffed & what"} text8={"resources are available across."} />
                    </div>

                    <div className='div--propstext2'>
                        <PropsCard2 image1={"/imagebox.png"} text6={"24/7 Appointment Scheduler"} text7={"Visualize how teams are staffed & what"} text8={"resources are available across."} />

                        <PropsCard2 image1={"/imagebox.png"} text6={"Unified Lead Inbox"} text7={"Visualize how teams are staffed & what"} text8={"resources are available across."} />

                        <PropsCard2 image1={"/imagebox.png"} text6={"Smart Customer Database"} text7={"Visualize how teams are staffed & what"} text8={"resources are available across."} />
                    </div>

                    <div className='div--propstext2'>
                        <PropsCard2 image1={"/imagebox.png"} text6={"High-Converting Websites"} text7={"Visualize how teams are staffed & what"} text8={"resources are available across."} />

                        <PropsCard2 image1={"/imagebox.png"} text6={"Drag & Drop Forms"} text7={"Visualize how teams are staffed & what"} text8={"resources are available across."} />

                        <PropsCard2 image1={"/imagebox.png"} text6={"Automated Text Campaigns"} text7={"Visualize how teams are staffed & what"} text8={"resources are available across."} />
                    </div>

                </div>
            </section>


            <section>

                <h1 className='hero-section3'>The 5 things every <span className='span3'>Business Needs</span></h1>

                <div className='div-propstext3'>

                    <div className='div--propstext3'>
                        <PropsCard3 image2={"/webicon1.webp"} text9={"TRAFFIC"} text10={"Drive more high-quality local leads to your business through optimized Google search and social visibility."} />
                    </div>

                    <div className='div--propstext3-1'>
                        <PropsCard3 image2={"/webicon2.webp"} text9={"CAPTURE"} text10={"Convert website visitors into real conversations using web chat widgets and fast lead capture forms."} />
                    </div>

                    <div className='div--propstext3-2'>
                        <PropsCard3 image2={"/webicon3.webp"} text9={"NURTURING"} text10={"Automatically follow up with every lead via SMS and email so no one slips through the cracks."} />
                    </div>

                    <div className='div--propstext3-3'>
                        <PropsCard3 image2={"/webicon4.webp"} text9={"CONVERT"} text10={"Turn prospects into paying customers by making appointment booking and payments incredibly simple."} />
                    </div>

                    <div className='div--propstext3-4'>
                        <PropsCard3 image2={"/webicon5.webp"} text9={"REFER"} text10={"Automatically request 5-star Google reviews from happy customers to drive even more organic traffic."} />
                    </div>

                </div>

            </section>


            <section>

                <h1 className='hero-section3'>But It Used To Be <span className='span3'>Difficult</span></h1>

                <hr className='hr4' />

                <div className='text-icon'>
                    <div className='h1text'>
                        <h1>Social Media Platforms</h1>
                    </div>

                    <div className='icon1'>
                        <img src={socialimage1} alt="" />
                        <img src={socialimage11} alt="" />

                    </div>

                    <div className="ptext-icon">
                        <p> <span className='pspan-icon'>$99 /</span>Per Month</p>
                    </div>

                </div>


                <hr className='hr4' />

                <div className='text-icon2'>
                    <div className='h1text2'>
                        <h1>Email Marketing Tools</h1>
                    </div>

                    <div className='icon1-2'>
                        <img src={socialimage2} alt="" />
                        <img src={socialimage22} alt="" />
                        <img src={socialimage222} alt="" />

                    </div>

                    <div className='ptext-icons2'>
                        <p> <span className='pspan-icon'>$149 /</span>Per Month</p>
                    </div>

                </div>


                <hr className='hr4' />

                <div className='text-icon3'>
                    <div className='h1text3'>
                        <h1>CRM Software</h1>
                    </div>

                    <div className='icon1-3'>
                        <img src={socialimage3} alt="" />
                    </div>

                    <div className="ptext-icon3">
                        <p> <span className='pspan-icon'>$199 </span>Per Month</p>
                    </div>

                </div>

                <hr className='hr4' />

                <div className='text-icon4'>
                    <div className='h1text4'>
                        <h1>Ad Platforms</h1>
                    </div>

                    <div className='icon1-4'>
                        <img src={socialimage4} alt="" />
                        <img src={socialimage44} alt="" />
                        <img src={socialimage444} alt="" />
                        <img src={socialimage4444} alt="" />

                    </div>

                    <div className="ptext-icon4">
                        <p> <span className='pspan-icon'>$249 </span>Per Month</p>
                    </div>

                </div>

                <hr className='hr4' />

                <div className='text-icon5'>
                    <div className='h1text5'>
                        <h1>Scheduling Tools</h1>
                    </div>

                    <div className='icon1-5'>
                        <img src={socialimage5} alt="" />
                        <img src={socialimage55} alt="" />
                        <img src={socialimage555} alt="" />
                        <img src={socialimage5555} alt="" />
                        <img src={socialimage55555} alt="" />

                    </div>

                    <div className="ptext-icon5">
                        <p> <span className='pspan-icon'>$79 /</span>Per Month</p>
                    </div>

                </div>

                <hr className='hr4' />

                <div className='text-icon6'>
                    <div className='h1text6'>
                        <h1>Analytics Platforms</h1>
                    </div>

                    <div className='icon1-6'>
                        <img src={socialimage6} alt="" />
                        <img src={socialimage66} alt="" />
                        <img src={socialimage666} alt="" />


                    </div>

                    <div className="ptext-icon6">
                        <p> <span className='pspan-icon'>$129 /</span>Per Month</p>
                    </div>

                </div>

                <hr className='hr4' />

                <div className='text-icon7'>
                    <div className='h1text7'>
                        <h1>Automation Tools</h1>
                    </div>

                    <div className='icon1-7'>
                        <img src={socialimage7} alt="" />
                        <img src={socialimage77} alt="" />

                    </div>

                    <div className="ptext-icon7">
                        <p> <span className='pspan-icon'>$179 /</span>Per Month</p>
                    </div>

                </div>

                <hr className='hr4' />

                <div className='text-icon8'>
                    <div className='h1text8'>
                        <h1>Project Management</h1>
                    </div>

                    <div className='icon1-8'>
                        <img src={socialimage8} alt="" />
                        <img src={socialimage88} alt="" />

                    </div>

                    <div className="ptext-icon8">
                        <p> <span className='pspan-icon'>$59/</span>Per Month</p>
                    </div>

                </div>

                <hr className='hr4' />

                <div className='text-icon9'>
                    <div className='h1text9'>
                        <h1>Payment Gateways</h1>
                    </div>

                    <div className='icon1-9'>
                        <img src={socialimage9} alt="" />
                        <img src={socialimage99} alt="" />
                        <img src={socialimage999} alt="" />
                        <img src={socialimage9999} alt="" />

                    </div>

                    <div className="ptext-icon9">
                        <p> <span className='pspan-icon'>$89 /</span>Per Month</p>
                    </div>

                </div>

                <hr className='hr4' />

                <div className='text-icon10'>
                    <div className='h1text10'>
                        <h1>Customer Support</h1>
                    </div>

                    <div className='icon1-10'>
                        <img src={socialimage10} alt="" />
                        <img src={socialimage1010} alt="" />

                    </div>

                    <div className="ptext-icon10">
                        <p> <span className='pspan-icon'>$109 /</span>Per Month</p>
                    </div>

                </div>




            </section>


            <section>

                <h1 className='hero-section3'>We know you didn't start your local business to become a full-time  <span className='span3'>Software Engineer</span></h1>


                <hr className='hrp1' />
                <hr className='hrp2' />
                <hr className='hrp3' />
                <hr className="hrp4" />

                <p className='ptext5'>"Before this system, I was losing half my leads simply because I couldn't get to my phone fast enough while on jobs. Now, the system handles the follow-up for me, and I've seen a 300% jump in bookings."</p>

                <hr className='hrp5' />
                <hr className='hrp6' />
                <hr className='hrp7' />
                <hr className="hrp8" />


                <p className='ptext6'>Trusted by <span className="spanp10">10,000+</span> local businesses to scale their bookings and growth automatically.</p>

                <div className="hubs">
                    <img src={hub1} alt="" className='hubs1' />
                    <img src={hub2} alt="" className='hubs1' />
                    <img src={hub3} alt="" className='hubs1' />
                    <img src={hub4} alt="" className='hubs1' />
                    <img src={hub5} alt="" className='hubs1' />
                </div>


                <div className="textd">

                    <div className="dtext">

                        <div className="h1textdive">

                            <h1>10,000+ Lead Captured</h1>

                        </div>

                        <div className="h1textdive">

                            <h1>5x Faster Response Time</h1>

                        </div>

                        <div className="h1textdive">

                            <h1>28hr/week Hours Saved</h1>

                        </div>

                    </div>

                    <div className="h1divetext">
                        <h1>This all-in-one software is exactly what our local business needed.
                            It completely eliminated our need for 4 other separate platforms
                            and organized our entire customer pipeline.
                        </h1>

                        <div className="imagetext">

                            <img src={avatar} alt="" />

                            <div>
                                <h2>Ronald Richards
                                </h2>

                                <p>Local Services Co.</p>
                            </div>

                        </div>
                    </div>

                </div>


            </section>


            <section>

                <div className="ticon">

                    <h1>Your 3-Step Path to <span className='h1span'> Automated Growth</span></h1>

                    <div className="dtexticon">

                        <div className="texticond">

                            <img src={image2props} alt="" />

                            <h3>1. Start Your Trial</h3>

                            <hr />

                            <p>Sign up for a free trial and experience the power of the platform for yourself. No credit card required.</p>

                        </div>

                        <div className="texticond">

                            <img src={image2props} alt="" />

                            <h3>1. Start Your Trial</h3>

                            <hr />

                            <p>Sign up for a free trial and experience the power of the platform for yourself. No credit card required.</p>

                        </div>

                        <div className="texticond">

                            <img src={image2props} alt="" />

                            <h3>1. Start Your Trial</h3>

                            <hr />

                            <p>Sign up for a free trial and experience the power of the platform for yourself. No credit card required.</p>

                        </div>

                    </div>

                    <button className='butoon'>Start Your 14-Days Free Trial</button>




                </div>

            </section>


            <section>

                <h1 className='hh1'>Why We Do What We Do - A Letter From <span className='spanhh1'> Our CEO</span></h1>


                <hr className='hrt1' />
                <hr className='hrt2' />
                <hr className='hrt3' />

                <div className='imaget'>
                    <img src={ballavater} alt="" className='ballavater' />
                    <h4>Ronald Richards</h4>
                    <p className='pimg'>Founder & CEO</p>

                </div>

                <h1 className='h1img'>
                    At Automark, we know you started your local business to serve your community,
                    not to become a software engineer.<span className='spanimg'> The problem is most modern marketing tools
                        are too complex, scattered, and disconnected, which leaves you feeling overwhelmed
                        and stuck in the daily admin grind.</span>
                </h1>

                <h1 className='h1img2'>
                    We believe you shouldn't have to pay for five different subscriptions or spend
                    your weekends sending emails just to grow your company. We understand how frustrating it is to watch
                    hard-earned leads slip through the cracks, which is why we built a single, unified platform that puts
                    your follow-ups, reviews, and bookings on complete autopilot.
                </h1>

                <h1 className='h1img3'>Here's how we do it:</h1>

                <div className="textimg">
                    <h1 className='texth1ig'>1. Plug In Your Business Data</h1>
                    <h1 className='texth1ig'>2. Activate Our Local Workflows</h1>
                    <h1 className='texth1ig'>3. Watch Your Bookings Grow</h1>
                </div>

                <h1 className='texth1ig4'>
                    Stop wasting money on scattered tools that don't
                    talk to each other, and instead enjoy a streamlined
                    business with consistent, predictable revenue growth.
                </h1>

                <button className='butoon1-'>Start Your 14-Days Free Trial</button>






                <hr className='hrt4' />
                <hr className='hrt5' />
                <hr className='hrt6' />
                <hr className='hrt7' />
                <hr className='hrt8' />

            </section>


            <section>

                <h1 className='h1tt'>Connect all your <span className="h1ttspan">Applications</span></h1>


                <div className='imagtext'>
                    <img src={youtube} alt="" className='imagebackground3' />
                    <img src={zendesk} alt="" className='imagebackground4' />
                    <img src={snapchat} alt="" className='imagebackground1' />
                    <img src={slack} alt="" className='imagebackground2' />
                    <img src={fastapi} alt="" className='imagebackground5' />
                    <img src={aitable} alt="" className='imagebackground6' />
                    <img src={mailchimp} alt="" className='imagebackground7' />
                    <img src={asana} alt="" className='imagebackground8' />

                </div>


                <h1 className='h1tfree'>Free Resource for <span className="sh1free"> Local Business Owners</span></h1>

                <div className="booktext">

                    <div className="tb">
                        <h2>The "Leaking Bucket" Audit: 5 Ways You're Losing Local Leads (And How to Fix Them).</h2>

                        <p>Did you know that most small businesses lose up to 50% of their potential sales simply because of slow follow-up?</p>

                        <p>Download our FREE Checklist to identify the "lead leaks" in your current business and learn how to plug them with simple software automation.</p>

                        <p className='ptb'>The Follow-Up Audit: A step-by-step guide to measuring your lead response time.</p>

                        <p className='ptb'>Automation Quick-Wins: 3 workflows you can set up today to start booking more local appointments.</p>

                        <p className='ptb'>The Tech Stack Check: Stop paying for 5 different software tools.</p>

                    </div>

                    <div className="bt">

                        <img src={royalbook} alt="" />

                        <input type="text" className='inputbt1' placeholder='Name' />

                        <input type="email" className='inputbt1' placeholder='Email Address' />

                        <button className='inputbt3'>Get Free Checklist</button>

                    </div>

                </div>

            </section>


            <section>

                <h1 className='h1price'>Affordable <span className='spanprice'>Pricing Plans</span></h1>

                <p className='pprice' >Choose the plan that fits your local business and start growing automatically.</p>

                <div className="boton">
                    <p className='pboton'>Monthly</p>
                    <p>Yearly</p>
                </div>


                <div className='money'>

                    <div className='money1'>

                        <h1>$970/ <span>Per Mont</span></h1>

                        <p className="pmoney1">
                            Essentials
                        </p>

                        <p className="pmoney2">
                            The core necessities for organizing your leads and capturing more business.
                        </p>

                        <button>Start Free Trial</button>

                        <p className="moneyp">
                            Features Included
                        </p>

                        <p className="pmoney3">
                            <i class="fa-solid moneyicon fa-check"></i>
                            Unified Lead Inbox
                        </p>

                        <p className="pmoney4">
                            <i class="fa-solid moneyicon fa-check"></i>
                            Missed Call Auto-Responder
                        </p>

                        <p className="pmoney5">
                            <i class="fa-solid moneyicon fa-check"></i>
                            Autopilot Review Generator
                        </p>

                        <p className="pmoney6">
                            <i class="fa-solid moneyicon1 fa-minus"></i>
                            24/7 Appointment Scheduler
                        </p>

                        <p className="pmoney7">
                            <i class="fa-solid moneyicon1 fa-minus"></i>
                            Automated Follow-Up Campaigns
                        </p>


                    </div>

                    <div className='money1'>

                        <h1>$297/  <span>Per Month</span></h1>

                        <p className="pmoney1">
                            Growth
                        </p>

                        <p className="pmoney2">
                            Everything you need to put your business growth on complete autopilot.
                        </p>

                        <button>Start Free Trial</button>

                        <p className="moneyp">
                            Features Included
                        </p>

                        <p className="pmoney3">
                            <i class="fa-solid moneyicon fa-check"></i>
                            Unified Lead Inbox & Reviews
                        </p>

                        <p className="pmoney4">
                            <i class="fa-solid moneyicon fa-check"></i>
                            24/7 Appointment Scheduler
                        </p>

                        <p className="pmoney5">
                            <i class="fa-solid moneyicon fa-check"></i>
                            Automated Follow-Up Campaigns
                        </p>

                        <p className="pmoney6">
                            <i class="fa-solid moneyicon fa-check"></i>
                            High-Converting Websites & Funnels
                        </p>

                        <p className="pmoney7">
                            <i class="fa-solid moneyicon1 fa-minus"></i>
                            Advanced API Integrations
                        </p>


                    </div>


                    <div className='money1'>

                        <h1>$497/ <span>Per Month$</span></h1>

                        <p className="pmoney1">
                            Scale
                        </p>

                        <p className="pmoney2">
                            Total control and advanced tools to scale multiple locations seamlessly.
                        </p>

                        <button>Start Free Trial</button>

                        <p className="moneyp">
                            Features Included
                        </p>

                        <p className="pmoney3">
                            <i class="fa-solid moneyicon fa-check"></i>
                            Everything in Growth
                        </p>

                        <p className="pmoney4">
                            <i class="fa-solid moneyicon fa-check"></i>
                            Unlimited Social Media Posting
                        </p>

                        <p className="pmoney5">
                            <i class="fa-solid moneyicon fa-check"></i>
                            Advanced API Integrations
                        </p>

                        <p className="pmoney6">
                            <i class="fa-solid moneyicon fa-check"></i>
                            Multi-Location Support
                        </p>

                        <p className="pmoney7">
                            <i class="fa-solid moneyicon fa-check"></i>
                            Dedicated Account Manager
                        </p>


                    </div>

                </div>



            </section>


            <section>

                <h1 className="h1owner">Real Stories From Local <span className="spanowner"> Business Owners</span></h1>

                <div className="imagedivtext">

                    <div className="image2text">

                        <img src={bmw2} alt="" />

                        <div className="image3text">
                            <h3>
                                We used to lose at least 3-4 jobs a week because we
                                couldn't answer the phone while on a roof. The Missed
                                Call Auto-Responder immediately cut that to zero.
                                This software pays for itself a hundred times over.
                            </h3>

                            <hr />

                            <p>Marvin McKinney</p>

                            <p className="p1">Roofing Company Owner</p>
                        </div>


                    </div>

                    <div className="image2text">

                        <img src={bmw2} alt="" />

                        <div className="image3text">
                            <h3>
                                We used to lose at least 3-4 jobs a week because we
                                couldn't answer the phone while on a roof. The Missed
                                Call Auto-Responder immediately cut that to zero.
                                This software pays for itself a hundred times over.
                            </h3>

                            <hr />

                            <p>Marvin McKinney</p>

                            <p className="p1">Roofing Company Owner</p>
                        </div>


                    </div>

                    <div className="image2text">

                        <img src={bmw2} alt="" />

                        <div className="image3text">
                            <h3>
                                We used to lose at least 3-4 jobs a week because we
                                couldn't answer the phone while on a roof. The Missed
                                Call Auto-Responder immediately cut that to zero.
                                This software pays for itself a hundred times over.
                            </h3>

                            <hr />

                            <p>Marvin McKinney</p>

                            <p className="p1">Roofing Company Owner</p>
                        </div>


                    </div>

                </div>

            </section>



            <section>

                <div className="lasttext">

                    <div className="lasttext1">

                        <h1>Quick Answers for the Smart Investors</h1>

                        <p>Find answers to common questions about our product and services.</p>

                        <button>Get This Template</button>

                    </div>


                    <div className="lasttext2">

                        <div className="h2icon4">
                            <h2>
                                Is this software hard to set up?
                            </h2>

                            <i class="fa-solid fa-minus"></i>
                        </div>

                        <div className="h2icon5">
                            <h2>
                                What if I already have a website?
                            </h2>

                            <i class="fa-solid fa-minus"></i>
                        </div>

                        <div className="h2icon1">
                            <h2>
                                Can this replace my existing CRM or Mailchimp?
                            </h2>

                            <i class="fa-solid fa-minus"></i>
                        </div>

                        <div className="h2icon2">
                            <h2>
                                How does the Missed Call Auto-Responder work?
                            </h2>

                            <i class="fa-solid fa-minus"></i>
                        </div>

                        <div className="h2icon3">
                            <h2>
                                Are there any hidden fees?
                            </h2>

                            <i class="fa-solid fa-minus"></i>
                        </div>



                    </div>



                </div>



            </section>


            <section>

                <div className="textcolor">

                    <h1>
                        Ready to put Your Local Business Growth On <span> Autopilot</span>
                    </h1>

                    <p>Stop Wasting Thousands Tools That Don't Convert And Start Enjoying Streemlined, Predictable Growth</p>

                    <button>Start Your 14-Days Trial</button>
                </div>


            </section>

            <Footer/>


        </>

    )
}

const PropsCard = ({

    image, text1, text2, text3, text4, text5,

}) => {

    return (
        <>
            <div className='div-props1'>
                <img src={image} alt="" className='image1' />
                <h2 className='h2text'>{text1}</h2>
                <p className='p1'>{text2}</p>
                <p className='p1'>{text3}</p>
                <p className='p1'>{text4}</p>
                <p className='p1'>{text5}</p>
            </div>


        </>



    )
}

const PropsCard2 = ({ image1, text6, text7, text8 }) => {
    return (
        <div className='div-props2'>
            <img src={image1} alt="" className='image2' />
            <h2 className='h2text1'>{text6}</h2>
            <p className='p2'>{text7}</p>
            <p className='p2'>{text8}</p>

        </div>

    )
}

const PropsCard3 = ({ image2, text9, text10, }) => {
    return (
        <div className='div-props3'>
            <img src={image2} alt="" className='image3' />
            <h2 className='h2text3'>{text9}</h2>
            <p className='p3'>{text10}</p>

        </div>

    )
}


