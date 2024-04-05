import React, {useState} from "react";
import img from "@/public/images/others/thumbnail-placeholder.svg";
import Link from "next/link";
import ReactPlayer from 'react-player'

const IntroVideo = () => {
  const [file, setFile] = useState();

  const [thumbnail, setthumbnail] = useState();
  function handleChangeThumbnail(e) {
    // console.log(e.target.files);
    setthumbnail(URL.createObjectURL(e.target.files[0]));
  }

  const getBase64 = (file) => {
    return new Promise(resolve => {
      let baseURL = ""
      // Make new FileReader
      const reader = new FileReader()

      // Convert the file to base64 text
      reader.readAsDataURL(file)

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result
        resolve(baseURL)
      }
    })
  }
  const handleChange = (event) => {
    const fileext = ['video/mp4']
    if (event.target.files[0].size < 1000000000) {
      if (fileext.includes(event.target.files[0].type)) {
        getBase64(event.target.files[0])
            .then(result => {
              // promovideo = result
            })
            .catch(err => {

            })
          setFile(URL.createObjectURL(event.target.files[0]))
        // this.setState({
        //   videofile: URL.createObjectURL(event.target.files[0])
        // })
      } else {
        alert("Only select video file type")
      }
    } else {
      alert("Please upload file less than 100MB")
    }
  };
  return (
    <>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Introduction video</h4>
            {/*<h3>Your profile photo is your first impression</h3>*/}
            <p>Add a landscape video of maximum 2 minutes</p>
          </div>

          <div className={'row mt-5 p-0'}>
            <div className={'col-lg-6'}>
              <input type="file" id="videofile" name="videofile"
                     onChange={handleChange}
                     accept="video/*"/>
              {/*<input type="file" className={'p-0'} onChange={handleChange}/>*/}
              {/*<small>JPG or PNG format, maximum 2 MB</small>*/}
              {file ? <ReactPlayer
                  // playing={this.state.videoplay}
                  controls
                  width="100%"
                  height="200px"
                  url={file}></ReactPlayer> : ''}
              <p className={'mt-5 m-0'}>Or</p>
              <p className={'m-0 mb-3'}>Paste a link of video</p>
              <div className="form-group">
                <input name="con_name" type="text" placeholder="Video Url"/>
                <span className="focus-border"></span>
              </div>
            </div>
            <div className={'col-lg-6 thumbnail-preview'}>
              <h6>Guidelines for capturing an exceptional video</h6>
              {/*<img src={'/images/client/img1.png'}></img>*/}
              {/*<img src={'/images/client/img2.png'}></img>*/}
              {/*<img src={'/images/client/img3.png'}></img>*/}
              <ul className="rbt-list-style-1 mt-5">
                <li>
                  <i className="feather-check"></i>
                  Look straight at camera and smile
                </li>
                <li>
                  <i className="feather-check"></i>
                  Maintain genuine and engaging facial expression
                </li>
                <li>
                  <i className="feather-check"></i>
                  Make sure your head and shoulders are covered
                </li>
                <li>
                  <i className="feather-check"></i>
                  Use natural lighting
                </li>
                <li>
                  <i className="feather-check"></i>
                  Simple, uncluttered and white background
                </li>
              </ul>


                <label className={'mt-5 ms-5'}>Add a thumbnail</label>
                <input type="file" className={'p-0 mt-5 ms-5'} onChange={handleChangeThumbnail}/>
                <small className={'p-0 mt-5 ms-5'}>JPG or PNG format, maximum 2 MB</small>
                {thumbnail ? <img className={'mt-5 ms-5'} src={thumbnail} /> : ''}
            </div>


            <div className="col-lg-12 mt-5">
              <div className="form-submit-group">
                <button
                    type="submit"
                    className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
                >
                <Link href={"/become-a-tutor/interest"} className={'text-white'}>

                     <span className="icon-reverse-wrapper">
                      <span className="btn-text">Continue</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </Link>

                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default IntroVideo;
