import './App.css';
import './css/bootstrap.css';
import './css/bootstrap.min.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './PaginationComponents/Posts.js';
import Pagination from './PaginationComponents/Pagination.js';


import bloglogo from './img/blog-logo.png';
import bloglist1 from './img/blog-list-1.png';
import bloglist2 from './img/blog-list-2.png';
import linkio from './img/linkio.png';
import feedspot from './img/feedspot.png';
import author from './img/author.png';

import joomla from './img/icons/joomla.png';
import angulari from './img/icons/angular-i.png';
import html from './img/icons/html.png';
import css from './img/icons/css.png';
import bootstrap from './img/icons/bootstrap.png';
import node from './img/icons/node.png';
import drupal from './img/icons/drupal.png';
import wordpress from './img/icons/wordpress.png';
import java from './img/icons/java.png';


const element1 = 
  <div className="blog-container">

    {/*Header*/}
    <header className = "header">
      <div className="main-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
          {/* Brand */}
          <a className="navbar-brand" href="blog.html"><img src={bloglogo} alt="blog-logo"/></a>

          {/* Toggler/collapsibe Button */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="fa fa-bars"></span>
            </button>

            {/* Navbar links */}
            <div className="collapse navbar-collapse" id="collapsibleNavbar">

            <ul className="navbar-nav" >
            <li className="nav-item">
              <a className="nav-link" href="blogging-tools.html" style={{color: 'black'}}>Blogging Tools</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{color: 'black'}}>Google</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="internet-marketing.html" style={{color: 'black'}}>Internet Marketing</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="services.html" style={{color: 'black'}}>Our Services</a>
        
            </li>
            <li className="nav-item">
              <a className="nav-link" href="advertise.html" style={{color: 'black'}}>Advertise With Us</a>
            </li>
          </ul>

              <div className="">
                <ul style={{display:'flex',listStyle:'none'}}>
                  <li>
                    <a href="#" className="btn request-btn nav-link" 
                    style={{
                            color: '#FFFFFF',
                            backgroundColor: '#BE2664',
                            borderColor: '#BE2664',
                            padding: '8px 20px',
                            borderRadius: '20px',
                            marginTop: '20px',
                    }}
                    >Request a Free quote</a>
                  </li>
                  <li>
                    <a href="contact-us.html" className="btn"
                    style={{
                      color: 'black',
                      backgroundColor: 'darkgray',
                      borderColor: '#FFFFFF',
                      padding: '8px 20px',
                      borderRadius: '20px',
                      marginTop: '20px'
              }}
                    >Contact Us</a>
                  </li>
                </ul>
              </div>  
            </div>

          </nav>        
        </div>
      </div>
    </header>

    {/*Newsletter-sec*/}
    <section className = "newsletter-sec">
    <div className="container" 
    style={{

    }}
    >
      <h1 style={{color: "white", 
                  fontSize:'70px',
                  width:'2000px',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  marginTop: '0px',
    
    }}>Smart marketing starts here</h1>
      <h4 style={{color: "white", lineHeight: '50px'}}>Join over 150,000 marketing managers who get our best digital marketing insights, strategies and tips delivered straight to their inbox.</h4>
      <form action="" method="">
      <div className="service-form-box" style={{display: 'inline'}}>
        <div className="form-group" 
        style={{
          borderRadius: '100px',
          paddingRight: '0px',
  }}>
          <input type="email" name="" className="form-control" placeholder="ENTER YOUR WORK EMAIL"/>
        </div>
        <div className="submit-btn">
          <button type="submit" className="btn arrow-btn red-btn" style={{
            color: '#FFFFFF',
            backgroundColor: '#BE2664',
            borderColor: '#BE2664',
            padding: '8px 20px',
            borderRadius: '20px',
            marginTop: '20px',
    }}>Subscribe</button>
        </div>
      </div>
    </form>
  </div>
  </section>
  </div>

    {/* service-faq-sec pagination host */}
const element2 = 
  <div className="blog-container">    
    <section className = "blog-page-sec" >
    <div className="container">
    <div className="blog-page-in">
      <div className="blog-list-top">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="blog-list-top-img">
              <a href="single-blog.html"><img src={bloglist1}/></a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blog-list-box" style={{padding: '60px'}}>
              <h3><a href="single-blog.html">Top Software Development Companies in London – Compare Quotes</a></h3>
              <p className="blog-desc">Kickstart the growth of your business with a professionally designed website and software development services offered by Logicsofts, one of the leading software development</p>
              <a href="single-blog.html" className="btn btn-white arrow-btn">Read more</a>
              <div className="blog-list-author">
                <div className="blog-author-img">
                  <img src={author}/>
                </div>
                <div className="blog-author-name">
                  <h4><span>Author : </span><a href="#">Sam Singh</a></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-list-bottom">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-list-row">
              <div className="row">
                <div className="col-md-6">
                  <div className="blog-list-box">
                    <div className="blog-list-img">
                      <a href="single-blog.html"><img src={bloglist2}/></a>
                    </div>
                    <h3><a href="single-blog.html">Consider These 7 Things Before Moving Into Your New Home</a></h3>
                    <p className="blog-desc">Leaving your home behind to move into a new one is nerve-wracking as it is with surprises waiting for you ...</p>
                    <a href="single-blog.html" className="btn btn-white arrow-btn">Read more</a>
                    <div className="blog-list-author">
                      <div className="blog-author-img">
                        <img src={author}/>
                      </div>
                      <div className="blog-author-name">
                        <h4><span>Author : </span><a href="#">Sam Singh</a></h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="blog-list-box">
                    <div className="blog-list-img">
                      <a href="single-blog.html"><img src={bloglist2}/></a>
                    </div>
                    <h3><a href="single-blog.html">Consider These 7 Things Before Moving Into Your New Home</a></h3>
                    <p className="blog-desc">Leaving your home behind to move into a new one is nerve-wracking as it is with surprises waiting for you ...</p>
                    <a href="single-blog.html" className="btn btn-white arrow-btn">Read more</a>
                    <div className="blog-list-author">
                      <div className="blog-author-img">
                        <img src={author}/>
                      </div>
                      <div className="blog-author-name">
                        <h4><span>Author : </span><a href="#">Sam Singh</a></h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="blog-list-box">
                    <div className="blog-list-img">
                      <a href="single-blog.html"><img src={bloglist2} /></a>
                    </div>
                    <h3><a href="single-blog.html">Consider These 7 Things Before Moving Into Your New Home</a></h3>
                    <p className="blog-desc">Leaving your home behind to move into a new one is nerve-wracking as it is with surprises waiting for you ...</p>
                    <a href="single-blog.html" className="btn btn-white arrow-btn">Read more</a>
                    <div className="blog-list-author">
                      <div className="blog-author-img">
                        <img src={author}/>
                      </div>
                      <div className="blog-author-name">
                        <h4><span>Author : </span><a href="#">Sam Singh</a></h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="blog-list-box">
                    <div className="blog-list-img">
                      <a href="single-blog.html"><img src={bloglist2}/></a>
                    </div>
                    <h3><a href="single-blog.html">Consider These 7 Things Before Moving Into Your New Home</a></h3>
                    <p className="blog-desc">Leaving your home behind to move into a new one is nerve-wracking as it is with surprises waiting for you ...</p>
                    <a href="single-blog.html" className="btn btn-white arrow-btn">Read more</a>
                    <div className="blog-list-author">
                      <div className="blog-author-img">
                        <img src={author}/>
                      </div>
                      <div className="blog-author-name">
                        <h4><span>Author : </span><a href="#">Sam Singh</a></h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-sidebar">
              <div className="blog-sidebar-box">
                <h4>As featured on Linkio Top SEO Agencies</h4>
                <img src={linkio}/>
              </div>
              <div className="blog-sidebar-box">
                <h4>As featured on Feedspot Top 100 UK Marketing Blogs</h4>
                <img src={feedspot}/>
              </div>
              <div className="blog-sidebar-list">
                <h3>Recent Blog</h3>
                <ul>
                  <li><a href="#">Top Software Development Companies in London – Compare Quotes</a></li>
                  <li><a href="#">What is Web Application Development – A Beginner’s Guide</a></li>
                  <li><a href="#">The Ultimate Guide to Outsource Web Development</a></li>
                  <li><a href="#">Web Developer vs Software Developer – What is the Difference?</a></li>
                  <li><a href="#">The Ultimate Guide to Micro Influencers in the UK 2020</a> </li>
                </ul>
              </div>
              <div className="blog-sidebar-list">
                <h3>Main Services</h3>
                <ul>
                  <li><a href="web-design.html">Web Design</a></li>
                  <li><a href="web-development.html">Web Development</a></li>
                  <li><a href="digital-marketing.html">Digital Marketing</a></li>
                  <li><a href="seo-marketing.html">SEO</a></li>
                  <li><a href="influencer-marketing.html">Influencer Marketing</a> </li>
                </ul>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </div>
    </section>
  </div>;
    
      {/* service-contact-sec */}
const element3 = 
  <div className="blog-container">
    <section className = "service-contact-sec">
      <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="service-contact-left">
            <h3>Get in touch/ also schedule a call/meet </h3>
            <h4><span>Schedule a call or meeting</span> with our digital marketing expert for <span>FREE consultation</span>.</h4>
            <a href="#" className="btn arrow-btn red-btn">Schedule Consultation</a>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="service-contact-form">
            <h4><span>If you want us to prepare a digital marketing scope for your business,</span> please fill in the necessary information required for us to proceed.</h4>
            <form action="" method="">
              <div className="service-form-box">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" name="" className="form-control"/>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="" className="form-control"/>
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" name="" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Service Category</label>
                  <select className="form-control">
                    <option>Select</option>
                    <option>Web Design</option>
                    <option>Web Development</option>
                    <option>Digital Marketing</option>
                    <option>Graphic Design</option>
                    <option>IT Services</option>
                    <option>Mobile Apps</option>
                    <option>White Label Solutions</option>
                    <option>Outsourcing</option>
                    <option>Printing</option>
                    <option>Consultation</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Date</label>
                  <input type="date" name="" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Time</label>
                  <select className="form-control">
                    <option>Morning</option>
                    <option>Noon</option>
                    <option>Evening</option>
                  </select>
                </div>
              </div>
              <div className="submit-btn text-right">
                <button type="submit" className="btn arrow-btn red-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </section>

    {/* footer */}
    <footer className = "footer">
    
    <div className="top-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-6">
            <div className="row">
              <div className="col-lg-3">
                <div className="footer-box">
                  <ul className="footer-menu">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about-us.html">About Us</a></li>
                    <li><a href="our-work.html">Our Work</a></li>
                    <li><a href="faq.html">Faq's</a></li>
                    <li><a href="how-we-work.html">How We Work</a></li>
                  </ul>
                </div>
              </div>
               <div className="col-lg-9">
                 <div className="footer-box">
                  <h3>Services</h3>
                  <ul className="footer-service-menu">
                    <li><a href="web-design.html">Web Design</a></li>
                    <li><a href="web-development.html">Web Development</a></li>
                    <li><a href="digital-marketing.html">Digital Marketing</a></li>
                    <li><a href="graphic-design.html">Graphic Design</a></li>
                    <li><a href="it-services.html">IT Services</a></li>
                    <li><a href="mobile-apps.html">Mobile Apps</a></li>
                    <li><a href="white-label-solutions.html">White Label Solutions</a></li>
                    <li><a href="outsourcing.html">Outsourcing</a></li>
                    <li><a href="printing.html">Printing</a></li>
                    <li><a href="consultation.html">Consultation</a></li>
                  </ul>
                </div>
               </div>
               
            </div>
          </div>
          <div className="col-lg-4 col-6">
            <div className="footer-box footer-contact">
              <h3>Contact Us</h3>
              <ul>
                <li><span>Address: </span>Suite 6, 17 Comalco Ct Thomastown, 3074</li>
                <li><span>Telephone:</span><a href="tel:03 8595 5246">03 8595 5246</a></li>
                <li><span>Email:</span><a href="mailto:info@logicsofts.com.au">info@logicsofts.com.au</a></li>
              </ul>
            </div>
            
          </div>
          <div className="col-lg-7 col-12 footer-tech-row">
            <div className="footer-box">
              <h3>TECHNOLOGY USED</h3>
              <div className="tech-img">
                <ul style={{
                  display: 'inline-flex', 
                  listStyle:'none',
                  padding: '2px',
                  margin: '15px 15px 15px 15px',
                  
              }} >
                  <li><img src={drupal}/></li>
                  <li><img src={wordpress}/></li>
                  <li><img src={joomla}/></li>
                  <li><img src={java}/></li>
                  <li><img src={angulari}/></li>
                  <li><img src={html}/></li>
                  <li><img src={css}/></li>
                  <li><img src={bootstrap}/></li>
                  <li><img src={node}/></li>
                </ul>
              </div>
            </div>
           </div>
        </div>
      </div>
    </div>
    <div className="copyright">
      <div className="container">
        <p>Copyright - 2020-2021 All Right Reserved - Logicsofts Australia Ptv Ltd. - ABN29611694529</p>
      </div>
    </div>
    </footer>
  </div> ;

  

  const App = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = async() => {
          setLoading(true);
          const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
          setPosts(res.data);
          setLoading(false);
        }

        fetchPosts();
    }, []);

    //fetching current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    //Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (<div>
      {element1}
      {element2}
      <h1 className="text-primary mb-3"></h1>
                  <Posts posts={currentPosts} loading={loading} style={{color:'red'}} />
                  <Pagination
                    
                    postsPerPage={postsPerPage} 
                    totalPosts={posts.length}
                    paginate={paginate}
                    
                  />
                  
      {element3}
      </div>
      
      );
}

export default App;
