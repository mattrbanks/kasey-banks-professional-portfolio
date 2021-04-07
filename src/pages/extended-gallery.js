import React from "react";
import Layout from "../components/layout";

const ExtendedGallery = () => {
  return (
    <Layout>
      <div>
        <div className="container mx-auto p-8">
          <div className="flex flex-row flex-wrap -mx-2">
            <div className="w-full md:w-1/2 h-64 md:h-auto mb-4 px-2">
              <a
                className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                href="#"
                title="Link"
                style={{
                  backgroundImage:
                    "url('https://github.com/mattrbanks/temp-images-repo/blob/main/image%20(1).png?raw=true')",
                }}
              >
                Link
              </a>
            </div>
            <div className="w-full md:w-1/2 mb-4 px-2">
              <div className="flex flex-col sm:flex-row md:flex-col -mx-2">
                <div className="w-full sm:w-1/2 md:w-full h-48 xl:h-64 mb-4 sm:mb-0 md:mb-4 px-2">
                  <a
                    className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                    href="#"
                    title="Link"
                    style={{
                      backgroundImage:
                        "url('https://github.com/mattrbanks/temp-images-repo/blob/main/image%20(2).png?raw=true')",
                    }}
                  >
                    Link
                  </a>
                </div>
                <div className="w-full sm:w-1/2 md:w-full h-48 xl:h-64 px-2">
                  <a
                    className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                    href="#"
                    title="Link"
                    style={{
                      backgroundImage:
                        "url('https://github.com/mattrbanks/temp-images-repo/blob/main/image%20(3).png?raw=true')",
                    }}
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/3 h-32 md:h-48 mb-4 sm:mb-0 px-2">
              <a
                className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                href="#"
                title="Link"
                style={{
                  backgroundImage:
                    "url('https://github.com/mattrbanks/temp-images-repo/blob/main/image%20(4).png?raw=true')",
                }}
              >
                Link
              </a>
            </div>
            <div className="w-full sm:w-1/3 h-32 md:h-48 mb-4 sm:mb-0 px-2">
              <a
                className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                href="#"
                title="Link"
                style={{
                  backgroundImage:
                    "url('https://github.com/mattrbanks/temp-images-repo/blob/main/image%20(5).png?raw=true')",
                }}
              >
                Link
              </a>
            </div>
            <div className="w-full sm:w-1/3 h-32 md:h-48 px-2">
              <a
                className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                href="#"
                title="Link"
                style={{
                  backgroundImage:
                    "url('https://github.com/mattrbanks/temp-images-repo/blob/main/image.png?raw=true')",
                }}
              >
                Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ExtendedGallery;
