import React, { useEffect, useRef, useState } from "react";
import resumeFile from "../assets/Akshat_Singhal.pdf";
import { BiSun, BiMoon } from "react-icons/bi";
import profilePic from "../assets/image.jpg";
import Social from "../components/Social";
import Email from "../components/Email";
import * as pdfjs from "pdfjs-dist";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).href;

const Resume = ({ isDarkMode, setIsDarkMode }) => {
  const canvasRef = useRef(null);
  const renderPromiseRef = useRef(null); // Track render promise

  useEffect(() => {
    const loadingTask = pdfjs.getDocument(resumeFile);

    const renderPdf = async () => {
      try {
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 1 });
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        // Ensure the canvas is set to the right size
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Clear the previous content
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Wait for the previous render operation to complete
        if (renderPromiseRef.current) {
          await renderPromiseRef.current;
        }

        // Render the current page
        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        renderPromiseRef.current = page.render(renderContext).promise;
        await renderPromiseRef.current;
      } catch (error) {
        console.error("Error loading or rendering PDF", error);
      }
    };

    renderPdf();

    return () => {
      // Cleanup if necessary
      if (renderPromiseRef.current) {
        renderPromiseRef.current = null; // Release the reference
      }
    };
  }, []);

  return (
    <div className="overflow-hidden min-[900px]:h-screen text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        {/* Dark Mode */}
        {!isDarkMode && (
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        )}
        {/* Light Mode */}
        {isDarkMode && (
          <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(148,147,147,.9)_100%)]"></div>
        )}
      </div>
      <Social isDarkMode={isDarkMode} />
      <Email isDarkMode={isDarkMode} />
      <nav className="max-[425px]:mt-5 flex items-center justify-between py-8 mx-auto px-8 max-md:px-4">
        <div className="flex flex-shrink-0 items-center">
          <a href="/">
            <img
              className="mx-2 w-10"
              src={isDarkMode ? logoLight : logoDark}
              alt="logo"
            />
          </a>
        </div>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`ml-4 text-lg ${
            isDarkMode ? "text-slate-900" : "text-white"
          }`}
        >
          {isDarkMode ? <BiMoon size={30} /> : <BiSun size={30} />}
        </button>
      </nav>
      <div className="flex h-5/6 items-center min-[900px]:mx-20 max-[860px]:mx-10 max-[900px]:flex-col justify-center">
        <div className="w-2/5 p-4 items-center justify-center max-[768px]:w-full">
          <button
            onClick={() => window.history.back()}
            className={`text-md py-2 px-4 font-mono text-center rounded-lg border-b-2 border-t-2 ${
              isDarkMode
                ? "text-neutral-700 border-neutral-700 hover:bg-slate-400"
                : " hover:bg-[rgba(256,256,256,0.1)]"
            }`}
          >
            Back
          </button>
          {/* Profile Card */}
          <div>
            <div className="p-6 rounded-lg w-full shadow-lg">
              <img
                className="w-36 h-36 rounded-full mx-auto"
                src={profilePic}
                alt="Profile"
              />
              <h2
                className={`text-center text-2xl font-semibold mt-4 ${
                  isDarkMode ? "text-slate-700" : ""
                }`}
              >
                Akshat Singhal
              </h2>
              <div
                className={`text-center mt-2 ${
                  isDarkMode
                    ? "text-slate-800"
                    : "text-gray-400 dark:text-gray-300"
                }`}
              >
              </div>
              {/* Download Resume Button */}
              <div className="text-center my-6">
                <a
                  href={resumeFile}
                  download="Akshat_Singhal.pdf"
                  className={`text-md py-2 px-2 w-full font-mono text-center rounded-lg border-b-2 border-t-2 ${
                    isDarkMode
                      ? "text-neutral-700 border-neutral-700 hover:bg-slate-400"
                      : " hover:bg-[rgba(256,256,256,0.1)]"
                  }`}
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex max-[768px]:w-full max-w-xl items-center justify-center px-10 py-10 shadow-lg">
          <canvas
            ref={canvasRef}
            className=" max-[375px]:h-[300px] max-[500px]:h-[400px]  max-[768px]:h-[550px] max-[1024px]:h-[600px] max-[1440px]:h-[700px]"
          ></canvas>
        </div>
      </div>
    </div>
  );
};

export default Resume;
