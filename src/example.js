import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./style.css";
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>

        <ul style={{ display: "none" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  const [showUC, setShowUc] = useState(false);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingLeft: "4vw",
          paddingRight: "4vw",
          height: "60px",
          paddingTop: 8
        }}
      >
        <svg
          width={108}
          height={36}
          viewBox="0 0 108 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.7391 21.7392L0 27.8262V17.3914L11.3043 11.3044L11.7391 21.7392Z"
            fill="#1E2A35"
          />
          <path
            d="M11.7391 21.7375L0 27.8245L17.8261 35.2158V24.3462L11.7391 21.7375Z"
            fill="#818F9C"
          />
          <path
            d="M17.8261 13.9128L30 7.3911L11.3043 -0.000200272V11.1589L17.8261 13.9128Z"
            fill="#818F9C"
          />
          <path
            d="M11.293 11.3044L11.7278 21.7392L17.8147 24.3479V13.9131L11.293 11.3044Z"
            fill="white"
          />
          <path
            d="M17.8203 24.3464V13.9116L29.5594 7.38989V17.3899L17.8203 24.3464Z"
            fill="#1E2A35"
          />
          <path
            d="M54.9937 23.186H50.312L49.3325 26H47.1494L51.7148 13.9141H53.5991L58.1729 26H55.9814L54.9937 23.186ZM50.9014 21.4927H54.4043L52.6528 16.479L50.9014 21.4927ZM65.8023 25.1201C65.2101 25.8174 64.369 26.166 63.2788 26.166C62.3049 26.166 61.5661 25.881 61.0625 25.311C60.5645 24.741 60.3154 23.9165 60.3154 22.8374V17.0186H62.3325V22.8125C62.3325 23.9525 62.8057 24.5225 63.752 24.5225C64.7315 24.5225 65.3928 24.1711 65.7359 23.4683V17.0186H67.7529V26H65.8521L65.8023 25.1201ZM70.5347 21.4429C70.5347 20.0594 70.8557 18.9499 71.4976 18.1143C72.1395 17.2731 73 16.8525 74.0791 16.8525C75.031 16.8525 75.8002 17.1846 76.3868 17.8486V13.25H78.4038V26H76.5777L76.4781 25.0703C75.8749 25.8008 75.0697 26.166 74.0625 26.166C73.0111 26.166 72.1589 25.7427 71.5059 24.896C70.8584 24.0493 70.5347 22.8983 70.5347 21.4429ZM72.5518 21.6172C72.5518 22.5303 72.7261 23.2441 73.0747 23.7588C73.4289 24.2679 73.9297 24.5225 74.5772 24.5225C75.4017 24.5225 76.0049 24.1545 76.3868 23.4185V19.5835C76.016 18.8641 75.4183 18.5044 74.5938 18.5044C73.9408 18.5044 73.4372 18.7645 73.083 19.2847C72.7289 19.7993 72.5518 20.5768 72.5518 21.6172ZM83.7588 26H81.7418V17.0186H83.7588V26ZM81.6172 14.686C81.6172 14.3761 81.7141 14.1188 81.9078 13.9141C82.107 13.7093 82.3892 13.6069 82.7545 13.6069C83.1197 13.6069 83.4019 13.7093 83.6011 13.9141C83.8004 14.1188 83.9 14.3761 83.9 14.686C83.9 14.9904 83.8004 15.245 83.6011 15.4497C83.4019 15.6489 83.1197 15.7485 82.7545 15.7485C82.3892 15.7485 82.107 15.6489 81.9078 15.4497C81.7141 15.245 81.6172 14.9904 81.6172 14.686ZM89.5953 14.8354V17.0186H91.1807V18.5127H89.5953V23.5264C89.5953 23.8695 89.6617 24.1185 89.7945 24.2734C89.9329 24.4229 90.1763 24.4976 90.525 24.4976C90.7574 24.4976 90.9926 24.4699 91.2305 24.4146V25.9751C90.7712 26.1024 90.3285 26.166 89.9024 26.166C88.3529 26.166 87.5782 25.311 87.5782 23.6011V18.5127H86.1007V17.0186H87.5782V14.8354H89.5953ZM99.2003 26C99.1118 25.8285 99.0343 25.549 98.9679 25.1616C98.3259 25.8312 97.5401 26.166 96.6105 26.166C95.7084 26.166 94.9724 25.9087 94.4024 25.394C93.8325 24.8794 93.5475 24.243 93.5475 23.4849C93.5475 22.5275 93.9016 21.7943 94.61 21.2852C95.3238 20.7705 96.3421 20.5132 97.6646 20.5132H98.9015V19.9238C98.9015 19.459 98.7714 19.0882 98.5113 18.8115C98.2512 18.5293 97.8556 18.3882 97.3243 18.3882C96.865 18.3882 96.4887 18.5044 96.1954 18.7368C95.9021 18.9637 95.7555 19.2542 95.7555 19.6084H93.7384C93.7384 19.1159 93.9016 18.6566 94.2281 18.2305C94.5546 17.7988 94.9973 17.4613 95.5563 17.2178C96.1207 16.9743 96.7488 16.8525 97.4405 16.8525C98.492 16.8525 99.3303 17.1182 99.9557 17.6494C100.581 18.1751 100.902 18.9167 100.919 19.874V23.9248C100.919 24.7327 101.032 25.3774 101.259 25.8589V26H99.2003ZM96.984 24.5474C97.3824 24.5474 97.756 24.4505 98.1046 24.2568C98.4588 24.0632 98.7244 23.8031 98.9015 23.4766V21.7832H97.8141C97.067 21.7832 96.5053 21.9132 96.129 22.1733C95.7527 22.4334 95.5646 22.8014 95.5646 23.2773C95.5646 23.6647 95.6918 23.9746 95.9464 24.207C96.2065 24.4339 96.5523 24.5474 96.984 24.5474ZM106.282 26H104.265V13.25H106.282V26Z"
            fill="#1E2A35"
          />
        </svg>
        <p
          style={{
            fontSize: "17px",
            letterSpacing: "1.10px",
            lineHeight: "100%",
            color: "rgba(30, 42, 53, 1)",
            marginLeft: 100
          }}
        >
          Roadmap
        </p>{" "}
        <p
          style={{
            fontSize: "17px",
            letterSpacing: "1.10px",
            lineHeight: "100%",
            color: "rgba(30, 42, 53, 1)",
            marginLeft: 14
          }}
        >
          Platform
        </p>{" "}
        <p
          onMouseEnter={() => setShowUc(true)}
          onMouseLeave={() => setShowUc(false)}
          style={{
            fontSize: "17px",
            letterSpacing: "1.10px",
            lineHeight: "100%",
            color: "rgba(30, 42, 53, 1)",
            marginLeft: 14
          }}
        >
          Use Cases
        </p>{" "}
        <svg
          style={{ marginTop: 22, marginLeft: 4 }}
          width={14}
          height={9}
          viewBox="0 0 14 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L7 7L13 1" stroke="#1E2A35" strokeWidth={2} />
        </svg>
        <p
          style={{
            fontSize: "17px",
            letterSpacing: "1.10px",
            lineHeight: "100%",
            color: "rgba(30, 42, 53, 1)",
            marginLeft: "auto"
          }}
        >
          Contact{" "}
        </p>{" "}
        <svg
          style={{ marginTop: 22, marginLeft: 8 }}
          width="17"
          height="8"
          viewBox="0 0 17 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.3536 4.35355C16.5488 4.15829 16.5488 3.84171 16.3536 3.64645L13.1716 0.464466C12.9763 0.269204 12.6597 0.269204 12.4645 0.464466C12.2692 0.659728 12.2692 0.976311 12.4645 1.17157L15.2929 4L12.4645 6.82843C12.2692 7.02369 12.2692 7.34027 12.4645 7.53553C12.6597 7.7308 12.9763 7.7308 13.1716 7.53553L16.3536 4.35355ZM0 4.5H16V3.5H0V4.5Z"
            fill="#0E3944"
          />
        </svg>
      </div>

      {showUC && (
        <div
          onMouseEnter={() => setShowUc(true)}
          style={{
            width: "100%",
            height: "220px",
            background: "white" /* position: 'absolute', */,
            /* left: 0, */
            /* top: '40px', */
            zIndex: 22,
            flexShrink: 0,
            paddingLeft: "4vw",
            paddingRight: "4vw",
            position: "absolute",
            top: 60
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "15px",
                  letterSpacing: "1.1px" /* lineHeight: '100%', */,
                  color: "rgb(30, 42, 53)"
                }}
              >
                Industries
              </div>
              <ul
                style={{
                  listStyle: "none",
                  paddingInlineStart: "0px",
                  color: "rgb(30, 42, 53)"
                }}
              >
                <li>Financial Services</li>
                <li>E-commerce</li>
                <li>Public</li>
                <li>KRITIS</li>
              </ul>
            </div>
            <div>
              <div
                style={{
                  fontSize: "15px",
                  letterSpacing: "1.1px" /* lineHeight: '100%', */,
                  color: "rgb(30, 42, 53)"
                }}
              >
                Functions
              </div>
              <ul
                style={{
                  listStyle: "none",
                  paddingInlineStart: "0px",
                  color: "rgb(30, 42, 53)"
                }}
              >
                <li>Risk Management</li>
                <li>Compliance</li>
                <li>IT Security</li>
                <li>Data privacy</li>
                <li>Internal Auditing</li>
                <li>Supply Chain Management</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(49.04% 214.46% at 0.96% 78.93%, rgba(34, 151, 181, 0.18) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(115.12% 112.21% at 94.34% 19.8%, rgba(35, 41, 214, 0.39) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(183.32deg, #082B34 3.65%, #1E2A35 214.53%)",
          backdropFilter: "blur(7px)"
        }}
      >
        <div style={{ padding: 34 }}>
          <p
            style={{
              fontSize: "25px",
              fontWeight: 500,
              letterSpacing: "1.62px",
              lineHeight: "100%",
              color: "rgba(38.02, 199.70, 240.12, 1)"
            }}
          >
            Reshape Audits
          </p>
          <p
            style={{
              fontSize: "20px",
              letterSpacing: "1.30px",
              fontWeight: 200,

              lineHeight: "100%",
              color: "white"
            }}
          >
            By using data-centricit audit
            <br />
            methodology, Audital enables
            <br />
            the next generation of audits.
          </p>
        </div>

        <svg
          width={865}
          height={305}
          viewBox="0 0 865 305"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d)">
            <rect x={799} y={3} width={62} height={150} rx={31} fill="white" />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M824 43.6C822.675 43.6 821.6 44.6745 821.6 46C821.6 47.3255 822.675 48.4 824 48.4C825.325 48.4 826.4 47.3255 826.4 46C826.4 44.6745 825.325 43.6 824 43.6ZM820 46C820 43.7909 821.791 42 824 42C826.209 42 828 43.7909 828 46C828 48.2091 826.209 50 824 50C821.791 50 820 48.2091 820 46ZM816 58.8C816 54.3817 819.582 50.8 824 50.8C828.418 50.8 832 54.3817 832 58.8C832 59.2418 831.642 59.6 831.2 59.6C830.758 59.6 830.4 59.2418 830.4 58.8C830.4 55.2654 827.535 52.4 824 52.4C820.465 52.4 817.6 55.2654 817.6 58.8C817.6 59.2418 817.242 59.6 816.8 59.6C816.358 59.6 816 59.2418 816 58.8Z"
            fill="#0E3944"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M833 41.6C831.675 41.6 830.6 42.6745 830.6 44C830.6 45.3255 831.675 46.4 833 46.4C834.325 46.4 835.4 45.3255 835.4 44C835.4 42.6745 834.325 41.6 833 41.6ZM829 44C829 41.7909 830.791 40 833 40C835.209 40 837 41.7909 837 44C837 46.2091 835.209 48 833 48C830.791 48 829 46.2091 829 44ZM825 56.8C825 52.3817 828.582 48.8 833 48.8C837.418 48.8 841 52.3817 841 56.8C841 57.2418 840.642 57.6 840.2 57.6C839.758 57.6 839.4 57.2418 839.4 56.8C839.4 53.2654 836.535 50.4 833 50.4C829.465 50.4 826.6 53.2654 826.6 56.8C826.6 57.2418 826.242 57.6 825.8 57.6C825.358 57.6 825 57.2418 825 56.8Z"
            fill="#0E3944"
          />
          <circle cx={830} cy={106} r={14} fill="#0E3944" fillOpacity="0.1" />
          <path
            d="M825.441 101.005L833.927 109.49"
            stroke="#0E3944"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <path
            d="M824.91 109.396L833.395 100.91"
            stroke="#0E3944"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <g filter="url(#filter1_d)">
            <rect x={4} y={71} width={295} height={62} rx={10} fill="white" />
          </g>
          <g filter="url(#filter2_d)">
            <rect x={47} y={141} width={252} height={45} rx={10} fill="white" />
          </g>
          <g filter="url(#filter3_d)">
            <rect
              x={340}
              y={71}
              width={252}
              height={229}
              rx={10}
              fill="white"
            />
          </g>
          <rect
            x={358}
            y={86}
            width={216}
            height={166}
            rx={4}
            fill="#D9E1E4"
            fillOpacity="0.71"
          />
          <path
            d="M358 90C358 87.7909 359.791 86 362 86H387V252H362C359.791 252 358 250.209 358 248V90Z"
            fill="#D9E1E4"
          />
          <rect
            x={23}
            y={90}
            width={253}
            height={22}
            rx={5}
            fill="#2CB4D7"
            fillOpacity="0.72"
          />
          <defs>
            <filter
              id="filter0_d"
              x={795}
              y={0}
              width={70}
              height={158}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy={1} />
              <feGaussianBlur stdDeviation={2} />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d"
              x={0}
              y={68}
              width={303}
              height={70}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy={1} />
              <feGaussianBlur stdDeviation={2} />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_d"
              x={43}
              y={138}
              width={260}
              height={53}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy={1} />
              <feGaussianBlur stdDeviation={2} />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter3_d"
              x={336}
              y={68}
              width={260}
              height={237}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy={1} />
              <feGaussianBlur stdDeviation={2} />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
