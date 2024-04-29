<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Axios from 'axios'
import { ErrorDefaultAlert } from "@/components/services/SweetAlert";
=======
import React, { useEffect } from "react";
import { useRouter } from "next/router";

>>>>>>> main
import BlogData from "../../../data/blog/blog.json";
import PageHead from "@/pages/Head";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Cart from "@/components/Header/Offcanvas/Cart";
import BackToTop from "@/pages/backToTop";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import BlogDetails from "@/components/Blogs/BlogDetails";
import BlogListItems from "@/components/Blogs/Blog-Sections/BlogList-Items";
import Instagram from "@/components/Instagram/Instagram";
import BlogBreadCrumb from "@/components/Common/Blog-BreadCrumb";
<<<<<<< HEAD
import API_URL from "@/pages/constant";
import {EncryptData} from "@/components/services/encrypt-decrypt";

const SingleBlog = () => {
  const router = useRouter();
  // const postId = parseInt(router.query.blogId);

  let blogPosts;

  // if (postId <= 14) {
  //   blogPosts = JSON.parse(JSON.stringify(BlogData.blogList));
  // } else {
  //   blogPosts = JSON.parse(JSON.stringify(BlogData.blogGrid));
  // }

  const REACT_APP = API_URL
  const [blogData, setBlogData] = useState([])
  const [bid, setbid] = useState(0)
  const getAllBlog = () => {
    const url = window.location.href
    const parts = url.split("/");
    const postId = parts[parts.length - 1];
    setbid(postId)
    Axios.get(`${REACT_APP.API_URL}/api/blog/GetBlogDetail/${EncryptData(parseInt(postId))}`, {
      headers: {
        ApiKey: `${REACT_APP.API_KEY}`
      }
    })
        .then(res => {
          console.log(res.data)
          if (res.data) {
            if (res.data.length !== 0) {
              // this.setState({
              //   sCategory: res.data[0]['sCategory'],
              //   sBlogTitle: res.data[0]['sBlogTitle'],
              //   sFName: res.data[0]['sFName'],
              //   sLName: res.data[0]['sLName'],
              //   sImagePath: res.data[0]['sImagePath'],
              //   sPhoto: res.data[0]['sPhoto'],
              //   sBlogContent: res.data[0]['sBlogContent'],
              //   dCreatedDate: res.data[0]['dCreatedDate'],
              //   blogcomment : res.data[0]['bIsCommentAllowed']
              // })
              setBlogData(res.data)
            }
          }
        })
        .catch(err => {
          { ErrorDefaultAlert(err) }
        })
  }
  // const matchedBlog = blogData.find((post) => post.nBId === bid);
  // console.log(matchedBlog)
  useEffect(() => {
    getAllBlog()
    // if (postId && !matchedBlog) {
    //   router.push("/blog-list");
    // }
  }, []);
=======

const SingleBlog = () => {
  const router = useRouter();
  const postId = parseInt(router.query.blogId);
  let blogPosts;

  if (postId <= 14) {
    blogPosts = JSON.parse(JSON.stringify(BlogData.blogList));
  } else {
    blogPosts = JSON.parse(JSON.stringify(BlogData.blogGrid));
  }

  const matchedBlog = blogPosts.find((post) => post.id === postId);

  useEffect(() => {
    if (postId && !matchedBlog) {
      router.push("/blog-list");
    }
  }, [matchedBlog, router]);
>>>>>>> main

  return (
    <>
      <PageHead title="Blog Details - Online Courses & Education NEXTJS14 Template" />
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <Cart />

          <div className="rbt-overlay-page-wrapper">
<<<<<<< HEAD
            <BlogBreadCrumb matchedBlog={blogData} />
=======
            <BlogBreadCrumb matchedBlog={matchedBlog} />
>>>>>>> main

            <div className="rbt-blog-details-area rbt-section-gapBottom breadcrumb-style-max-width">
              <div className="blog-content-wrapper rbt-article-content-wrapper">
                <BlogDetails
<<<<<<< HEAD
                  matchedBlog={blogData !== undefined ? blogData : ""}
                />
                {/*<div className="related-post pt--60">*/}
                {/*  <div className="section-title text-start mb--40">*/}
                {/*    <span className="subtitle bg-primary-opacity">*/}
                {/*      Related Post*/}
                {/*    </span>*/}
                {/*    <h4 className="title">Similar Post</h4>*/}
                {/*  </div>*/}
                {/*  <BlogListItems*/}
                {/*    selectedBlogs={BlogData.blogList}*/}
                {/*    start={1}*/}
                {/*    end={4}*/}
                {/*  />*/}
                {/*</div>*/}
              </div>
            </div>

            {/*<Instagram />*/}
=======
                  matchedBlog={matchedBlog !== undefined ? matchedBlog : ""}
                />
                <div className="related-post pt--60">
                  <div className="section-title text-start mb--40">
                    <span className="subtitle bg-primary-opacity">
                      Related Post
                    </span>
                    <h4 className="title">Similar Post</h4>
                  </div>
                  <BlogListItems
                    selectedBlogs={BlogData.blogList}
                    start={1}
                    end={4}
                  />
                </div>
              </div>
            </div>

            <Instagram />
>>>>>>> main
          </div>

          <BackToTop />
          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default SingleBlog;
