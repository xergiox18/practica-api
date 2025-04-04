import React from "react";

const Loader: React.FC = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-orange-500"
      style={{
        backgroundImage:
          "repeating-conic-gradient(from 0deg, orangered, transparent 10deg, orange 10deg, orangered 20deg)",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundColor: "orange",
      }}
    >
      <div className="flex justify-center items-center min-h-screen">
        <div className="space-y-6">
          <div className="flex justify-center space-x-8">
            <div className="loader">
              <svg viewBox="0 0 150 150">
                <rect x="15" y="15" width="120" height="120"></rect>
                <text
                  x="50%"
                  y="60%"
                  textAnchor="middle"
                  fill="black"
                  fontSize="60"
                  fontWeight="bold"
                >
                  D
                </text>
              </svg>
            </div>

            <div className="loader">
              <svg viewBox="0 0 150 150">
                <rect x="15" y="15" width="120" height="120"></rect>
                <text
                  x="50%"
                  y="60%"
                  textAnchor="middle"
                  fill="black"
                  fontSize="60"
                  fontWeight="bold"
                >
                  R
                </text>
              </svg>
            </div>

            <div className="loader">
              <svg viewBox="0 0 150 150">
                <rect x="15" y="15" width="120" height="120"></rect>
                <text
                  x="50%"
                  y="60%"
                  textAnchor="middle"
                  fill="black"
                  fontSize="60"
                  fontWeight="bold"
                >
                  A
                </text>
              </svg>
            </div>

            <div className="loader">
              <svg viewBox="0 0 150 150">
                <rect x="15" y="15" width="120" height="120"></rect>
                <text
                  x="50%"
                  y="60%"
                  textAnchor="middle"
                  fill="black"
                  fontSize="60"
                  fontWeight="bold"
                >
                  G
                </text>
              </svg>
            </div>

            <div className="loader">
              <svg viewBox="0 0 150 150">
                <rect x="15" y="15" width="120" height="120"></rect>
                <text
                  x="50%"
                  y="60%"
                  textAnchor="middle"
                  fill="black"
                  fontSize="60"
                  fontWeight="bold"
                >
                  O
                </text>
              </svg>
            </div>

            <div className="loader">
              <svg viewBox="0 0 150 150">
                <rect x="15" y="15" width="120" height="120"></rect>
                <text
                  x="50%"
                  y="60%"
                  textAnchor="middle"
                  fill="black"
                  fontSize="60"
                  fontWeight="bold"
                >
                  N
                </text>
              </svg>
            </div>
          </div>

          <div className="flex justify-center space-x-8">
            <div className="loader">
              <svg viewBox="0 0 150 150">
                <rect x="15" y="15" width="120" height="120"></rect>
                <text
                  x="50%"
                  y="60%"
                  textAnchor="middle"
                  fill="black"
                  fontSize="60"
                  fontWeight="bold"
                >
                  B
                </text>
              </svg>
            </div>

            <div className="loader">
              <svg viewBox="0 0 150 150">
                <rect x="15" y="15" width="120" height="120"></rect>
                <text
                  x="50%"
                  y="60%"
                  textAnchor="middle"
                  fill="black"
                  fontSize="60"
                  fontWeight="bold"
                >
                  A
                </text>
              </svg>
            </div>

            <div className="loader">
              <svg viewBox="0 0 150 150">
                <rect x="15" y="15" width="120" height="120"></rect>
                <text
                  x="50%"
                  y="60%"
                  textAnchor="middle"
                  fill="black"
                  fontSize="60"
                  fontWeight="bold"
                >
                  L
                </text>
              </svg>
            </div>

            <div className="loader">
              <svg viewBox="0 0 150 150">
                <rect x="15" y="15" width="120" height="120"></rect>
                <text
                  x="50%"
                  y="60%"
                  textAnchor="middle"
                  fill="black"
                  fontSize="60"
                  fontWeight="bold"
                >
                  L
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
